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
                        _type: 'select',
                        options: [
                            'accent',
                            'normal',
                            'primary',
                        ],
                    },
                    {
                        name: 'minWidth',
                        _type: 'number',
                    },
                    {
                        name: 'overflowSpacing',
                        _type: 'minHeight',
                    },
                    {
                        name: 'padding',
                        _type: 'accordion',
                        children: [
                            {
                                name: 'top',
                                _type: 'number',
                            },
                            {
                                name: 'bottom',
                                _type: 'number',
                            },
                            {
                                name: 'left',
                                _type: 'number',
                            },
                            {
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
