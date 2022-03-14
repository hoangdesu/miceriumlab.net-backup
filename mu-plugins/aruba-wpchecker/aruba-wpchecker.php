<?php
/**
Plugin Name:  Aruba WordPress checker
Version:      14
Author:       http://www.aruba.it
Author URI:   http://www.aruba.it
*/

define('ARUBA_WPCHEKER_VERSION', 14);

function aruba_wpchecker_getfilename_must_use()
{
    $site_url = strtolower(str_replace("http://", "", str_replace("https://", "", site_url())));
    $filename = md5($site_url."/aruba-wpchecker.php").".php";
    return $filename;
}

function aruba_wpchecker_write_file_must_use($filename)
{
    $template_dir = "./wp-content/mu-plugins/aruba-wpchecker/aruba-wpchecker-template.php";
    $template = file_get_contents($template_dir);
    $template = str_replace("##PLUGIN_PATH##", "./wp-content/mu-plugins/aruba-wpchecker/", $template);
    $template = str_replace("##PLUGIN_VERSION##", ARUBA_WPCHEKER_VERSION, $template);
    file_put_contents(ABSPATH."/".$filename, $template);

    return $template_dir;
}

function aruba_wpchecker_plugin_activation_must_use()
{
    $filepath = aruba_wpchecker_getfilename_must_use();
    if (!file_exists(ABSPATH."/".$filepath)) {
        aruba_wpchecker_write_file_must_use($filepath);
    } else {
        $content = file(ABSPATH."/".$filepath);

        $current_version = (int) trim(str_replace('// version: ', '', $content[1]));

        if ($current_version < ARUBA_WPCHEKER_VERSION) {
            aruba_wpchecker_write_file_must_use($filepath);
        }
    }
}

aruba_wpchecker_plugin_activation_must_use();

function aruba_wpmanaged_define_costant()
{
    //Define the const
    //If the const already defined. use the filter to pass true val.
    if (!defined('AUTOMATIC_UPDATER_DISABLED')) {
        define('AUTOMATIC_UPDATER_DISABLED', true);
    } else {
        add_filter('automatic_updater_disabled', '__return_true', 1, 999999);
    }

    //We make sure that the value has not changed by some other function.
    //I'm not sure this really avail ... but it's an extra check
    if (!apply_filters('automatic_updater_disabled', true)) {
        add_filter('automatic_updater_disabled', '__return_true', 1, 999999);
    }

    //define the const
    if (!defined('FS_METHOD')) {
        define('FS_METHOD', 'direct');
    }
}


aruba_wpmanaged_define_costant();

function aruba_wpmanaged_after_core_auto_updates_settings_fields_message($auto_update_settings)
{
    //https://make.wordpress.org/core/2020/11/02/introducing-auto-updates-interface-for-core-major-versions-in-wordpress-5-6/

    $template = "<p>
	<span>%s</span></br>
	<span>%s</span>
	<ul style='list-style-type: circle;padding:0 0 0 2.5rem;'>%s</ul>
	<span>%s</span>
	</p>";

    switch (get_locale()) {
        case "it_IT":
            $heading = "Il tuo servizio gestito include gi&agrave; gli aggiornamenti automatici. ";
            $subheading = "Aruba si occupa per te di: ";
            $list = "<li>Aggiornare core, temi e plugin WordPress;</li><li>Verificare l'esito delle operazioni di aggiornamento;</li><li>Ripristinare il backup salvato automaticamente subito prima dell'aggiornamento in caso di anomalie. </li>";
            $footer = "Per questo motivo sono stati disabilitati gli aggiornamenti nativi di WordPress.";
            break;
        case "es_ES":
            $heading = "Tu servicio gestionado ya incluye las actualizaciones autom&aacute;ticas. ";
            $subheading = "Aruba se ocupa de: ";
            $list = "<li>Actualizar core, temas y plugins de WordPress;</li><li>Verificar el resultado de las operaciones de actualizaci&oacute;n;</li><li>Restaurar, en caso de anomal&iacute;as, la &uacute;ltima copia de seguridad guardada autom&aacute;ticamente antes de la actualizaci&oacute;n.</li>";
            $footer = "Por este motivo, se han deshabilitado las actualizaciones nativas de WordPress.";
            break;
        default:
            $heading = "Your managed service already includes automatic updates. ";
            $subheading = "Aruba takes care of:";
            $list = "<li>WordPress core, theme and plugin updates;</li><li>Checking that updates have run successfully;</li><li>Restoring the last saved automatic backup, in case of any problems following an update.</li>";
            $footer = "Native WordPress updates have therefore been disabled.";
    } ?>
<div class="notice notice-success inline">
	<?php echo sprintf(
    $template,
    $heading,
    $subheading,
    $list,
    $footer
); ?>
</div>
<?php
}

if (is_admin()) {
    add_action('after_core_auto_updates_settings', 'aruba_wpmanaged_after_core_auto_updates_settings_fields_message', 10, 1);
}
