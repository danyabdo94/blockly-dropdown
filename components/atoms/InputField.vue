<template>
    <v-text-field :label="element.name" :type="element._type" />
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'InputField',
    props: ['element'],
});
</script>
