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


describe("StringHelper 类测试", () => {
    // 测试 getSubString 方法
    describe("getSubString 方法测试", () => {
        it("正常情况：从左向右截取", () => {
            expect(StringHelper.getSubString("Hello, world!", 5)).equals("Hello");
        });

        it("正常情况：从右向左截取", () => {
            expect(StringHelper.getSubString("Hello, world!", 6, false)).equals("world!");
        });

        it("边界情况：截取长度大于字符串长度", () => {
            expect(StringHelper.getSubString("Hello", 10)).equals("Hello");
        });

        it("边界情况：截取长度为0", () => {
            expect(StringHelper.getSubString("Hello", 0)).equals("");
        });

        it("边界情况：截取长度为负数", () => {
            expect(StringHelper.getSubString("Hello", -3)).equals("");
        });
    });

    // 测试 right 方法
    describe("right 方法测试", () => {
        it("正常情况：从右向左截取", () => {
            expect(StringHelper.right("Hello, world!", 6)).equals("world!");
        });

        it("边界情况：截取长度大于字符串长度", () => {
            expect(StringHelper.right("Hello, world!", 20)).equals("Hello, world!");
        });

        it("边界情况：截取长度为0", () => {
            expect(StringHelper.right("Hello, world!", 0)).equals("");
        });

        it("边界情况：截取长度为负数", () => {
            expect(StringHelper.right("Hello, world!", -5)).equals("");
        });
    });

    // 测试 left 方法
    describe("left 方法测试", () => {
        it("正常情况：从左向右截取", () => {
            expect(StringHelper.left("Hello, world!", 5)).equals("Hello");
        });

        it("边界情况：截取长度大于字符串长度", () => {
            expect(StringHelper.left("Hello, world!", 20)).equals("Hello, world!");
        });

        it("边界情况：截取长度为0", () => {
            expect(StringHelper.left("Hello, world!", 0)).equals("");
        });

        it("边界情况：截取长度为负数", () => {
            expect(StringHelper.left("Hello, world!", -5)).equals("");
        });
    });

    // 测试 reverse 方法
    describe("reverse 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.reverse("Hello")).equals("olleH");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.reverse("")).equals("");
        });
    });

    // 测试 isContains 方法
    describe("isContains 方法测试", () => {
        it("正常情况：包含子字符串", () => {
            expect(StringHelper.isContains("Hello, world!", "world")).equals(true);
        });

        it("正常情况：不包含子字符串", () => {
            expect(StringHelper.isContains("Hello, world!", "test")).equals(false);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.isContains("", "test")).equals(false);
        });

        it("边界情况：空子字符串", () => {
            expect(StringHelper.isContains("Hello, world!", "")).equals(true);
        });
    });

    // 测试 isEndWith 方法
    describe("isEndWith 方法测试", () => {
        it("正常情况：以指定字符串结尾", () => {
            expect(StringHelper.isEndWith("Hello, world!", "world!")).equals(true);
        });

        it("正常情况：不以指定字符串结尾", () => {
            expect(StringHelper.isEndWith("Hello, world!", "Hello")).equals(false);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.isEndWith("", "test")).equals(false);
        });

        it("边界情况：空结尾字符串", () => {
            expect(StringHelper.isEndWith("Hello, world!", "")).equals(true);
        });
    });

    // 测试 isStartWith 方法
    describe("isStartWith 方法测试", () => {
        it("正常情况：以指定字符串开始", () => {
            expect(StringHelper.isStartWith("Hello, world!", "Hello")).equals(true);
        });

        it("正常情况：不以指定字符串开始", () => {
            expect(StringHelper.isStartWith("Hello, world!", "world!")).equals(false);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.isStartWith("", "test")).equals(false);
        });

        it("边界情况：空开始字符串", () => {
            expect(StringHelper.isStartWith("Hello, world!", "")).equals(true);
        });
    });

    // 测试 getPosition 方法
    describe("getPosition 方法测试", () => {
        it("正常情况：找到子字符串位置", () => {
            expect(StringHelper.getPosition("Hello, world!", "world")).equals(7);
        });

        it("正常情况：未找到子字符串位置", () => {
            expect(StringHelper.getPosition("Hello, world!", "test")).equals(-1);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.getPosition("", "test")).equals(-1);
        });

        it("边界情况：空子字符串", () => {
            expect(StringHelper.getPosition("Hello, world!", "")).equals(0);
        });
    });

    // 测试 getStringBeforeSeparator 方法
    describe("getStringBeforeSeparator 方法测试", () => {
        it("正常情况：找到分隔符之前字符串", () => {
            expect(StringHelper.getStringBeforeSeparator("Hello, world!", ",")).equals("Hello");
        });

        it("边界情况：未找到分隔符", () => {
            expect(StringHelper.getStringBeforeSeparator("Hello, world!", "|")).equals("Hello, world!");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.getStringBeforeSeparator("", ",")).equals("");
        });

        it("边界情况：空分隔符", () => {
            expect(StringHelper.getStringBeforeSeparator("Hello, world!", "")).equals("");
        });
    });

    // 测试 getStringAfterSeparator 方法
    describe("getStringAfterSeparator 方法测试", () => {
        it("正常情况：找到分隔符之后字符串", () => {
            expect(StringHelper.getStringAfterSeparator("Hello, world!", ",")).equals(" world!");
        });

        it("边界情况：未找到分隔符", () => {
            expect(StringHelper.getStringAfterSeparator("Hello, world!", "|")).equals("Hello, world!");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.getStringAfterSeparator("", ",")).equals("");
        });

        it("边界情况：空分隔符", () => {
            expect(StringHelper.getStringAfterSeparator("Hello, world!", "")).equals("Hello, world!");
        });
    });

    // 测试 format 方法
    describe("format 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.format("Hello, {0}!", "world")).equals("Hello, world!");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.format("", "world")).equals("");
        });

        it("边界情况：无占位符", () => {
            expect(StringHelper.format("Hello, world!", "world")).equals("Hello, world!");
        });
    });

    // 测试 explode 方法
    describe("explode 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.explode("Hello, world!", ",")).deep.equals(["Hello", " world!"]);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.explode("", ",")).deep.equals([""]);
        });

        it("边界情况：无分隔符", () => {
            expect(StringHelper.explode("Hello, world!", "|")).deep.equals(["Hello, world!"]);
        });
    });

    // 测试 implode 方法
    describe("implode 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.implode(["Hello", "world"], ", ")).equals("Hello, world");
        });

        it("边界情况：空数组", () => {
            expect(StringHelper.implode([], ", ")).equals("");
        });

        it("边界情况：无分隔符", () => {
            expect(StringHelper.implode(["Hello", "world"], "")).equals("Helloworld");
        });
    });

    // 测试 toLower 方法
    describe("toLower 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.toLower("Hello, WORLD!")).equals("hello, world!");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.toLower("")).equals("");
        });
    });

    // 测试 toUpper 方法
    describe("toUpper 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.toUpper("Hello, world!")).equals("HELLO, WORLD!");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.toUpper("")).equals("");
        });
    });

    // 测试 convertToInt 方法
    describe("convertToInt 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.convertToInt("123")).equals(123);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.convertToInt("")).is.NaN;
        });

        it("边界情况：非数字字符串", () => {
            expect(StringHelper.convertToInt("Hello")).is.NaN;
        });
    });

    // 测试 convertToFloat 方法
    describe("convertToFloat 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.convertToFloat("123.45")).equals(123.45);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.convertToFloat("")).is.NaN;
        });

        it("边界情况：非数字字符串", () => {
            expect(StringHelper.convertToFloat("Hello")).is.NaN;
        });
    });

    // 测试 convertToBool 方法
    describe("convertToBool 方法测试", () => {
        it("正常情况：字符串 \"true\"", () => {
            expect(StringHelper.convertToBool("true")).equals(true);
        });

        it("正常情况：字符串 \"false\"", () => {
            expect(StringHelper.convertToBool("false")).equals(false);
        });

        it("边界情况：空字符串", () => {
            expect(() => StringHelper.convertToBool("")).to.throw();
        });
    });

    // 测试 convertTODateTime 方法
    describe("convertTODateTime 方法测试", () => {
        it("正常情况", () => {
            const date = new Date("2022-03-20T00:00:00");
            expect(StringHelper.convertTODateTime("2022-03-20T00:00:00")).deep.equal(date);
        });

        it("边界情况：空字符串", () => {
            const invalidDate = StringHelper.convertTODateTime("");
            expect(invalidDate.toString()).to.equal('Invalid Date');
        });
    });

    // 测试 isNumber 方法
    describe("isNumber 方法测试", () => {
        it("正常情况：整数字符串", () => {
            expect(StringHelper.isNumber("123")).equals(true);
        });

        it("正常情况：浮点数字符串", () => {
            expect(StringHelper.isNumber("123.45")).equals(true);
        });

        it("正常情况：负数字符串", () => {
            expect(StringHelper.isNumber("-123")).equals(true);
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.isNumber("")).equals(false);
        });

        it("边界情况：非数字字符串", () => {
            expect(StringHelper.isNumber("Hello")).equals(false);
        });
    });

    // 测试 multi 方法
    describe("multi 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.multi("Hello", 3)).equals("HelloHelloHello");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.multi("", 3)).equals("");
        });

        it("边界情况：计数为0", () => {
            expect(StringHelper.multi("Hello", 0)).equals("");
        });

        it("边界情况：计数为负数", () => {
            expect(StringHelper.multi("Hello", -3)).equals("");
        });
    });

    // 测试 splice 方法
    describe("splice 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.splice("Hello, world!", ",", "-")).equals("Hello- world!");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.splice("", ",", "-")).equals("");
        });

        it("边界情况：无旧分隔符", () => {
            expect(StringHelper.splice("Hello, world!", "|", "-")).equals("Hello, world!");
        });

        it("边界情况：无新分隔符", () => {
            expect(StringHelper.splice("Hello, world!", ",")).equals("Hello world!");
        });
    });

    // 测试 removeAllSpace 方法
    describe("removeAllSpace 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.removeAllSpace("Hello, world!")).equals("Hello,world!");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.removeAllSpace("")).equals("");
        });
    });

    // 测试 trimLeft 方法
    describe("trimLeft 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.trimLeft("   Hello")).equals("Hello");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.trimLeft("")).equals("");
        });

        it("边界情况：无前导空格", () => {
            expect(StringHelper.trimLeft("Hello")).equals("Hello");
        });
    });

    // 测试 trimRight 方法
    describe("trimRight 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.trimRight("Hello   ")).equals("Hello");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.trimRight("")).equals("");
        });

        it("边界情况：无后导空格", () => {
            expect(StringHelper.trimRight("Hello")).equals("Hello");
        });
    });

    // 测试 trimBoth 方法
    describe("trimBoth 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.trimBoth("   Hello   ")).equals("Hello");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.trimBoth("")).equals("");
        });

        it("边界情况：无前后空格", () => {
            expect(StringHelper.trimBoth("Hello")).equals("Hello");
        });
    });

    // 测试 trim 方法
    describe("trim 方法测试", () => {
        it("正常情况", () => {
            expect(StringHelper.trim("   Hello   ")).equals("Hello");
        });

        it("边界情况：空字符串", () => {
            expect(StringHelper.trim("")).equals("");
        });

        it("边界情况：无前后空格", () => {
            expect(StringHelper.trim("Hello")).equals("Hello");
        });
    });
});



