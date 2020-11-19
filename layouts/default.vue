<template>
    <v-app>
        <v-main>
            <v-container fluid fill-height class="pa-0">
                <nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'DefaultLayout',
});
</script>
