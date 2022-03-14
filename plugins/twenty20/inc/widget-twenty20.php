<?php
//Widget Registration.
function twenty20_slider_widget_register() {
  register_widget( 'twenty20_slider_widget' );
}

class twenty20_slider_widget extends WP_Widget {
  // Widget Class Constructor
  function __construct() {
    parent::__construct(
      't20_slider_widget',
      __( 'Twenty20 Slider', ZB_T20_DOMAIN ),
      array( 'description' => __( 'Highlight the differences between two images.', ZB_T20_DOMAIN ), )
    );
    add_action('admin_enqueue_scripts', array(&$this, 'mac_admin_scripts'));
  }

  function mac_admin_scripts($hook) {
    if ($hook != 'widgets.php')
        return;
    wp_enqueue_media();
    wp_register_style( 'mac_style', ZB_T20_URL . '/assets/css/admin.css', false, ZB_T20_VER );
    wp_enqueue_style( 'mac_style' );
    wp_register_script('mac_widget_admin', ZB_T20_URL . '/assets/js/admin.js', array('jquery'), ZB_T20_VER, true);
    wp_register_script('mac_widget_img', ZB_T20_URL . '/assets/js/image-uploader.js', array('jquery'), ZB_T20_VER, true);
    wp_enqueue_script('mac_widget_admin');
    wp_enqueue_script('mac_widget_img');
  }

