<template>
    <v-checkbox
        :label="element.name"
    />
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'CheckboxField',
    props: ['element'],
});
</script>
