<template>
    <div v-if="block && block.data" class="pa-1">
        <v-col
            v-for="element in JSON.parse(block.data)"
            :key="element.name"
            justify="center"
            class="pa-0"
        >
            <input-engine :element="element" :properties="block.properties" />
        </v-col>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Block } from 'blockly';
import InputEngine from './InputEngine.vue';

export default Vue.extend({
    name: 'PropertyPane',
    components: { InputEngine },
    props: {
        block: Block,
    },
});
</script>
