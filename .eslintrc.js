/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 17:48:42
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-12 06:49:55
 * @FilePath     : .eslintrc.js
 * @Description: 
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved. 
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "prettier",
  ],
  rules: {
    "node/no-unsupported-features/es-syntax": 0,
    "@typescript-eslint/no-explicit-any": 0,
    /**
     * 是否允许使用原型链内置的对象。原理参见：
     * https://juejin.cn/post/6844903881437085709
     */
    "no-prototype-builtins": 2,
  }
};