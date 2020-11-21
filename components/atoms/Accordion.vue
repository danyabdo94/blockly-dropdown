<template>
    <v-expansion-panels ref="panel" class="ma-2">
        <v-expansion-panel>
            <v-expansion-panel-header>
                {{ element.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <input-engine
                    v-for="child in element.children"
                    :key="child.name"
                    :element="child"
                />
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
    name: 'Accordion',
    components: {
        InputEngine: () => import('../InputEngine.vue'),
    },
    props: ['element'],
});
</script>
