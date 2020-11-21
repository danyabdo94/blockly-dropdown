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
            focusColor: null, // color
            autofocus: null, // boolean
            backgroundColor: null, // color
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
                        name: 'underline',
                        _type: 'number',
                    },
                    {
                        name: 'hint',
                        _type: 'text',
                    },
                    {
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
                        name: 'elevation',
                        _type: 'number',
                    },
                    {
                        name: 'focusColor',
                        _type: 'color',
                    },
                    {
                        name: 'autofocus',
                        _type: 'boolean',
                    },
                    {
                        name: 'backgroundColor',
                        _type: 'color',
                    },
                ],
            },
        ],
    ),
} as Block;
