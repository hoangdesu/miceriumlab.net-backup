<?php
/**
 * Sensei LMS Certificates Templates.
 *
 * All functionality pertaining to the Certificate Templates functionality in Sensei.
 *
 * @package    WordPress
 * @subpackage Sensei
 * @category   Extension
 * @author     Automattic
 * @since      1.0.0
 */

/**
 * TABLE OF CONTENTS
 *
 * - Requires
 * - Actions and Filters
 * - certificate_template_data_meta_box()
 * - certificate_templates_process_meta()
 */

/**
 * Functions for displaying the certificates data meta box.
 *
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Actions and Filters.
 */
add_action( 'sensei_process_certificate_template_meta', 'certificate_templates_process_meta', 10, 2 );


/**
 * Certificates data meta box.
 *
 * Displays the meta box.
 *
 * @since 1.0.0
 */
function certificate_template_data_meta_box( $post ) {

	global $woocommerce, $woothemes_sensei_certificate_templates;

	wp_nonce_field( 'certificates_save_data', 'certificates_meta_nonce' );

	$woothemes_sensei_certificate_templates->populate_object( $post->ID );

	$default_fonts   = array(
		'Helvetica' => 'Helvetica',
		'Courier'   => 'Courier',
		'Times'     => 'Times',
	);
	$available_fonts = array_merge( array( '' => '' ), $default_fonts );

	// Since this little snippet of css applies only to the certificates post page, it's easier to have inline here.
	?>
	<style type="text/css">
		#misc-publishing-actions { display:none; }
		#edit-slug-box { display:none }
		.imgareaselect-outer { cursor: crosshair; }
	</style>
	<div id="certificate_options" class="panel certificate_templates_options_panel">
		<div class="options_group">
			<?php

				// Defaults.
				echo '<div class="options_group">';
					certificate_templates_wp_font_select(
						array(
							'id'                => '_certificate',
							'label'             => __( 'Default Font', 'sensei-certificates' ),
							'options'           => $default_fonts,
							'font_size_default' => 12,
						)
					);
					certificates_wp_text_input(
						array(
							'id'          => '_certificate_font_color',
							'label'       => __( 'Default Font color', 'sensei-certificates' ),
							'default'     => '#000000',
							'description' => __( 'The default text color for the certificate.', 'sensei-certificates' ),
							'class'       => 'colorpick',
						)
					);
				echo '</div>';

				// Heading.
				echo '<div class="options_group">';
					certificate_templates_wp_position_picker(
						array(
							'id'          => 'certificate_heading_pos',
							'label'       => __( 'Heading Position', 'sensei-certificates' ),
							'value'       => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_heading' ) ),
							'description' => __( 'Optional position of the Certificate Heading', 'sensei-certificates' ),
						)
					);
					certificates_wp_hidden_input(
						array(
							'id'    => '_certificate_heading_pos',
							'class' => 'field_pos',
							'value' => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_heading' ) ),
						)
					);
					certificate_templates_wp_font_select(
						array(
							'id'      => '_certificate_heading',
							'label'   => __( 'Font', 'sensei-certificates' ),
							'options' => $available_fonts,
						)
					);
					certificates_wp_text_input(
						array(
							'id'    => '_certificate_heading_font_color',
							'label' => __( 'Font color', 'sensei-certificates' ),
							'value' => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_heading']['font']['color'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_heading']['font']['color'] : '',
							'class' => 'colorpick',
						)
					);
					certificates_wp_text_input(
						array(
							'class'       => 'medium',
							'id'          => '_certificate_heading_text',
							'label'       => __( 'Heading Text', 'sensei-certificates' ),
							'description' => __( 'Text to display in the heading.', 'sensei-certificates' ),
							'placeholder' => __( 'Certificate of Completion', 'sensei-certificates' ),
							'value'       => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_heading']['text'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_heading']['text'] : '',
						)
					);
				echo '</div>';

				// Message.
				echo '<div class="options_group">';
					certificate_templates_wp_position_picker(
						array(
							'id'          => 'certificate_message_pos',
							'label'       => __( 'Message Position', 'sensei-certificates' ),
							'value'       => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_message' ) ),
							'description' => __( 'Optional position of the Certificate Message', 'sensei-certificates' ),
						)
					);
					certificates_wp_hidden_input(
						array(
							'id'    => '_certificate_message_pos',
							'class' => 'field_pos',
							'value' => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_message' ) ),
						)
					);
					certificate_templates_wp_font_select(
						array(
							'id'      => '_certificate_message',
							'label'   => __( 'Font', 'sensei-certificates' ),
							'options' => $available_fonts,
						)
					);
					certificates_wp_text_input(
						array(
							'id'    => '_certificate_message_font_color',
							'label' => __( 'Font color', 'sensei-certificates' ),
							'value' => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_message']['font']['color'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_message']['font']['color'] : '',
							'class' => 'colorpick',
						)
					);
					certificates_wp_textarea_input(
						array(
							'class'       => 'medium',
							'id'          => '_certificate_message_text',
							'label'       => __( 'Message Text', 'sensei-certificates' ),
							'description' => __( 'Text to display in the message area.', 'sensei-certificates' ),
							'placeholder' => __( 'This is to certify that {{learner}} has completed the course', 'sensei-certificates' ),
							'value'       => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_message']['text'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_message']['text'] : '',
						)
					);
				echo '</div>';

				// Certificate course position.
				echo '<div class="options_group">';
					certificate_templates_wp_position_picker(
						array(
							'id'          => 'certificate_course_pos',
							'label'       => __( 'Course Position', 'sensei-certificates' ),
							'value'       => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_course' ) ),
							'description' => __( 'Optional position of the Course Name', 'sensei-certificates' ),
						)
					);
					certificates_wp_hidden_input(
						array(
							'id'    => '_certificate_course_pos',
							'class' => 'field_pos',
							'value' => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_course' ) ),
						)
					);
					certificate_templates_wp_font_select(
						array(
							'id'      => '_certificate_course',
							'label'   => __( 'Font', 'sensei-certificates' ),
							'options' => $available_fonts,
						)
					);
					certificates_wp_text_input(
						array(
							'id'    => '_certificate_course_font_color',
							'label' => __( 'Font color', 'sensei-certificates' ),
							'value' => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_course']['font']['color'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_course']['font']['color'] : '',
							'class' => 'colorpick',
						)
					);
					certificates_wp_text_input(
						array(
							'class'       => 'medium',
							'id'          => '_certificate_course_text',
							'label'       => __( 'Course Text', 'sensei-certificates' ),
							'description' => __( 'Text to display in the course area.', 'sensei-certificates' ),
							'placeholder' => __( '{{course_title}}', 'sensei-certificates' ),
							'value'       => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_course']['text'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_course']['text'] : '',
						)
					);
				echo '</div>';

				// Certificate complete position.
				echo '<div class="options_group">';
					certificate_templates_wp_position_picker(
						array(
							'id'          => 'certificate_completion_pos',
							'label'       => __( 'Completion Date Position', 'sensei-certificates' ),
							'value'       => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_completion' ) ),
							'description' => __( 'Optional position of the Course Completion date', 'sensei-certificates' ),
						)
					);
					certificates_wp_hidden_input(
						array(
							'id'    => '_certificate_completion_pos',
							'class' => 'field_pos',
							'value' => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_completion' ) ),
						)
					);
					certificate_templates_wp_font_select(
						array(
							'id'      => '_certificate_completion',
							'label'   => __( 'Font', 'sensei-certificates' ),
							'options' => $available_fonts,
						)
					);
					certificates_wp_text_input(
						array(
							'id'    => '_certificate_completion_font_color',
							'label' => __( 'Font color', 'sensei-certificates' ),
							'value' => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_completion']['font']['color'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_completion']['font']['color'] : '',
							'class' => 'colorpick',
						)
					);
					certificates_wp_text_input(
						array(
							'class'       => 'medium',
							'id'          => '_certificate_completion_text',
							'label'       => __( 'Completion Date Text', 'sensei-certificates' ),
							'description' => __( 'Text to display in the course completion date area.', 'sensei-certificates' ),
							'placeholder' => __( '{{completion_date}}', 'sensei-certificates' ),
							'value'       => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_completion']['text'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_completion']['text'] : '',
						)
					);
				echo '</div>';

				// Certificate place position.
				echo '<div class="options_group">';
					certificate_templates_wp_position_picker(
						array(
							'id'          => 'certificate_place_pos',
							'label'       => __( 'Place Position', 'sensei-certificates' ),
							'value'       => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_place' ) ),
							'description' => __( 'Optional position of the place of Certification.', 'sensei-certificates' ),
						)
					);
					certificates_wp_hidden_input(
						array(
							'id'    => '_certificate_place_pos',
							'class' => 'field_pos',
							'value' => implode( ',', $woothemes_sensei_certificate_templates->get_field_position( 'certificate_place' ) ),
						)
					);
					certificate_templates_wp_font_select(
						array(
							'id'      => '_certificate_place',
							'label'   => __( 'Font', 'sensei-certificates' ),
							'options' => $available_fonts,
						)
					);
					certificates_wp_text_input(
						array(
							'id'    => '_certificate_place_font_color',
							'label' => __( 'Font color', 'sensei-certificates' ),
							'value' => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_place']['font']['color'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_place']['font']['color'] : '',
							'class' => 'colorpick',
						)
					);
					certificates_wp_text_input(
						array(
							'class'       => 'medium',
							'id'          => '_certificate_place_text',
							'label'       => __( 'Course Place Text', 'sensei-certificates' ),
							'description' => __( 'Text to display in the course place area.', 'sensei-certificates' ),
							'placeholder' => __( '{{course_place}}', 'sensei-certificates' ),
							'value'       => isset( $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_place']['text'] ) ? $woothemes_sensei_certificate_templates->certificate_template_fields['certificate_place']['text'] : '',
						)
					);
				echo '</div>';

			?>
		</div>
	</div>
	<?php
}


