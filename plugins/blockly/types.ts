import Blockly from 'blockly';
import { CreateElement } from 'vue';

export interface Block extends Blockly.Block {
    properties?: any;
};
