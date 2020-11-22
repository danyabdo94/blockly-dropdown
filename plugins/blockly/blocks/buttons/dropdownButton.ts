import Blockly from 'blockly';
import blockDefinition from './dropdownButton.json';
import { Block } from '@/plugins/blockly/types';

const blockName = blockDefinition.type;

Blockly.Blocks[blockName] = {
    properties: {
        button: {
            underline: null, // number
            hint: null, // text
            disabledHint: null, // text
        },
        menu: {
            elevation: null, // number
            focusColor: 'white', // color
            autofocus: null, // boolean
            backgroundColor: 'white', // color
        },
    },
    init () {
        this.jsonInit(blockDefinition);
    },
    data: JSON.stringify(
        [
            {
                name: 'button',
                _type: 'accordion',
                children: [
                    {
                        path: '["button"]["underline"]',
                        name: 'underline',
                        _type: 'number',
                    },
                    {
                        path: '["button"]["hint"]',
                        name: 'hint',
                        _type: 'text',
                    },
                    {
                        path: '["button"]["disabledHint"]',
                        name: 'disabledHint',
                        _type: 'text',
                    },
                ],
            },
            {
                name: 'menu',
                _type: 'accordion',
                children: [
                    {
                        path: '["menu"]["elevation"]',
                        name: 'elevation',
                        _type: 'number',
                    },
                    {
                        path: '["menu"]["focusColor"]',
                        name: 'focusColor',
                        _type: 'color',
                    },
                    {
                        path: '["menu"]["autofocus"]',
                        name: 'autofocus',
                        _type: 'boolean',
                    },
                    {
                        path: '["menu"]["backgroundColor"]',
                        name: 'backgroundColor',
                        _type: 'color',
                    },
                ],
            },
        ],
    ),
} as Block;
