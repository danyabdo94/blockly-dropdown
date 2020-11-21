import Blockly from 'blockly';
import blockDefinition from './button.json';
import { Block } from '@/plugins/blockly/types';

const blockName = blockDefinition.type;

Blockly.Blocks[blockName] = {
    properties: {
        type: 'raised', // options: 'raised', 'flat', 'outline'
        text: { // colors
            colorEnabled: null,
            colorDisabled: null,
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
                    { name: 'colorEnabled', _type: 'color' },
                    { name: 'colorDisabled', _type: 'color' },
                ],
                _type: 'accordion',
            },
            {
                name: 'elevation',
                children: [
                    { name: 'normal', _type: 'number' },
                    { name: 'focus', _type: 'number', condition: "type==='raised'" },
                    { name: 'highlight', _type: 'number', condition: "type==='raised'" },
                    { name: 'disabled', _type: 'number', condition: "type==='raised'" },
                ],
                _type: 'accordion',
            },
            {
                name: 'border',
                children: [
                    { name: 'normal', _type: 'number', condition: "type==='outline'" },
                    { name: 'disabled', _type: 'number', condition: "type==='outline'" },
                    { name: 'highlighted', _type: 'number', condition: "type==='outline'" },
                ],
                _type: 'accordion',
            },
        ],
    ),
} as Block;
