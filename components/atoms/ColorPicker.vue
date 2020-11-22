<template>
    <v-row justify="center" align="center">
        <v-col class="shrink" style="min-width: 100%">
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
                                <v-color-picker
                                    v-model="color"
                                    mode="hexa"
                                    show-swatches
                                    hide-canvas
                                    hide-inputs
                                    flat
                                    @update:color="change"
                                />
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
    props: ['element', 'properties'],
    data: () => ({
        menu: false,
        color: '#ffffffff',
    }),
    computed: {
        swatchStyle () {
            const { menu, color } = this;
            return {
                backgroundColor: color,
                cursor: 'pointer',
                height: '30px',
                width: '60px',
                border: 'solid 1px #000000',
                borderRadius: menu ? '50%' : '4px',
                transition: 'border-radius 200ms ease-in-out',
            };
        },
    },
    created () {
        // eslint-disable-next-line no-eval
        this.color = eval('this.properties' + this.element.path);
    },
    methods: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        change (data) {
            // eslint-disable-next-line no-eval
            eval(`this.properties ${this.element.path} = data.hexa`);
        },
    },
});
</script>
