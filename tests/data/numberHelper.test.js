"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-10 15:41:27
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-20 12:10:56
 * @FilePath     : StringHelper.test.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var mocha_1 = require("mocha");
var src_1 = require("../../src");
(0, mocha_1.describe)("NumberHelper 类型的单元测试", function () {
    (0, mocha_1.describe)("NumberHelper.getFloat 方法单元测试", function () {
        // 测试正常情况
        (0, mocha_1.it)("应该返回带有2位小数的浮点数", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123.456)).equals("123.46");
        });
        (0, mocha_1.it)("应该返回带有3位小数的浮点数", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123.456, 3)).equals("123.456");
        });
        (0, mocha_1.it)("应该返回带有2位小数的字符串数值", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat("123.456")).equals("123.46");
        });
        // 测试边界情况
        (0, mocha_1.it)("应该返回整数并添加小数点和零", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123)).equals("123.00");
        });
        (0, mocha_1.it)("应该返回小数并没有改变", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123.4)).equals("123.40");
        });
        (0, mocha_1.it)("应该返回小数并添加零到指定精度", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123.4, 4)).equals("123.4000");
        });
        (0, mocha_1.it)("应该返回小数并只保留指定精度", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123.456789, 4)).equals("123.4568");
        });
        // 测试特殊情况
        (0, mocha_1.it)("应该处理负数", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(-123.456)).equals("-123.46");
        });
        (0, mocha_1.it)("应该处理0的情况", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(0)).equals("0.00");
        });
        (0, mocha_1.it)("应该处理整数的情况(四舍)", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123.4, 0)).equals("123");
        });
        (0, mocha_1.it)("应该处理整数的情况(五入)", function () {
            (0, chai_1.expect)(src_1.NumberHelper.getFloat(123.5, 0)).equals("124");
        });
        // 测试无效输入
        (0, mocha_1.it)("应该返回空字符串对于无效数值", function () {
            // expect(NumberHelper.getFloat(NaN)).equals("");
            // expect(NumberHelper.getFloat(undefined)).equals("");
            // expect(NumberHelper.getFloat(null)).equals("");
        });
    });
});
