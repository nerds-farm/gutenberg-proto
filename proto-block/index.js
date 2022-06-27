const {registerBlockType} = wp.blocks;
const {__} = wp.i18n;
const {InspectorControls, RichText, BlockControls, AlignmentToolbar} = wp.blockEditor;
const {TextControl, Panel, PanelBody, PanelRow, ToggleControl, CheckboxControl, SelectControl, ColorPicker, Toolbar, IconButton} = wp.components;
const {Component, createElement, Fragment} = wp.element;

/*
 const {  } = wp.components;
 */

const blockName = "nerds-farm/proto-block";
registerBlockType(blockName, {
    title: "Proto Block",
    icon: 'smiley',
    description: "A custom block type.",
    category: "widgets",
    edit(props) {
        return createElement(Fragment, {}, [
            createElement(
                    InspectorControls,
                    {},
                    [
                        createElement(Panel, {}, [
                            createElement(PanelBody, {}, [
                                createElement(PanelRow, {}, [
                                    createElement(TextControl, {
                                        label: __("Message", "proto-block"),
                                        value: props.attributes.message,
                                        onChange: function (update) {
                                            props.setAttributes({message: update, });
                                        },
                                    }),
                                ]),
                                createElement(PanelRow, {}, [
                                    createElement(TextControl, {
                                        label: __("Url", "proto-block"),
                                        value: props.attributes.url,
                                        onChange: function (update) {
                                            props.setAttributes({url: update, });
                                        },
                                    }),
                                ]),
                                createElement(PanelRow, {}, [
                                    createElement(ToggleControl, {
                                        label: __("Target Blank", "proto-block"),
                                        checked: props.attributes.targetBlank,
                                        onChange: function (update) {
                                            props.setAttributes({targetBlank: update, });
                                        },
                                    }),
                                ]),
                                createElement(PanelRow, {}, [
                                    createElement(SelectControl, {
                                        label: __("HTML", "proto-block"),
                                        value: props.attributes.html,
                                        options: [
                                            {value: 'h1', label: 'H1'},
                                            {value: 'h2', label: 'H2'},
                                            {value: 'h3', label: 'H3'},
                                            {value: 'div', label: 'DIV'},
                                            {value: 'p', label: 'P'},
                                        ],
                                        onChange: function (update) {
                                            props.setAttributes({html: update, });
                                        },
                                    }),
                                ]),
                            ]),
                        ]),
                        createElement(
                                wp.editor.PanelColorSettings, {
                                    title: __("Color Settings", "proto-block"),
                                    colorSettings: [
                                        {
                                            label: __("Background Color", "proto-block"),
                                            value: props.attributes.backgroundColor,
                                            onChange: function (newBackgroundColor) {
                                                props.setAttributes({backgroundColor: newBackgroundColor});
                                            }
                                        },
                                        {
                                            label: __("Text Color", "proto-block"),
                                            value: props.attributes.textColor,
                                            onChange: function (newColor) {
                                                props.setAttributes({textColor: newColor});
                                            }
                                        }
                                    ]
                                }
                        ),
                    ],
                    ),
            createElement(wp.serverSideRender, {
                block: blockName,
                attributes: props.attributes,
            })
        ]);
    },
    save() {
        return null;
    },
});
