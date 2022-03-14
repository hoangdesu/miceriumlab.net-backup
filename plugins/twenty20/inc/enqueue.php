<?php
// Style and Script Enqueue
function twenty20_zb_enqueue_script() {

  // Twenty20 Style
  wp_enqueue_style( 'twenty20-style', ZB_T20_URL . '/assets/css/twenty20.css', array(), ZB_T20_VER );

  // Twenty20 Script
  wp_enqueue_script( 'twenty20-style', ZB_T20_URL . '/assets/js/jquery.twenty20.js', array( 'jquery' ), ZB_T20_VER, true );

  // Twenty20 Event Move Script
  wp_enqueue_script( 'twenty20-eventmove-style', ZB_T20_URL . '/assets/js/jquery.event.move.js', array( 'jquery' ), ZB_T20_VER, true );

}
add_action( 'wp_enqueue_scripts', 'twenty20_zb_enqueue_script');

function include_media_button_js_file() {
  wp_enqueue_script('media_button', ZB_T20_URL . '/assets/js/media_button.js', array('jquery'), ZB_T20_VER, true);
  wp_enqueue_style( 'twenty20-admin-style', ZB_T20_URL . '/assets/css/admin.css', array(), ZB_T20_VER );
}
add_action('wp_enqueue_media', 'include_media_button_js_file');

function add_twenty20_shortcode_button() {
 echo '<a href="#" id="insert-t20-media" class="button"><span class="wp-media-buttons-icon dashicons dashicons-image-flip-horizontal"></span> Add Twenty20</a>';

echo '<a href="#TB_inline?width=700&height=550&inlineId=twenty20-help" class="thickbox button">Help T20</a>';
 //echo '<a href="#" class="button">Help T20</a>';

}
add_action('media_buttons', 'add_twenty20_shortcode_button', 15);

function twenty20_popup_on_select(){
?>
<div id="twenty20_select" style="display:none;">
  <div class="wrap">
    <table class="form-table">
      <tr valign="top">
        <th scope="row" width="25%">Before Text:</th>
        <td width="75%">
          <input type="text" id="t20_sc_before_caption" name="t20_sc_before_caption" value="" placeholder="Type Image Caption or Text here " class="widefat"><br/>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row" width="25%">After Text:</th>
        <td width="75%">
          <input type="text" id="t20_sc_after_caption" name="t20_sc_after_caption" value="" placeholder="Type Image Caption or Text here " class="widefat"><br/>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row" width="25%">Width:</th>
        <td width="75%">
          <input type="text" id="t20_sc_width" name="t20_sc_width" value="" placeholder="Example: 60% or 500px" class="widefat"><br/>
          <em><small>Default value: 100%</small></em>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row" width="25%">Offset:</th>
        <td width="75%">
          <select id="t20_sc_offset" name="t20_sc_offset" class="widefat">
            <option value="0.1">0.1</option>
            <option value="0.2">0.2</option>
            <option value="0.3">0.3</option>
            <option value="0.4">0.4</option>
            <option value="0.5" selected>0.5</option>
            <option value="0.6">0.6</option>
            <option value="0.7">0.7</option>
            <option value="0.8">0.8</option>
            <option value="0.9">0.9</option>
            <option value="1">1.0</option>
          </select>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row" width="25%">Direction:</th>
        <td width="75%">
          <select id="t20_sc_direction" name="t20_sc_direction" class="widefat">
            <option value="default" selected>Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row" width="25%">Alignment:</th>
        <td width="75%">
          <select id="t20_sc_align" name="t20_sc_align" class="widefat">
            <option value="" selected>None</option>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </td>
      </tr>
      <tr valign="top">
        <th scope="row" width="25%">Move slider on mouse hover?:</th>
        <td width="75%">
          <select id="t20_sc_hover" name="t20_sc_hover" class="widefat">
            <option value="true">Yes</option>
            <option value="false" selected>No</option>
          </select>
        </td>
      </tr>
    </table>
    <a href="#" id="insert-t20-sc" class="button button-primary button-large">Insert Shortcode</a>
    <input type="hidden" id="t20_img1" name="t20_img1">
    <input type="hidden" id="t20_img2" name="t20_img2">
    <!-- <img src="" class="timg-before" /> -->
  </div>
</div>
<?php
}
add_action('admin_footer','twenty20_popup_on_select');

function twenty20_help_popup(){
?>
<div id="twenty20-help" style="display:none;">
  <style type="text/css" media="screen">
    .t20-table{border: 1px solid #eee; margin-top: 20px;width: 100%;}
    .t20-table th{text-align: center; padding: 5px 0; background: #eee; font-size: 12px;}
    .t20-table td{padding: 5px; font-size: 12px; border: 1px solid #eee;}
    .t20-table tr:nth-child(odd){background: #f9f9f9;}
    .t20-table td code{background: transparent;}
    code.example{ padding: 5px 10px; background: #f9f9f9; border: 1px solid #dedede; font-size: 12px; display: block;}
  </style>
  <div class="wrap">
    <h1>Help Twenty20
      <a href="https://wordpress.org/support/plugin/twenty20" class="page-title-action" target="_blank">Support</a>
      <a href="https://profiles.wordpress.org/zayedbaloch" class="page-title-action" target="_blank">Contact</a>
    </h1>
    <h4>Shortcode</h4>
    You can add a shortcode from the media button or you can manually add one.
    <h4>Quick Example</h4>
    <code class="example">[twenty20 img1="" img2="" direction="vertical" offset="0.5" align="right" width="60%" before="Before" after="After"]</code>

    <h4>Shortcode Parameters</h4>
    <table class="t20-table form-table">
      <tr valign="top">
        <th width="20%">Name</th>
        <th width="20%">Default value</th>
        <th width="60%">Description</th>
      </tr>
      <tr valign="top">
        <td width="20%"><code>img1</code></td>
        <td width="20%">null</td>
        <td width="60%">The first image url / link will be on the left.</td>
      </tr>
      <tr valign="top">
        <td><code>img2</code></td>
        <td>null</td>
        <td>The second url / link image will be on the right.</td>
      </tr>
      <tr valign="top">
        <td><code>before</code></td>
        <td>null</td>
        <td>Display image caption or custom text for before image.</td>
      </tr>
      <tr valign="top">
        <td><code>after</code></td>
        <td>null</td>
        <td>Display image caption or custom text for after image.</td>
      </tr>
      <tr valign="top">
        <td><code>offset</code></td>
        <td>0.5</td>
        <td>How far from the left the slider should be by default</td>
      </tr>
      <tr valign="top">
        <td><code>direction</code></td>
        <td>horizontal</td>
        <td>The orientation setting can be used to set the slider to <code>vertical</code> or <code>horizontal</code>.</td>
      </tr>
      <tr valign="top">
        <td><code>align</code></td>
        <td>none</td>
        <td>The alignment setting can be used to set the slider to <code>right</code> or <code>left</code>.</td>
      </tr>
      <tr valign="top">
        <td><code>hover</code></td>
        <td>false</td>
        <td>The hover setting can be used to move slider on mouse hover.</td>
      </tr>
      <tr valign="top">
        <td><code>width</code></td>
        <td>100%</td>
        <td>The width setting can be used in percentage and pixels. e.g <code>80%</code> or <code>500px</code></td>
      </tr>
    </table>
  </div>
</div>
<?php
}
add_action('admin_footer','twenty20_help_popup');