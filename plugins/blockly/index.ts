import Vue from 'vue';

import './blocks/index.ts';
import './mutators/index.ts';
import './themes/index.ts';

Vue.config.ignoredElements = [
    ...Vue.config.ignoredElements,
    'xml',
    'block',
    'category',
    'field',
    'value',
    'mutation',
    'sep',
];
