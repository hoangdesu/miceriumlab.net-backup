<?php
  /*
   * Visual Composer Support
   */
add_action( 'vc_before_init', 'twenty20_shortcode_integrateWithVC' );
function twenty20_shortcode_integrateWithVC() {
  vc_map( array(
    "name"      =>  __( "Twenty20", ZB_T20_DOMAIN ),
    "base"      =>  "twenty20",
    "icon"      =>  "icon-twenty20",
    "category"  =>  __( "Content", ZB_T20_DOMAIN),
    "params"    =>  array(
      array(
        'type'        =>  'attach_image',
        'heading'     =>  __( 'Before Image', ZB_T20_DOMAIN ),
        'param_name'  =>  'img1',
        "description" =>  __("Select Before Image.", ZB_T20_DOMAIN),
      ),
      array(
        'type'        =>  'attach_image',
        'heading'     =>  __( 'After Image', ZB_T20_DOMAIN ),
        'param_name'  =>  'img2',
        "description" =>  __("Select After Image.", ZB_T20_DOMAIN),
      ),
      array(
        'type'        =>  'textfield',
        'heading'     =>  __( 'Before Text', ZB_T20_DOMAIN ),
        'param_name'  =>  'before',
        "description" =>  __("Twenty20 before text.", ZB_T20_DOMAIN),
      ),
      array(
        'type'        =>  'textfield',
        'heading'     =>  __( 'After Text', ZB_T20_DOMAIN ),
        'param_name'  =>  'after',
        "description" =>  __("Twenty20 after text.", ZB_T20_DOMAIN),
      ),
      array(
        'type'        =>  'textfield',
        'heading'     =>  __( 'Width', ZB_T20_DOMAIN ),
        'param_name'  =>  'width',
        "description" =>  __("Twenty20 container width.", ZB_T20_DOMAIN),
      ),

      array(
        'type'        =>  'dropdown',
        'heading'     =>  __( 'Direction', ZB_T20_DOMAIN ),
        'param_name'  =>  'direction',
        "description" =>  __("Select twenty20 slider direction", ZB_T20_DOMAIN),
        "value"       =>  array(
          'Horizontal'  =>  'default',
          'Vertical'    =>  'vertical'
        )
      ),
      array(
        'type'          =>  'dropdown',
        'heading'       =>  __( 'Offset', ZB_T20_DOMAIN ),
        'param_name'    =>  'offset',
        "description"   =>  __("Slider offset", ZB_T20_DOMAIN),
        "value"         =>  array(
          '0.5' =>  '0.5',
          '0.1' =>  '0.1',
          '0.2' =>  '0.2',
          '0.3' =>  '0.3',
          '0.4' =>  '0.4',
          '0.5' =>  '0.5',
          '0.6' =>  '0.6',
          '0.7' =>  '0.7',
          '0.8' =>  '0.8',
          '0.9' =>  '0.9',
          '1'   =>  '1.0',
        )
      ),
      array(
        'type'        =>  'dropdown',
        'heading'     =>  __( 'Mouseover', ZB_T20_DOMAIN ),
        'param_name'  =>  'hover',
        "description" =>  __("Move slider on mouse hover?", ZB_T20_DOMAIN),
        "value"       =>  array(
          'No'  =>  'false',
          'Yes'    =>  'true'
        )
      ),
      array(
        'type'          =>  'dropdown',
        'heading'       =>  __( 'Alignment', ZB_T20_DOMAIN ),
        'param_name'    =>  'align',
        "description"   =>  __("", ZB_T20_DOMAIN),
        "value"         =>  array(
          'None'  =>  'none',
          'Right' =>  'right',
          'Left'  =>  'left'
        )
      ),
    ),
  ));
}
if ( class_exists( 'WPBakeryShortCode' ) ) {
  class WPBakeryShortCode_Twenty20_Shortcode extends WPBakeryShortCode { }
}
