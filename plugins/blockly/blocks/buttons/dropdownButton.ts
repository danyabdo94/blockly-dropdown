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
} as Block;