/**
 * Certificate Data Save.
 *
 * Function for processing and storing all certificate data.
 *
 * @since 1.0.0
 * @param int    $post_id The certificate id.
 * @param object $post    The certificate post object.
 */
function certificate_templates_process_meta( $post_id, $post ) {
	if (
		empty( $_POST['certificates_meta_nonce'] )
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Leave nonce value unmodified.
		|| ! wp_verify_nonce( wp_unslash( $_POST['certificates_meta_nonce'] ), 'certificates_save_data' )
	) {
		return;
	}

	$font_color  = ! empty( $_POST['_certificate_font_color'] ) ? sanitize_text_field( wp_unslash( $_POST['_certificate_font_color'] ) ) : '#000000'; // Provide a default.
	$font_size   = ! empty( $_POST['_certificate_font_size'] ) ? intval( $_POST['_certificate_font_size'] ) : 11; // Provide a default.
	$font_family = ! empty( $_POST['_certificate_font_family'] ) ? sanitize_text_field( wp_unslash( $_POST['_certificate_font_family'] ) ) : '';

	// Certificate template font defaults.
	update_post_meta( $post_id, '_certificate_font_color', $font_color );
	update_post_meta( $post_id, '_certificate_font_size', $font_size );
	update_post_meta( $post_id, '_certificate_font_family', $font_family );
	update_post_meta(
		$post_id,
		'_certificate_font_style',
		( isset( $_POST['_certificate_font_style_b'] ) && 'yes' == $_POST['_certificate_font_style_b'] ? 'B' : '' ) .
														( isset( $_POST['_certificate_font_style_i'] ) && 'yes' == $_POST['_certificate_font_style_i'] ? 'I' : '' ) .
														( isset( $_POST['_certificate_font_style_c'] ) && 'yes' == $_POST['_certificate_font_style_c'] ? 'C' : '' ) .
														( isset( $_POST['_certificate_font_style_o'] ) && 'yes' == $_POST['_certificate_font_style_o'] ? 'O' : '' )
	);

	// Original sizes: default 11, product name 16, sku 8.
	// Create the certificate template fields data structure.
	$fields = array();
	foreach ( array( '_certificate_heading', '_certificate_message', '_certificate_course', '_certificate_completion', '_certificate_place' ) as $i => $field_name ) {

		// Set the field defaults.
		$field = array(
			'type'     => 'property',
			'font'     => array(
				'family' => '',
				'size'   => '',
				'style'  => '',
				'color'  => '',
			),
			'position' => array(),
			'order'    => $i,
		);

		// Get the field position (if set).
		if ( ! empty( $_POST[ $field_name . '_pos' ] ) ) {
			// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Sanitized after the explode in map with intval.
			$position = explode( ',', wp_unslash( $_POST[ $field_name . '_pos' ] ) );
			$position = array_map( 'intval', $position );

			$field['position'] = array(
				'x1'     => $position[0],
				'y1'     => $position[1],
				'width'  => $position[2],
				'height' => $position[3],
			);
		}

		if ( ! empty( $_POST[ $field_name . '_text' ] ) ) {
			$field['text'] = sanitize_textarea_field( wp_unslash( $_POST[ $field_name . '_text' ] ) );
		}

		// Get the field font settings (if any).
		if ( ! empty( $_POST[ $field_name . '_font_family' ] ) ) {
			$field['font']['family'] = sanitize_text_field( wp_unslash( $_POST[ $field_name . '_font_family' ] ) );
		}
		if ( ! empty( $_POST[ $field_name . '_font_size' ] ) ) {
			$field['font']['size'] = intval( $_POST[ $field_name . '_font_size' ] );
		}
		if ( isset( $_POST[ $field_name . '_font_style_b' ] ) ) {
			$field['font']['style'] = 'B';
		}
		if ( isset( $_POST[ $field_name . '_font_style_i' ] ) ) {
			$field['font']['style'] .= 'I';
		}
		if ( isset( $_POST[ $field_name . '_font_style_c' ] ) ) {
			$field['font']['style'] .= 'C';
		}
		if ( isset( $_POST[ $field_name . '_font_style_o' ] ) ) {
			$field['font']['style'] .= 'O';
		}
		if ( isset( $_POST[ $field_name . '_font_color' ] ) ) {
			$field['font']['color'] = sanitize_text_field( wp_unslash( $_POST[ $field_name . '_font_color' ] ) );
		}

		// Cut off the leading '_' to create the field name.
		$fields[ ltrim( $field_name, '_' ) ] = $field;

	}

	update_post_meta( $post_id, '_certificate_template_fields', $fields );
}
