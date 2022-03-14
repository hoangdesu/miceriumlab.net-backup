<?php

add_action('ux_builder_setup', 'dfc_ux_builder_element'); 
function dfc_ux_builder_element(){
  add_ux_builder_shortcode( 'twenty20', array(
    'name' => __( 'Twenty20' ),
    'thumbnail' =>  twenty20_ux_builder_thumbnails( 'twenty20' ),
    'template' => twenty20_ux_builder_template( 'twenty20.html' ),
    'allow_in' => array('text_box'),
    'wrap' => false,

    'options' => array(

      'img1' => array(
        'type' => 'image',
        'heading' => __('Before Image'),
        'default' => ''
      ),

      'img2' => array(
        'type' => 'image',
        'heading' => __('After Image'),
        'default' => ''
      ),

      'before' => array(
        'type' => 'textfield',
        'heading' => 'Before Text',
        'default' => '',
      ),

      'after' => array(
        'type' => 'textfield',
        'heading' => 'After Text',
        'default' => '',
      ),

      'width' => array(
        'type' => 'slider',
        'heading' => __('Width'),
        'responsive' => true,
        'default' => '100',
        'unit' => '%',
        'max' => '100',
        'min' => '0',
      ),

      'direction' => array(
        'type' => 'select',
        'heading' => 'Direction',
        'default' => 'horizontal',
        'options' => array(
            'horizontal' => 'Horizontal',
            'vertical'  => 'Vertical'
        )
      ),

      'offset' => array(
        'type' => 'select',
        'heading' => 'Offset',
        'default' => '0.5',
        'options' => array(
            '0.1' => '0.1',
            '0.2' => '0.2',
            '0.3' => '0.3',
            '0.4' => '0.4',
            '0.5' => '0.5',
            '0.6' => '0.6',
            '0.7' => '0.7',
            '0.8' => '0.8',
            '0.9' => '0.9',
            '1' => '1',
        )
      ),

      'align' => array(
        'type' => 'select',
        'heading' => 'Align',
        'default' => '',
        'options' => array(
        		'' => 'None',
            'right' => 'Right',
            'left'  => 'Left'
        )
      ),

      'hover' => array(
        'type' => 'select',
        'heading' => 'Mouse over',
        'default' => 'false',
        'options' => array(
            'true' => 'Yes',
            'false'  => 'No'
        )
      ),

      

      
     
    ),
  ));
}