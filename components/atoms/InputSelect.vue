<template>
    <v-select :items="element.options" :label="element.name" />
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'InputSelect',
    props: ['element'],
});
</script>
