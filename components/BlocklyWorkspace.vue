<template>
    <div class="workspace">
        <div ref="blocklyDiv" class="blocklyDiv" />
        <xml ref="blocklyToolbox" style="display: none;">
            <slot />
        </xml>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Blockly from 'blockly';

export default Vue.extend({
    name: 'BlocklyWorkspace',
    props: {
        options: {
            type: Object as () => Blockly.BlocklyOptions,
            default: () => ({
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: '#ccc',
                    snap: true,
                },
                zoom: {
                    controls: true,
                    wheel: true,
                },
            } as Blockly.BlocklyOptions),
        },
    },
    data () {
        return {
            workspace: null as unknown as Blockly.WorkspaceSvg,
        };
    },
    mounted () {
        const options = this.options;
        const toolboxNode = this.$refs.blocklyToolbox as HTMLElement;
        if (!options.toolbox) {
            options.toolbox = toolboxNode;
        }
        if (typeof options.theme === 'string') {
            options.theme = Blockly.registry.getObject(Blockly.registry.Type.THEME, options.theme);
        }
        this.workspace = Blockly.inject(this.$refs.blocklyDiv as Element, options);
        this.workspace.addChangeListener((event: Blockly.Events.Change) => {
            if (event.type === 'ui') {
                const selectedBlock = this.workspace.getBlockById(event.blockId);
                this.$emit('update:selected', selectedBlock);
            }
        });
    },
    methods: {
        toXml (skipIds?: boolean): Element {
            return Blockly.Xml.workspaceToDom(this.workspace, skipIds);
        },
    },
});
</script>

<style lang="scss" scoped>
.blocklyDiv {
    height: 100%;
    width: 100%;
    text-align: left;
}

.workspace {
    width: 100%;
    height: 100%;
}
</style>
