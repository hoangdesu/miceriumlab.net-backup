<?php
// version: ##PLUGIN_VERSION##
// Written by Aruba.it WP checker plugin

class ArubaWpChecker
{
    public $response = null;
    private $config = null;
    private $db = null;
    private $table_prefix = null;

    public function __construct()
    {
        $this->response = new \stdClass();
        $this->response->esito = false; //
        $this->response->message = "";
        $this->response->rc = "";

        $this->response->php_version = phpversion();
        $this->response->plugin_version = "";
        $this->response->requires_php =  "7.3.10";
        $this->response->requires_wordpress = "5.3.3";
        $this->run();
    }

    private function run()
    {
        $this->checkPlugin();
        $this->checkWPConfig();
        $this->checkWPConfigComment();
        $this->checkDBConnection();
        $this->checkWPCoreTables();
        $this->sendOKResponse("OK", 0);
    }

    private function checkPlugin()
    {
        if (!file_exists("##PLUGIN_PATH##aruba-wpchecker.php")) {
            $this->sendKOResponse("Plugin non correttamente installato", 1);
        }

        $plugin_data = file("##PLUGIN_PATH##aruba-wpchecker.php");
        $plugin_version = str_replace("Version:      ", "", str_replace(array("\r\n", "\n", "\r"), "", $plugin_data[3]));
        $this->response->plugin_version = $plugin_version;
    }

    private function checkWPConfig()
    {
        if (!file_exists("wp-config.php")) {
            $this->sendKOResponse("Impossibile trovare il file di configurazione di wordpress", 2);
        }
        $this->config = file("wp-config.php");
    }

    private function checkDBConnection()
    {
        $regex = "/DB_NAME|DB_USER|DB_PASSWORD|DB_HOST/";

        $lookup = [];

        foreach ($this->cleaning_comment($this->config) as $line) {
            if (preg_match($regex, $line, $match)) {
                eval($line);
            }
        }

        $dsn = 'mysql:dbname=' .DB_NAME. ';host=' .DB_HOST;

        try {
            $this->db = new PDO($dsn, DB_USER, DB_PASSWORD);
        } catch (PDOException $e) {
            $this->sendKOResponse("Impossibile connettersi al database", 3);
        }
        $this->getTablePrefix();
    }
    
    private function is_commentline($line)
    {
        $regex = "/(\/\/)|(\/\*\*)|(\*)/";

        return (!preg_match($regex, $line, $match)) ? $match : null;
    }
    
    private function cleaning_comment($source)
    {
        $texts = null;
        $tokens = token_get_all(implode("\r\n", $source));

        foreach ($tokens as $token) {
            if (is_string($token)) {
                // simple 1-character token
                $texts .= $token;
            } else {
                // token array
                list($id, $text) = $token;

                switch ($id) {
                   case T_COMMENT:
                   case T_DOC_COMMENT:
                        // no action on comments
                       break;

                   default:
                       // anything else -> output "as is"
                       $texts .= $text;
                       break;
               }
            }
        }
        
        return explode("\r\n", $texts);
    }

    private function getTablePrefix()
    {
        $regex = "/table_prefix/";

        foreach ($this->config as $line) {
            if (preg_match($regex, $line, $match)) {
                $parts = str_replace(array("'", "\"", " "), "", $line);
                $parts = str_replace(array(";", "="), ",", $parts);
                $parts = explode(",", $parts);

                $value[] = $parts[1];
            }
        }

        if (count($value) > 1) {
            define('SHORTINIT', true);

            require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR .'wp-load.php');

            add_filter("enable_maintenance_mode", "false", 10, 2);

            //this exclude all off plugin installed
            add_filter('option_active_plugins', function ($plugins) {
                $loadplugins = [];
                foreach ($plugins as $plugins__key => $plugins__value) {
                    if (!in_array($plugins__value, $loadplugins)) {
                        unset($plugins[$plugins__key]);
                    }
                }
                return $plugins;
            });

            global $wpdb;

            $this->table_prefix = $wpdb->prefix;
        } else {
            $this->table_prefix = $value[0];
        }
    }

    private function checkWPConfigComment()
    {
        $comment_eng = "/\/\* That's all, stop editing!/";
        $comment_ita_esp = "/Finito, interrompere le modifiche!|¡Eso es todo, deja de editar!/";
        $comment_null = "/if \( \! defined\( 'ABSPATH' \) \) \{/";

        //se c'è il commento in inglese non succede nulla
        foreach ($this->config as $line) {
            if (preg_match($comment_eng, $line, $match) == 1) {
                return;
            }
        }

        //se non c'è il commento in inglese allora controllo se ce quello in italiano..
        //se c'è quello in ita aggiungo sopra quello in inglese, altrimenti emetto l'errore.
        foreach ($this->config as $key => $line) {
            if (preg_match($comment_ita_esp, $line, $match) == 1) {
                $config = file("wp-config.php");
                array_splice($config, $key, 0, "/* That's all, stop editing! Happy publishing. */\n");
                file_put_contents("wp-config.php", $config);

                return;
            } elseif (preg_match("/\/\*That's all, stop editing!/", $line, $match) == 1) {
                $config = file("wp-config.php");
                $config[$key] = "/* That's all, stop editing! Happy publishing. */\n";
                file_put_contents("wp-config.php", $config);

                return;
            }
        }
        
        foreach ($this->config as $key => $line) {
            if (preg_match($comment_null, $line, $match) == 1) {
                $config = file("wp-config.php");
                array_splice($config, $key, 0, "/* That's all, stop editing! Happy publishing. */\n");
                file_put_contents("wp-config.php", $config);

                return;
            }
        }

        $this->sendKOResponse("Impossibile trovare e/o inserire il commento That's all, stop editing!. nel WpConfing.php", 6);
    }


    private function checkWPCoreTables()
    {
        $table_options = 'select 1 from `'.$this->table_prefix.'options` LIMIT 1';
        if ($this->db->query($table_options) === false) {
            $this->sendKOResponse("Tabella options mancante dbError: " .implode(" ", $this->db->errorInfo()), 4);
        }

        $table_users = 'select 1 from `'.$this->table_prefix.'users` LIMIT 1';
        if ($this->db->query($table_users) === false) {
            $this->sendKOResponse("Tabella users mancante dbError: " .implode(" ", $this->db->errorInfo()), 4);
        }

        $table_usermeta = 'select 1 from `'.$this->table_prefix.'usermeta` LIMIT 1';
        if ($this->db->query($table_usermeta) === false) {
            $this->sendKOResponse("Tabella usermeta mancante dbError: " .implode(" ", $this->db->errorInfo()), 4);
        }
    }


    private function sendKOResponse($message, $rc)
    {
        header('Content-Type: application/json');
        $this->response->esito = false;
        $this->response->message = $message;
        $this->response->rc = $rc;
        echo json_encode($this->response);
        exit();
    }

    private function sendOKResponse($message, $rc)
    {
        header('Content-Type: application/json');
        $this->response->esito = true;
        $this->response->message = $message;
        $this->response->rc = $rc;

        echo json_encode($this->response);
        exit();
    }
}
$aruba = new ArubaWpChecker();
