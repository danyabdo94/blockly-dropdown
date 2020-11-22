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
                label: 'Type',
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
                label: 'Text',
                children: [
                    { name: 'colorEnabled', label: 'Color Enabled', _type: 'color', path: '["text"]["colorEnabled"]' },
                    { name: 'colorDisabled', label: 'Color Disabled', _type: 'color', path: '["text"]["colorDisabled"]' },
                ],
                _type: 'accordion',
            },
            {
                name: 'elevation',
                label: 'Elevation',
                children: [
                    { label: 'Normal', name: 'normal', _type: 'number', path: '["elevation"]["normal"]' },
                    { label: 'Focus', name: 'focus', _type: 'number', condition: "['type']==='raised'", path: '["elevation"]["focus"]' },
                    { label: 'Highlight', name: 'highlight', _type: 'number', condition: "['type']==='raised'", path: '["elevation"]["highlight"]' },
                    { label: 'Disabled', name: 'disabled', _type: 'number', condition: "['type']==='raised'", path: '["elevation"]["disabled"]' },
                ],
                _type: 'accordion',
            },
            {
                name: 'border',
                label: 'Border',
                children: [
                    { label: 'Normal', name: 'normal', _type: 'number', condition: "['type']==='outline'", path: '["border"]["normal"]' },
                    { label: 'Disabled', name: 'disabled', _type: 'number', condition: "['type']==='outline'", path: '["border"]["disabled"]' },
                    { label: 'Highlighted', name: 'highlighted', _type: 'number', condition: "['type']==='outline'", path: '["border"]["highlighted"]' },
                ],
                _type: 'accordion',
            },
        ],
    ),
} as Block;
