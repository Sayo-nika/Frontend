module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/recommended'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "no-console": 0,
        "global-require":"off",

        "quotes": ["warn", "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
        "semi": "warn",
        "indent": ["error", 4, {"SwitchCase": 1}],
        "no-unsafe-negation": "error",
        "eqeqeq": ["warn", "always", {"null": "ignore"}],
        "no-alert": "error",
        "no-useless-return": "error",
        "array-bracket-spacing": "error",
        "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "func-call-spacing": "error",
        "key-spacing": "error",
        "keyword-spacing": ["error", {"overrides": {"catch": {"after": false}}}],
        "new-parens": "error",
        "no-array-constructor": "warn",
        "no-new-object": "warn",
        "no-whitespace-before-property": "error",
        "object-curly-spacing": "error",
        "one-var-declaration-per-line": "error",
        "quote-props": ["error", "as-needed"],
        "semi-spacing": "error",
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": "error",
        "space-unary-ops": ["error", {"words": true, "nonwords": false}],
        "arrow-parens": ["warn", "as-needed"],
        "arrow-spacing": "error",
        "no-useless-rename": "error",
        "prefer-arrow-callback": "error",
        "template-curly-spacing": "error",
        "valid-jsdoc": [
            "warn",
            {
                "prefer": {
                    "return": "returns",
                    "arg": "param",
                    "argument": "param",
                    "augments": "extends",
                    "property": "prop"
                },

                "preferType": {
                    "object": "Object",
                    "string": "String",
                    "number": "Number",
                    "boolean": "Boolean",
                    "promise": "Promise",
                    "array": "Array",
                    "null": "Null",
                    "function": "Function"
                },

                "requireReturn": false
            }
        ],
    }
}
