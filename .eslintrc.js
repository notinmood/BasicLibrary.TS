/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 17:48:42
 * @LastEditors: Shandong Xiedali
 * @LastEditTime: 2022-04-11 14:57:41
 * @FilePath: \BasicLibrary.TS\.eslintrc.js
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
    "no-prototype-builtins": 0,
  }
};