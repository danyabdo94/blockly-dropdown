import Blockly from 'blockly';
import blockDefinition from './button.json';
import { Block } from '@/plugins/blockly/types';

const blockName = blockDefinition.type;

Blockly.Blocks[blockName] = {
    properties: {
        type: 'raised', // options: 'raised', 'flat', 'outline'
        text: { // colors
            colorEnabled: 'white',
            colorDisabled: 'white',
        },
        elevation: { // numbers
            normal: null,
            // following 3 are only available if type = 'raised'
            focus: null,
            highlight: null,
            disabled: null,
        },
        border: { // colors. only available if type = 'outline'
            normal: null,
            disabled: null,
            highlighted: null,
        },
    },
    init () {
        this.jsonInit(blockDefinition);
    },
    data: JSON.stringify(
        [
            {
                name: 'type',
                path: '["type"]',
                _type: 'select',
                options: [
                    'raised',
                    'flat',
                    'outline',
                ],
            },
            {
                name: 'text',
                children: [
                    { name: 'colorEnabled', _type: 'color', path: '["text"]["colorEnabled"]' },
                    { name: 'colorDisabled', _type: 'color', path: '["text"]["colorDisabled"]' },
                ],
                _type: 'accordion',
            },
            {
                name: 'elevation',
                children: [
                    { name: 'normal', _type: 'number', path: '["elevation"]["normal"]' },
                    { name: 'focus', _type: 'number', condition: "type==='raised'", path: '["elevation"]["focus"]' },
                    { name: 'highlight', _type: 'number', condition: "type==='raised'", path: '["elevation"]["highlight"]' },
                    { name: 'disabled', _type: 'number', condition: "type==='raised'", path: '["elevation"]["disabled"]' },
                ],
                _type: 'accordion',
            },
            {
                name: 'border',
                children: [
                    { name: 'normal', _type: 'number', condition: "type==='outline'", path: '["border"]["normal"]' },
                    { name: 'disabled', _type: 'number', condition: "type==='outline'", path: '["border"]["disabled"]' },
                    { name: 'highlighted', _type: 'number', condition: "type==='outline'", path: '["border"]["highlighted"]' },
                ],
                _type: 'accordion',
            },
        ],
    ),
} as Block;
