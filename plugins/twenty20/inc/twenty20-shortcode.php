<?php

function twenty20_shortcode_init( $atts) {
  extract( shortcode_atts(
    array(
      'img1' => '',
      'img2' => '',
      'offset' => '0.5',
      'direction' => 'horizontal',
      'width' => '',
      'align' => '',
      'before' => '',
      'after' => '',
      'hover' => false
    ), $atts )
  );

  static $i = 1;

  $t20ID = "twenty20-" . $i;

  $isVertical = "";
  $data_vertical = "";
  $isLeft = "";
  $isRight = "";

  if ($align == "right"){
    $isRight = " float: right; margin-left: 20px;";
    if (empty($width)){ $width = "width: 50%;"; }
  }

  if ($align == "left"){
    $isLeft = " float: left; margin-right: 20px;";
    if (empty($width)){ $width = "width: 50%;"; }
  }

  if (empty($width)){
    $width = "width: 100% !important; clear: both;";
  }else{
    $width = "width: " . $width . ';';
  }

  if($direction == "vertical"){
    $isVertical = ' data-orientation="vertical"';
    $data_vertical = ", orientation: 'vertical'";
  }
  if( $hover === "true"){
    $isHover = ',move_slider_on_hover: true';
    $yesHover = "t20-hover";
  }else{
    $isHover = '';
    $yesHover = '';
  }

if(!empty($img1) && !empty($img2)){
  $img1_alt = get_post_meta( $img1, '_wp_attachment_image_alt', true);
  $img2_alt = get_post_meta( $img2, '_wp_attachment_image_alt', true);

  if($img1_alt){
    $img1_alt = ' alt="' . $img1_alt . '" title="'.$img1_alt.'"';
  }else{
    $img1_alt = '';
  }
  if($img2_alt){
    $img2_alt = ' alt="' . $img2_alt . '" title="'.$img2_alt.'"';
  }else{
    $img2_alt = '';
  }

  $output = '<div id="'.$t20ID.'" class="twenty20" style="'. $width . $isLeft . $isRight . '">';
  $output .= '<div class="twentytwenty-container '. $t20ID.' '.$yesHover.'"' . $isVertical . '>';
  $output .= '<img class="skip-lazy" src="'. wp_get_attachment_url( $img1 ) .'"'.$img1_alt.' />';
  $output .= '<img class="skip-lazy" src="'. wp_get_attachment_url( $img2 ) .'"'.$img2_alt.' />';
  $output .= '</div>';
  $output .= '<script>jQuery(window).on("load", function(){';
  if($direction == "vertical"){
    $output .= 'jQuery(".twentytwenty-container.'.$t20ID.'[data-orientation=\'vertical\']").twentytwenty({default_offset_pct: ' . $offset . $data_vertical . $isHover . '});';
  }else{
    $output .= 'jQuery(".twentytwenty-container.'.$t20ID.'[data-orientation!=\'vertical\']").twentytwenty({default_offset_pct: '. $offset . $isHover .'});';
  }
  
  if($before){
    $output .= 'jQuery(".' . $t20ID . ' .twentytwenty-before-label").html("'. $before .'");';
  }else{
    $output .= 'jQuery(".' . $t20ID . ' .twentytwenty-overlay").hide();';
  }
  if($after){
    $output .= 'jQuery(".' . $t20ID . ' .twentytwenty-after-label").html("'. $after .'");';
  }else{
    $output .= 'jQuery(".' . $t20ID . ' .twentytwenty-overlay").hide();';
  }
  $output .= '});</script></div>';
}else{
  $output = '<div class="twenty20" style="color: red;">Twenty20 need two images.</div>';
}

  $i++;

  return $output;
}
add_shortcode( 'twenty20', 'twenty20_shortcode_init' );