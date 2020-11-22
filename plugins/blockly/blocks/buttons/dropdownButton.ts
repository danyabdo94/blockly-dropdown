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
                label: 'Button',
                _type: 'accordion',
                children: [
                    {
                        path: '["button"]["underline"]',
                        name: 'underline',
                        label: 'Underline',
                        _type: 'number',
                    },
                    {
                        path: '["button"]["hint"]',
                        name: 'hint',
                        label: 'Hint',
                        _type: 'text',
                    },
                    {
                        path: '["button"]["disabledHint"]',
                        name: 'disabledHint',
                        label: 'Disabled Hint',
                        _type: 'text',
                    },
                ],
            },
            {
                name: 'menu',
                _type: 'accordion',
                label: 'Menu',
                children: [
                    {
                        path: '["menu"]["elevation"]',
                        name: 'elevation',
                        label: 'Elevation',
                        _type: 'number',
                    },
                    {
                        path: '["menu"]["focusColor"]',
                        name: 'focusColor',
                        label: 'Focus Color',
                        _type: 'color',
                    },
                    {
                        path: '["menu"]["autofocus"]',
                        name: 'autofocus',
                        label: 'Auto Focus',
                        _type: 'boolean',
                    },
                    {
                        path: '["menu"]["backgroundColor"]',
                        name: 'backgroundColor',
                        label: 'Background Color',
                        _type: 'color',
                    },
                ],
            },
        ],
    ),
} as Block;
