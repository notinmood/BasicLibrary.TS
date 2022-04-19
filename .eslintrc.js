module.exports = {
    root   : true,
    parser : '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:node/recommended",
        "prettier",
    ],
    rules  : {
        "node/no-unsupported-features/es-syntax": 0,
        "@typescript-eslint/no-explicit-any"    : 0,
        /**
         * 是否允许使用原型链内置的对象。原理参见：
         * https://juejin.cn/post/6844903881437085709
         */
        "no-prototype-builtins": 2,
    }
};
