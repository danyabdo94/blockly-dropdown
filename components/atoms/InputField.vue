<template>
    <v-text-field v-model="model" :label="element.name" :type="element._type" @change="change" />
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'InputField',
    props: ['element', 'properties'],
    data: () => ({
        model: null,
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
    },
});
</script>
