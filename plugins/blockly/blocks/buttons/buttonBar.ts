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
                _type: 'accordion',
                children: [
                    {
                        name: 'theme',
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
                        _type: 'number',
                    },
                ],
            },
            {
                name: 'buttons',
                _type: 'accordion',
                children: [
                    {
                        name: 'theme',
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
                        _type: 'number',
                    },
                    {
                        path: '["buttons"]["minHeight"]',
                        name: 'minHeight',
                        _type: 'number',
                    },
                    {
                        name: 'padding',
                        _type: 'accordion',
                        children: [
                            {
                                path: '["buttons"]["padding"]["top"]',
                                name: 'top',
                                _type: 'number',
                            },
                            {
                                path: '["buttons"]["padding"]["bottom"]',
                                name: 'bottom',
                                _type: 'number',
                            },
                            {
                                path: '["buttons"]["padding"]["left"]',
                                name: 'left',
                                _type: 'number',
                            },
                            {
                                path: '["buttons"]["padding"]["right"]',
                                name: 'right',
                                _type: 'number',
                            },
                        ],
                    },
                ],
            },
        ],
    ),
} as Block;
