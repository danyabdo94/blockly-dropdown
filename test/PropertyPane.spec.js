import { mount } from '@vue/test-utils';
import PropertyPane from '@/components/PropertyPane.vue';

describe('Property Pane', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(PropertyPane);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
