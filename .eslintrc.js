module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended' // 注意：虽然项目是 Vue2，但使用 vue3 推荐配置兼容性更好
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        // 自定义规则示例
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index']
            }
        ]
    }
}