import Blockly from 'blockly';
import { Block } from '@/plugins/blockly/types';

// to avoid circular type reference (from automatic type inference) while maintaining type-safety
interface PropertiesMutator {
    mutationToDom (this: MutatedBlock): Element;
    domToMutation (this: MutatedBlock, xml: Element): void;
};

type MutatedBlock = Block & PropertiesMutator;

export function saveProperties (block: MutatedBlock, xml: Element) {
    xml.setAttribute('properties', JSON.stringify(block.properties ?? {}));
}
export function retrieveProperties (block: MutatedBlock, xml: Element) {
    block.properties = JSON.parse(xml.getAttribute('properties')!);
}

const propertiesMutator = {
    mutationToDom () {
        const container = Blockly.utils.xml.createElement('mutation');
        saveProperties(this, container);
        return container;
    },
    domToMutation (xmlElement: Element) {
        retrieveProperties(this, xmlElement);
    },
} as PropertiesMutator;

Blockly.Extensions.registerMutator('properties', propertiesMutator);
