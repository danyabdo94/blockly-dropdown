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
} as Block;
