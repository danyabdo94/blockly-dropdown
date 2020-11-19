const INLINE_ELEMENTS = require('eslint-plugin-vue/lib/utils/inline-non-void-elements.json');

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    ignorePatterns: [
        'static/*sw.js',
    ],
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
    ],
    // add your custom rules here
    rules: {
        'indent': ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'quote-props': ['error', 'consistent-as-needed'],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': ['warn', {
            ignores: ['field', 'pre', 'textarea', ...INLINE_ELEMENTS],
        }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
        }],
    },
};
