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
        elevation: {    // numbers
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
} as Block;
