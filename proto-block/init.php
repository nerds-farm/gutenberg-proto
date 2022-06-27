<?php

class Proto_Block {

    public function __construct() {

        /**
         * Register PHP Block block
         */
        add_action('init', [$this, '_init']);
    }

    public function get_name() {
        return 'proto-block';
    }

    public function _init() {
        wp_register_script(
                $this->get_name(),
                plugins_url("index.js", __FILE__),
                [
                    'wp-element',
                    'wp-blocks',
                    'wp-components',
                    'wp-block-editor',
                    'wp-server-side-render'
                ]
        );
        register_block_type('nerds-farm/' . $this->get_name(), [
            'editor_script' => $this->get_name(),
            'render_callback' => [$this, 'render'],
            'attributes' => [
                'message' => [
                    'type' => 'string',
                    'default' => 'Hello World!',
                ],
                'url' => [
                    'type' => 'string'
                ],
                'targetBlank' => [
                    'type' => 'bool'
                ],
                'html' => [
                    'type' => 'string',
                    'default' => 'h2',
                ],
                'content' => [
                    'source' => 'html',
                    'selector' => 'h2',
                ],
                'backgroundColor' => [
                    'type' => 'string',
                    'default' => '#900900',
                ],
                'textColor' => [
                    'type' => 'string',
                    'default' => '#ffffff',
                ]
            ]
        ]);
    }

    /**
     * Render PHP Block block
     */
    public function render($attributes, $content) {
        //var_dump($attributes); //var_dump($content);
        $html = !empty($attributes['html']) ? $attributes['html'] : 'h2';
        
        $style = '';
        $style .= !empty($attributes['backgroundColor']) ? 'background-color: '.$attributes['backgroundColor'].';' : '';
        $style .= !empty($attributes['textColor']) ? 'color: '.$attributes['textColor'].';' : '';
        $style = $style ? ' style="'.$style.'"' : '';
        
        $message = !empty($attributes['message']) ? $attributes['message'] : 'Hi Marco';
        $href = !empty($attributes['url']) ? $attributes['url'] : '';
        $href = $href ? '<a'.$style.' href="'.$href.'"'.(!empty($attributes['targetBlank']) ? ' target="_blank"' : '').'>' : '';
        
        
        ob_start();
        ?>
        <<?php echo $html; echo $style; ?>>
            <?php echo $href; ?>
            <?php echo esc_html($message); ?>
            <?php echo $href ? '</a>' : ''; ?>
        </<?php echo $html; ?>>
        <?php
        $content = ob_get_clean();
        //var_dump($content);
        $this->enquque();

        return $content;
    }

    public function enquque() {
        wp_enqueue_style(
                $this->get_name(),
                plugins_url("front.css", __FILE__)
        );
    }

}
