<template>
    <div v-if="element">
        <accordion v-if="element._type === 'accordion'" :element="element" :properties="properties" />
        <color-picker v-if="element._type === 'color'" :element="element" :properties="properties" />
        <input-select v-if="element._type === 'select'" :element="element" :properties="properties" />
        <input-field
            v-if="element._type === 'text' || element._type === 'number'"
            :element="element"
            :properties="properties"
        />
        <checkbox-field
            v-if="element._type === 'boolean' "
            :element="element"
            :properties="properties"
        />
    </div>
</template>

<script>
import Vue from 'vue';
import Accordion from './atoms/Accordion.vue';
import ColorPicker from './atoms/ColorPicker.vue';
import InputSelect from './atoms/InputSelect.vue';
import InputField from './atoms/InputField.vue';
import CheckboxField from './atoms/CheckboxField.vue';
export default Vue.extend({
    name: 'InputEngine',
    components: { Accordion, ColorPicker, InputSelect, InputField, CheckboxField },
    props: ['element', 'properties'], // TODO: Add a type
    updated () {
        console.log(this.element);
        console.log(this.properties);
    },
});
</script>
