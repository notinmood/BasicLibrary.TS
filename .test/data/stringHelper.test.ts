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

import {describe, it} from "mocha";
import {expect}       from "chai"; // 使用 Chai 进行断言

import {StringHelper} from "../../src";

describe("StringHelper 单元测试", () => {
    // 测试 getSubString 方法
    describe("getSubString 方法", () => {
        it("应该返回完整字符串 - 当 length 大于字符串长度", () => {
            expect(StringHelper.getSubString("Hello, World!", 20)).equals("Hello, World!");
        });

        it("应该从左侧截取字符串", () => {
            expect(StringHelper.getSubString("Hello, World!", 5)).equals("Hello");
        });

        it("应该从右侧截取字符串", () => {
            expect(StringHelper.getSubString("Hello, World!", 6, false)).equals("World!");
        });

        it("应该返回空字符串 - 当字符串为空", () => {
            expect(StringHelper.getSubString("", 5)).equals("");
        });
    });

    // 测试 format 方法
    describe("format 方法", () => {
        it("应该正确替换占位符", () => {
            expect(StringHelper.format("Hi, {0} {1}!", "Alice", "Smith")).equals("Hi, Alice Smith!");
        });

        it("应该返回原字符串 - 当没有占位符时", () => {
            expect(StringHelper.format("Hello")).equals("Hello");
        });
    });

    describe("multi 方法", () => {
        it("multi*3", () => {
            // noinspection all
            expect(StringHelper.multi("abc", 3)).equals("abcabcabc");
        });

        it("multi*1", () => {
            expect(StringHelper.multi("abc", 1)).equals("abc");
        });

        it("multi*0", () => {
            expect(StringHelper.multi("abc", 0)).equals("");
        });

        it("multi*-3", () => {
            expect(StringHelper.multi("abc", -3)).equals("");
        });
    });

    // 测试 convertToInt 方法
    describe("convertToInt 方法", () => {
        it("应将字符串转换为整数", () => {
            expect(StringHelper.convertToInt("123")).equals(123);
        });

        it("应返回无效转换 - 当字符串为非数值时", () => {
            expect(StringHelper.convertToInt("abc")).be.NaN;
        });
    });

    // 测试 convertToFloat 方法
    describe("convertToFloat 方法", () => {
        it("应将字符串转换为浮点数", () => {
            expect(StringHelper.convertToFloat("123.45")).equals(123.45);
        });
    });

    // 测试 convertToBool 方法
    describe("convertToBool 方法", () => {
        it("应将字符串转换为布尔值", () => {
            expect(StringHelper.convertToBool("true")).equals(true);
        });
    });

    // 测试 isContains 方法
    describe("isContains 方法", () => {
        it("应返回 true - 当字符串包含目标子串", () => {
            expect(StringHelper.isContains("Hello, World!", "World")).equals(true);
        });

        it("应返回 false - 当字符串不包含目标子串", () => {
            expect(StringHelper.isContains("Hello, World!", "Alice")).equals(false);
        });
    });

    // 测试 trim 方法
    describe("trim 方法", () => {
        it("应去除字符串两侧的空格", () => {
            expect(StringHelper.trim("   Hello   ")).equals("Hello");
        });

        it("应去除字符串两侧的特定字符", () => {
            expect(StringHelper.trim("!!!Hello!!!", "!")).equals("Hello");
        });

        it("应返回原字符串 - 当没有空格或目标字符时", () => {
            expect(StringHelper.trim("Hello")).equals("Hello");
        });
    });
});


