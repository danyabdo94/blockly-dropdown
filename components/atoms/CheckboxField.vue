<template>
    <v-checkbox
        v-if="!element.condition || canView()"
        v-model="model"
        :label="element.label"
        class="pa-1"
        @change="change"
    />
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'CheckboxField',
    props: ['element', 'properties'],
    data: () => ({
        model: false,
    }),
    created () {
        // eslint-disable-next-line no-eval
        this.model = eval('this.properties' + this.element.path);
    },
    methods: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        change (data) {
            // eslint-disable-next-line no-eval
            eval(`this.properties ${this.element.path} = data`);
        },
        canView () {
            // eslint-disable-next-line no-eval
            return eval(`this.properties ${this.element.condition}`);
        },
    },
});
</script>
