<template>
    <div v-if="block && block.data">
        <v-col
            v-for="element in JSON.parse(block.data)"
            :key="element.name"
            justify="space-around"
        >
            <input-engine :element="element" :properties="block.properties" />
        </v-col>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { BlockSvg } from 'blockly';
import InputEngine from './InputEngine.vue';
import { Block as BlockType } from '@/plugins/blockly/types';

export default Vue.extend({
    name: 'PropertyPane',
    components: { InputEngine },
    props: {
        block: BlockSvg,
    },
    updated () {
        const block = this.block as BlockType;
        console.log(this.block ? JSON.parse(this.block?.data) : null);
        console.log(block?.properties);
    },
});
</script>
