import eslint from "@eslint/js";
// import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";


export default tseslint.config(
    {
        ignores: [
            "node_modules",
            "dist",
            "lib",
            "tests",
        ],
    },

    /** js推荐配置 */
    eslint.configs.recommended,

    /* js.configs.recommended 除了包含 eslint.configs.recommended 中的规则外，
    还包括一些更具体的 JavaScript 语言规则。*/
    // js.configs.recommended,

    /** ts推荐配置(包含TS的parser，plugin等) */
    ...tseslint.configs.recommended,

    stylistic.configs.customize({
                                    indent     : 2,
                                    quotes     : "single",
                                    semi       : false,
                                    jsx        : true,
                                    braceStyle : "1tbs",
                                    arrowParens: "always",
                                }),

    /**
     * javascript 规则
     */
    {
        files: ["**/*.{js,mjs,cjs,vue}"],
        rules: {
            // 'no-console': 'warn',
        },
    },

    /**
     * 配置全局变量
     */
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                /** 追加一些其他自定义全局规则 */
                wx: true,
            },
        }
    },


    /**
     * typescript 规则
     */
    {
        files: ["**/*.{ts,tsx,vue}"],
        rules: {},
    },

    /**
     * prettier 配置
     * 会合并根目录下的.prettier.config.js 文件
     * @see https://prettier.io/docs/en/options
     */
    eslintPluginPrettierRecommended,
)
