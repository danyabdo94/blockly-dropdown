<template>
    <v-app>
        <h1>
            {{ error.message }}
        </h1>
        <NuxtLink to="/">
            Home page
        </NuxtLink>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    layout: 'Error',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    head () {
        return {
            title: `Error - ${this.error.statusCode}`,
        };
    },
});
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
