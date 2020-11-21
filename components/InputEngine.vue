<template>
    <div v-if="element">
        <accordion v-if="element._type === 'accordion'" :element="element" />
        <color-picker v-if="element._type === 'color'" :element="element" />
        <input-select v-if="element._type === 'select'" :element="element" />
        <input-field
            v-if="element._type === 'text' || element._type === 'number'"
            :element="element"
        />
    </div>
</template>

<script>
import Vue from 'vue';
import Accordion from './atoms/Accordion.vue';
import ColorPicker from './atoms/ColorPicker.vue';
import InputSelect from './atoms/InputSelect.vue';
import InputField from './atoms/InputField.vue';
export default Vue.extend({
    name: 'InputEngine',
    components: { Accordion, ColorPicker, InputSelect, InputField },
    props: ['element'], // TODO: Add a type
    updated () {
        console.log(this.element);
    },
});
</script>
