<?php
class Twenty20_Image_Elementor_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return "twenty20";
	}

	public function get_title() {
		return __( 'Twenty20 image<br/>Before-After', ZB_T20_DOMAIN );
	}

	public function get_icon() {
		return 'fa fa-image';
	}

	public function get_categories() {
		return [ 'general' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'content_section',
			[
				'label' => __( 'Twenty20 Content', ZB_T20_DOMAIN ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'img1',
			[
				'label' => __( 'Before Image', ZB_T20_DOMAIN ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				]
			]
		);

		$this->add_control(
			'img2',
			[
				'label' => __( 'After Image', ZB_T20_DOMAIN ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				]
			]
		);

		$this->add_control(
			'before',
			[
				'label' => __( 'Before Text', ZB_T20_DOMAIN ),
				'type' => \Elementor\Controls_Manager::TEXT
			]
		);

		$this->add_control(
			'after',
			[
				'label' => __( 'After Text', ZB_T20_DOMAIN ),
				'type' => \Elementor\Controls_Manager::TEXT
			]
		);

		$this->add_control(
			'direction',
			[
				'label' => __( 'Direction', ZB_T20_DOMAIN ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'default' => __( 'Horizontal', ZB_T20_DOMAIN ),
					'vertical' => __( 'Vertical', ZB_T20_DOMAIN ),
				],
				'default' => 'default',
			]
		);

		$this->add_control(
			'hover',
			[
				'label' => __( 'Mouse over', ZB_T20_DOMAIN ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'true' => __( 'Yes', ZB_T20_DOMAIN ),
					'false' => __( 'No', ZB_T20_DOMAIN ),
				],
				'default' => 'false',
			]
		);

		$this->add_control(
			'offset',
			[
				'label' => __( 'Offset', ZB_T20_DOMAIN ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'0.1' => __( '0.1', ZB_T20_DOMAIN ),
					'0.2' => __( '0.2', ZB_T20_DOMAIN ),
					'0.3' => __( '0.3', ZB_T20_DOMAIN ),
					'0.4' => __( '0.4', ZB_T20_DOMAIN ),
					'0.5' => __( '0.5', ZB_T20_DOMAIN ),
					'0.6' => __( '0.6', ZB_T20_DOMAIN ),
					'0.7' => __( '0.7', ZB_T20_DOMAIN ),
					'0.8' => __( '0.8', ZB_T20_DOMAIN ),
					'0.9' => __( '0.9', ZB_T20_DOMAIN ),
					'1' => __( '1.0', ZB_T20_DOMAIN ),
				],
				'default' => '0.5',
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$img1 = $settings['img1'];
		$img2 = $settings['img2'];
		$offset = $settings['offset'];
		$before = $settings['before'];
		$after = $settings['after'];
		$direction = $settings['direction'];
		$hover = $settings['hover'];

		if($before == null || $before == ''){ $before = ''; }else{ $before = ' before="' . $before . '"'; }
		if($after == null || $after == ''){ $after = ''; }else{ $after = ' after="' . $after . '"'; }
		if($direction == 'default'){ $direction = ''; }else{ $direction = ' direction="'. $direction . '"'; }
		if($hover == 'false'){ $hover = ''; }else{ $hover = ' hover="' . $hover . '"'; }

		echo '[twenty20 img1="' . $img1["id"] . '" img2="' . $img2["id"] . '" offset="' . $offset . '"' . $direction . $before . $after . $hover . ']';

		
	}

	protected function _content_template() {}

}