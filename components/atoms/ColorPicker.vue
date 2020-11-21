<template>
    <v-row justify="center" align="center">
        <v-col class="shrink" style="min-width: 220px">
            <v-text-field
                v-model="color"
                hide-details
                class="ma-0 pa-0"
                solo
            >
                <template v-slot:append>
                    <v-menu
                        v-model="menu"
                        top
                        nudge-bottom="105"
                        nudge-left="16"
                        :close-on-content-click="false"
                    >
                        <template v-slot:activator="{ on }">
                            <div :style="swatchStyle" v-on="on" />
                        </template>
                        <v-card>
                            <v-card-text class="pa-0">
                                <v-color-picker v-model="color" flat />
                            </v-card-text>
                        </v-card>
                    </v-menu>
                </template>
            </v-text-field>
        </v-col>
    </v-row>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'ColorPicker',
    props: ['element'],
    data: () => ({
        color: '#1976D2FF',
        menu: false,
    }),
    computed: {
        swatchStyle () {
            const { color, menu } = this;
            return {
                backgroundColor: color,
                cursor: 'pointer',
                height: '30px',
                width: '30px',
                borderRadius: menu ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out',
            };
        },
    },
});
</script>
