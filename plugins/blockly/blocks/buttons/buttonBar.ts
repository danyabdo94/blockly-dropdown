import Blockly from 'blockly';
import blockDefinition from './buttonBar.json';
import { Block } from '@/plugins/blockly/types';

const blockName = blockDefinition.type;

Blockly.Blocks[blockName] = {
    properties: {
        layout: {
            alignment: null, // options: 'spaceAround', 'spaceBetween', 'spaceEvenly', 'center', 'start', 'end'
            overflowSpacing: null, // number
        },
        buttons: {
            theme: null, // options: 'accent', 'normal', 'primary'
            // all remaining are numbers
            minWidth: null,
            minHeight: null,
            padding: {
                top: null,
                bottom: null,
                left: null,
                right: null,
            },
        },
    },
    init () {
        this.jsonInit(blockDefinition);
    },
    data: JSON.stringify(
        [
            {
                name: 'layout',
                label: 'Layout',
                _type: 'accordion',
                children: [
                    {
                        name: 'theme',
                        label: 'Theme',
                        path: '["layout"]["theme"]',
                        _type: 'select',
                        options: [
                            'spaceAround',
                            'spaceBetween',
                            'spaceEvenly',
                            'center',
                            'start',
                            'end',
                        ],
                    },
                    {
                        path: '["layout"]["overflowSpacing"]',
                        name: 'overflowSpacing',
                        label: 'Overflow Spacing',
                        _type: 'number',
                    },
                ],
            },
            {
                name: 'buttons',
                label: 'Buttons',
                _type: 'accordion',
                children: [
                    {
                        name: 'theme',
                        label: 'Theme',
                        path: '["buttons"]["theme"]',
                        _type: 'select',
                        options: [
                            'accent',
                            'normal',
                            'primary',
                        ],
                    },
                    {
                        path: '["buttons"]["minWidth"]',
                        name: 'minWidth',
                        label: 'Min Width',
                        _type: 'number',
                    },
                    {
                        path: '["buttons"]["minHeight"]',
                        name: 'minHeight',
                        label: 'Min Height',
                        _type: 'number',
                    },
                    {
                        name: 'padding',
                        label: 'Padding',
                        _type: 'accordion',
                        children: [
                            {
                                path: '["buttons"]["padding"]["top"]',
                                name: 'top',
                                label: 'Top',
                                _type: 'number',
                            },
                            {
                                path: '["buttons"]["padding"]["bottom"]',
                                name: 'bottom',
                                label: 'Bottom',
                                _type: 'number',
                            },
                            {
                                path: '["buttons"]["padding"]["left"]',
                                name: 'left',
                                label: 'Left',
                                _type: 'number',
                            },
                            {
                                path: '["buttons"]["padding"]["right"]',
                                name: 'right',
                                label: 'Right',
                                _type: 'number',
                            },
                        ],
                    },
                ],
            },
        ],
    ),
} as Block;