  // Front-end View
  public function widget( $args, $instance ) {
    echo $args['before_widget'];
    if ( ! empty( $instance['title'] ) ) {
      echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ). $args['after_title'];
    }
    ?>
    <div class="mac-wrap">
      <?php
        $t20ID = $args['widget_id'];
        $isVertical = '';
        if($instance['is_vertical'] == true) {
          $isVertical = ' data-orientation="vertical"';
        }else{
          $isVertical = '';
        }
        if( $instance['t20_widget_hover'] === 'true'){
          $isHover = ',move_slider_on_hover: true';
          $yesHover = "t20-hover";
        }else{
          $isHover = '';
          $yesHover = '';
        }
      ?>
      <?php if (!empty($instance['t20_img_before']) && !empty($instance['t20_img_after'])): ?>
      <div class="twenty20">
        <div class="twentytwenty-container <?php echo $t20ID;?>"<?php echo $isVertical; ?>>
          <img src="<?php echo esc_url($instance['t20_img_before']) ?>">
          <img src="<?php echo esc_url($instance['t20_img_after']) ?>">
        </div>
        <script>
          jQuery(window).on("load", function(){
            
            <?php if($instance['is_vertical'] == true) { ?>
              jQuery(".twentytwenty-container.<?php echo $t20ID;?>[data-orientation=\'vertical\']").twentytwenty({default_offset_pct: <?php echo $instance['t20_widget_offset']; ?>, orientation: 'vertical' <?php echo $isHover;?>});
            <?php }else{ ?>
            jQuery(".twentytwenty-container.<?php echo $t20ID;?>[data-orientation!=\'vertical\']").twentytwenty({default_offset_pct: <?php echo $instance['t20_widget_offset']; ?> <?php echo $isHover;?>});
            <?php } ?>
            <?php if(!empty($instance['t20_widget_before'])) { ?>
              jQuery(".<?php echo $t20ID;?> .twentytwenty-before-label").html("<?php echo $instance['t20_widget_before'];?>");
            <?php }else{ ?>
              jQuery(".<?php echo $t20ID;?> .twentytwenty-before-label").hide();
            <?php } ?>
            <?php if(!empty($instance['t20_widget_after'])) { ?>
              jQuery(".<?php echo $t20ID;?> .twentytwenty-after-label").html("<?php echo $instance['t20_widget_after'];?>");
            <?php }else{ ?>
              jQuery(".<?php echo $t20ID;?> .twentytwenty-after-label").hide();
            <?php } ?>
          });
        </script>
      </div>
      <?php endif ?>
    </div>
  <?php echo $args['after_widget']; }

  // Widget Layout
  public function form( $instance ) {

    $title = ! empty( $instance['title'] ) ? $instance['title'] : __( '', ZB_T20_DOMAIN );
    $t20_widget_before = ! empty( $instance['t20_widget_before'] ) ? $instance['t20_widget_before'] : __( '', ZB_T20_DOMAIN );
    $t20_widget_after = ! empty( $instance['t20_widget_after'] ) ? $instance['t20_widget_after'] : __( '', ZB_T20_DOMAIN );
    $t20_img_before = ( isset( $instance['t20_img_before'] ) ? $instance['t20_img_before'] : '' );
    $t20_img_after = ( isset( $instance['t20_img_after'] ) ? $instance['t20_img_after'] : '' );
    $is_vertical = isset( $instance[ 'is_vertical' ] ) ? esc_attr( $instance[ 'is_vertical' ] ) : 1;
    $t20_widget_offset = ! empty( $instance['t20_widget_offset'] ) ? $instance['t20_widget_offset'] : __( '0.5', ZB_T20_DOMAIN );
    $t20_widget_hover = ! empty( $instance['t20_widget_hover'] ) ? $instance['t20_widget_hover'] : __( 'false', ZB_T20_DOMAIN );

  ?>

  <div class="mac_options_form">
    <p>
      <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', ZB_T20_DOMAIN ); ?></label>
      <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
    </p>

    <p class="check">
      <label for="<?php echo $this->get_field_id("is_vertical"); ?>" />
        <input type="checkbox" class="checkbox" id="<?php echo $this->get_field_name("is_vertical"); ?>" name="<?php echo $this->get_field_name("is_vertical"); ?>" value="1" <?php checked( 1, isset($instance['is_vertical']), true ); ?> />
        <strong><label for="<?php echo $this->get_field_name("is_vertical"); ?>"><?php _e( 'Set Vertical direction', ZB_T20_DOMAIN); ?></label></strong>
      </label>
    </p>

    <p>
      <label for="<?php echo $this->get_field_id( 't20_widget_before' ); ?>"><?php _e( 'Before:', ZB_T20_DOMAIN ); ?></label>
      <input class="widefat" id="<?php echo $this->get_field_id( 't20_widget_before' ); ?>" name="<?php echo $this->get_field_name( 't20_widget_before' ); ?>" type="text" value="<?php echo esc_attr( $t20_widget_before ); ?>">
    </p>
    <p>
      <label for="<?php echo $this->get_field_id( 't20_widget_after' ); ?>"><?php _e( 'After:', ZB_T20_DOMAIN ); ?></label>
      <input class="widefat" id="<?php echo $this->get_field_id( 't20_widget_after' ); ?>" name="<?php echo $this->get_field_name( 't20_widget_after' ); ?>" type="text" value="<?php echo esc_attr( $t20_widget_after ); ?>">
    </p>

    <p>
      <strong><label for="<?php echo $this->get_field_id('t20_widget_offset'); ?>"><?php _e('Offset:', ZB_T20_DOMAIN); ?></label></strong>
      <select id="<?php echo $this->get_field_id('t20_widget_offset'); ?>" name="<?php echo $this->get_field_name('t20_widget_offset'); ?>">
        <option value=""><?php _e('Select offset value', ZB_T20_DOMAIN); ?></option>
        <option value="0.1" <?php selected($t20_widget_offset, '0.1', true); ?>><?php _e('0.1', ZB_T20_DOMAIN); ?></option>
        <option value="0.2" <?php selected($t20_widget_offset, '0.2', true); ?>><?php _e('0.2', ZB_T20_DOMAIN); ?></option>
        <option value="0.3" <?php selected($t20_widget_offset, '0.3', true); ?>><?php _e('0.3', ZB_T20_DOMAIN); ?></option>
        <option value="0.4" <?php selected($t20_widget_offset, '0.4', true); ?>><?php _e('0.4', ZB_T20_DOMAIN); ?></option>
        <option value="0.5" <?php selected($t20_widget_offset, '0.5', true); ?>><?php _e('0.5 (default)', ZB_T20_DOMAIN); ?></option>
        <option value="0.6" <?php selected($t20_widget_offset, '0.6', true); ?>><?php _e('0.6', ZB_T20_DOMAIN); ?></option>
        <option value="0.7" <?php selected($t20_widget_offset, '0.7', true); ?>><?php _e('0.7', ZB_T20_DOMAIN); ?></option>
        <option value="0.8" <?php selected($t20_widget_offset, '0.8', true); ?>><?php _e('0.8', ZB_T20_DOMAIN); ?></option>
        <option value="0.9" <?php selected($t20_widget_offset, '0.9', true); ?>><?php _e('0.9', ZB_T20_DOMAIN); ?></option>
        <option value="1" <?php selected($t20_widget_offset, '1', true); ?>><?php _e('1.0', ZB_T20_DOMAIN); ?></option>
      </select>
    </p>

    <p>
      <strong><label for="<?php echo $this->get_field_id('t20_widget_hover'); ?>"><?php _e('Mouse over:', ZB_T20_DOMAIN); ?></label></strong>
      <select id="<?php echo $this->get_field_id('t20_widget_hover'); ?>" name="<?php echo $this->get_field_name('t20_widget_hover'); ?>">
        <option value="false" <?php selected($t20_widget_hover, 'false', true); ?>><?php _e('No', ZB_T20_DOMAIN); ?></option>
        <option value="true" <?php selected($t20_widget_hover, 'true', true); ?>><?php _e('Yes', ZB_T20_DOMAIN); ?></option>
      </select>
      <br/><em>Move slider on mouse hover?</em>
    </p>

    <p>
      <label for="<?php echo $this->get_field_id( 't20_img_before' ); ?>"><?php _e( 'Before Image:', ZB_T20_DOMAIN ); ?> <span class="mac-info" title="<?php _e('Select t20_img_before or enter external image url.', ZB_T20_DOMAIN); ?>"></span></label><br/>
      <?php if(empty( $t20_img_before )){ $t20_img_before = ZB_T20_URL . '/assets/images/placeholder.png'; } ?>
      <img src="<?php echo $t20_img_before; ?>" width="150px"/>

      <input class="widefat mac-img-before" id="<?php echo $this->get_field_id( 't20_img_before' ); ?>" name="<?php echo $this->get_field_name( 't20_img_before' ); ?>" type="hidden" value="<?php echo esc_attr( $t20_img_before ); ?>" />

      <span class="submit">
        <input type="button" data-t20="img-t20-before" name="submit" id="submit" class="button button-primary mac-upload_image_button" value="Select image">
        <input type="button" name="submit" id="submit" class="button delete button-secondary mac-remove-image-before" value="X">
      </span>
    </p>

    <p>
      <label for="<?php echo $this->get_field_id( 't20_img_after' ); ?>"><?php _e( 'After Image:', ZB_T20_DOMAIN ); ?> <span class="mac-info" title="<?php _e('Select Twenty20 Slider  or enter external image url.', ZB_T20_DOMAIN); ?>""></span></label><br/>

      <?php if( empty( $t20_img_after )){ $t20_img_after = ZB_T20_URL . '/assets/images/placeholder.png';} ?>
      <img src="<?php echo $t20_img_after; ?>" width="150px"/>

      <input class="widefat mac-img-after" id="<?php echo $this->get_field_id( 't20_img_after' ); ?>" name="<?php echo $this->get_field_name( 't20_img_after' ); ?>" type="hidden" value="<?php echo esc_attr( $t20_img_after ); ?>" />

      <span class="submit">
        <input type="button" data-t20="img-t20-after" name="submit" id="submit" class="button button-primary mac-upload_image_button" value="Select image">
        <input type="button" name="submit" id="submit" class="button delete button-secondary mac-remove-image-after" value="X">
      </span>
    </p>

  </div>

<?php
  }
  // Save Data
  public function update( $new_instance, $old_instance ) {
    $instance = array();
    $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
    $instance['t20_img_before'] = ( ! empty( $new_instance['t20_img_before'] ) ) ? esc_url( strip_tags( $new_instance['t20_img_before'] ) ) : '';
    $instance['t20_img_after'] = ( ! empty( $new_instance['t20_img_after'] ) ) ? esc_url( strip_tags( $new_instance['t20_img_after'] ) ) : '';
    $instance['is_vertical'] = $new_instance['is_vertical'];
    $instance['t20_widget_offset'] = $new_instance['t20_widget_offset'];
    $instance['t20_widget_hover'] = $new_instance['t20_widget_hover'];
    $instance['t20_widget_before'] = $new_instance['t20_widget_before'];
    $instance['t20_widget_after'] = $new_instance['t20_widget_after'];
    
    return $instance;
  }
}
add_action( 'widgets_init', 'twenty20_slider_widget_register' );