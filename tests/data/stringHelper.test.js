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
var mocha_1 = require("mocha");
var chai_1 = require("chai"); // 使用 Chai 进行断言
var src_1 = require("../../src");
(0, mocha_1.describe)("StringHelper 类测试", function () {
    // 测试 getSubString 方法
    (0, mocha_1.describe)("getSubString 方法测试", function () {
        (0, mocha_1.it)("正常情况：从左向右截取", function () {
            (0, chai_1.expect)(src_1.StringHelper.getSubString("Hello, world!", 5)).equals("Hello");
        });
        (0, mocha_1.it)("正常情况：从右向左截取", function () {
            (0, chai_1.expect)(src_1.StringHelper.getSubString("Hello, world!", 6, false)).equals("world!");
        });
        (0, mocha_1.it)("边界情况：截取长度大于字符串长度", function () {
            (0, chai_1.expect)(src_1.StringHelper.getSubString("Hello", 10)).equals("Hello");
        });
        (0, mocha_1.it)("边界情况：截取长度为0", function () {
            (0, chai_1.expect)(src_1.StringHelper.getSubString("Hello", 0)).equals("");
        });
        (0, mocha_1.it)("边界情况：截取长度为负数", function () {
            (0, chai_1.expect)(src_1.StringHelper.getSubString("Hello", -3)).equals("");
        });
    });
    // 测试 right 方法
    (0, mocha_1.describe)("right 方法测试", function () {
        (0, mocha_1.it)("正常情况：从右向左截取", function () {
            (0, chai_1.expect)(src_1.StringHelper.right("Hello, world!", 6)).equals("world!");
        });
        (0, mocha_1.it)("边界情况：截取长度大于字符串长度", function () {
            (0, chai_1.expect)(src_1.StringHelper.right("Hello, world!", 20)).equals("Hello, world!");
        });
        (0, mocha_1.it)("边界情况：截取长度为0", function () {
            (0, chai_1.expect)(src_1.StringHelper.right("Hello, world!", 0)).equals("");
        });
        (0, mocha_1.it)("边界情况：截取长度为负数", function () {
            (0, chai_1.expect)(src_1.StringHelper.right("Hello, world!", -5)).equals("");
        });
    });
    // 测试 left 方法
    (0, mocha_1.describe)("left 方法测试", function () {
        (0, mocha_1.it)("正常情况：从左向右截取", function () {
            (0, chai_1.expect)(src_1.StringHelper.left("Hello, world!", 5)).equals("Hello");
        });
        (0, mocha_1.it)("边界情况：截取长度大于字符串长度", function () {
            (0, chai_1.expect)(src_1.StringHelper.left("Hello, world!", 20)).equals("Hello, world!");
        });
        (0, mocha_1.it)("边界情况：截取长度为0", function () {
            (0, chai_1.expect)(src_1.StringHelper.left("Hello, world!", 0)).equals("");
        });
        (0, mocha_1.it)("边界情况：截取长度为负数", function () {
            (0, chai_1.expect)(src_1.StringHelper.left("Hello, world!", -5)).equals("");
        });
    });
    // 测试 reverse 方法
    (0, mocha_1.describe)("reverse 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.reverse("Hello")).equals("olleH");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.reverse("")).equals("");
        });
    });
    // 测试 isContains 方法
    (0, mocha_1.describe)("isContains 方法测试", function () {
        (0, mocha_1.it)("正常情况：包含子字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isContains("Hello, world!", "world")).equals(true);
        });
        (0, mocha_1.it)("正常情况：不包含子字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isContains("Hello, world!", "test")).equals(false);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isContains("", "test")).equals(false);
        });
        (0, mocha_1.it)("边界情况：空子字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isContains("Hello, world!", "")).equals(true);
        });
    });
    // 测试 isEndWith 方法
    (0, mocha_1.describe)("isEndWith 方法测试", function () {
        (0, mocha_1.it)("正常情况：以指定字符串结尾", function () {
            (0, chai_1.expect)(src_1.StringHelper.isEndWith("Hello, world!", "world!")).equals(true);
        });
        (0, mocha_1.it)("正常情况：不以指定字符串结尾", function () {
            (0, chai_1.expect)(src_1.StringHelper.isEndWith("Hello, world!", "Hello")).equals(false);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isEndWith("", "test")).equals(false);
        });
        (0, mocha_1.it)("边界情况：空结尾字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isEndWith("Hello, world!", "")).equals(true);
        });
    });
    // 测试 isStartWith 方法
    (0, mocha_1.describe)("isStartWith 方法测试", function () {
        (0, mocha_1.it)("正常情况：以指定字符串开始", function () {
            (0, chai_1.expect)(src_1.StringHelper.isStartWith("Hello, world!", "Hello")).equals(true);
        });
        (0, mocha_1.it)("正常情况：不以指定字符串开始", function () {
            (0, chai_1.expect)(src_1.StringHelper.isStartWith("Hello, world!", "world!")).equals(false);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isStartWith("", "test")).equals(false);
        });
        (0, mocha_1.it)("边界情况：空开始字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isStartWith("Hello, world!", "")).equals(true);
        });
    });
    // 测试 getPosition 方法
    (0, mocha_1.describe)("getPosition 方法测试", function () {
        (0, mocha_1.it)("正常情况：找到子字符串位置", function () {
            (0, chai_1.expect)(src_1.StringHelper.getPosition("Hello, world!", "world")).equals(7);
        });
        (0, mocha_1.it)("正常情况：未找到子字符串位置", function () {
            (0, chai_1.expect)(src_1.StringHelper.getPosition("Hello, world!", "test")).equals(-1);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.getPosition("", "test")).equals(-1);
        });
        (0, mocha_1.it)("边界情况：空子字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.getPosition("Hello, world!", "")).equals(0);
        });
    });
    // 测试 getStringBeforeSeparator 方法
    (0, mocha_1.describe)("getStringBeforeSeparator 方法测试", function () {
        (0, mocha_1.it)("正常情况：找到分隔符之前字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringBeforeSeparator("Hello, world!", ",")).equals("Hello");
        });
        (0, mocha_1.it)("边界情况：未找到分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringBeforeSeparator("Hello, world!", "|")).equals("Hello, world!");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringBeforeSeparator("", ",")).equals("");
        });
        (0, mocha_1.it)("边界情况：空分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringBeforeSeparator("Hello, world!", "")).equals("");
        });
    });
    // 测试 getStringAfterSeparator 方法
    (0, mocha_1.describe)("getStringAfterSeparator 方法测试", function () {
        (0, mocha_1.it)("正常情况：找到分隔符之后字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringAfterSeparator("Hello, world!", ",")).equals(" world!");
        });
        (0, mocha_1.it)("边界情况：未找到分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringAfterSeparator("Hello, world!", "|")).equals("Hello, world!");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringAfterSeparator("", ",")).equals("");
        });
        (0, mocha_1.it)("边界情况：空分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.getStringAfterSeparator("Hello, world!", "")).equals("Hello, world!");
        });
    });
    // 测试 format 方法
    (0, mocha_1.describe)("format 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.format("Hello, {0}!", "world")).equals("Hello, world!");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.format("", "world")).equals("");
        });
        (0, mocha_1.it)("边界情况：无占位符", function () {
            (0, chai_1.expect)(src_1.StringHelper.format("Hello, world!", "world")).equals("Hello, world!");
        });
    });
    // 测试 explode 方法
    (0, mocha_1.describe)("explode 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.explode("Hello, world!", ",")).deep.equals(["Hello", " world!"]);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.explode("", ",")).deep.equals([""]);
        });
        (0, mocha_1.it)("边界情况：无分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.explode("Hello, world!", "|")).deep.equals(["Hello, world!"]);
        });
    });
    // 测试 implode 方法
    (0, mocha_1.describe)("implode 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.implode(["Hello", "world"], ", ")).equals("Hello, world");
        });
        (0, mocha_1.it)("边界情况：空数组", function () {
            (0, chai_1.expect)(src_1.StringHelper.implode([], ", ")).equals("");
        });
        (0, mocha_1.it)("边界情况：无分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.implode(["Hello", "world"], "")).equals("Helloworld");
        });
    });
    // 测试 toLower 方法
    (0, mocha_1.describe)("toLower 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.toLower("Hello, WORLD!")).equals("hello, world!");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.toLower("")).equals("");
        });
    });
    // 测试 toUpper 方法
    (0, mocha_1.describe)("toUpper 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.toUpper("Hello, world!")).equals("HELLO, WORLD!");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.toUpper("")).equals("");
        });
    });
    // 测试 convertToInt 方法
    (0, mocha_1.describe)("convertToInt 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToInt("123")).equals(123);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToInt("")).is.NaN;
        });
        (0, mocha_1.it)("边界情况：非数字字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToInt("Hello")).is.NaN;
        });
    });
    // 测试 convertToFloat 方法
    (0, mocha_1.describe)("convertToFloat 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToFloat("123.45")).equals(123.45);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToFloat("")).is.NaN;
        });
        (0, mocha_1.it)("边界情况：非数字字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToFloat("Hello")).is.NaN;
        });
    });
    // 测试 convertToBool 方法
    (0, mocha_1.describe)("convertToBool 方法测试", function () {
        (0, mocha_1.it)("正常情况：字符串 \"true\"", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToBool("true")).equals(true);
        });
        (0, mocha_1.it)("正常情况：字符串 \"false\"", function () {
            (0, chai_1.expect)(src_1.StringHelper.convertToBool("false")).equals(false);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(function () { return src_1.StringHelper.convertToBool(""); }).to.throw();
        });
    });
    // 测试 convertTODateTime 方法
    (0, mocha_1.describe)("convertTODateTime 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            var date = new Date("2022-03-20T00:00:00");
            (0, chai_1.expect)(src_1.StringHelper.convertTODateTime("2022-03-20T00:00:00")).deep.equal(date);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            var invalidDate = src_1.StringHelper.convertTODateTime("");
            (0, chai_1.expect)(invalidDate.toString()).to.equal('Invalid Date');
        });
    });
    // 测试 isNumber 方法
    (0, mocha_1.describe)("isNumber 方法测试", function () {
        (0, mocha_1.it)("正常情况：整数字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isNumber("123")).equals(true);
        });
        (0, mocha_1.it)("正常情况：浮点数字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isNumber("123.45")).equals(true);
        });
        (0, mocha_1.it)("正常情况：负数字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isNumber("-123")).equals(true);
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isNumber("")).equals(false);
        });
        (0, mocha_1.it)("边界情况：非数字字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.isNumber("Hello")).equals(false);
        });
    });
    // 测试 multi 方法
    (0, mocha_1.describe)("multi 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.multi("Hello", 3)).equals("HelloHelloHello");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.multi("", 3)).equals("");
        });
        (0, mocha_1.it)("边界情况：计数为0", function () {
            (0, chai_1.expect)(src_1.StringHelper.multi("Hello", 0)).equals("");
        });
        (0, mocha_1.it)("边界情况：计数为负数", function () {
            (0, chai_1.expect)(src_1.StringHelper.multi("Hello", -3)).equals("");
        });
    });
    // 测试 splice 方法
    (0, mocha_1.describe)("splice 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.splice("Hello, world!", ",", "-")).equals("Hello- world!");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.splice("", ",", "-")).equals("");
        });
        (0, mocha_1.it)("边界情况：无旧分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.splice("Hello, world!", "|", "-")).equals("Hello, world!");
        });
        (0, mocha_1.it)("边界情况：无新分隔符", function () {
            (0, chai_1.expect)(src_1.StringHelper.splice("Hello, world!", ",")).equals("Hello world!");
        });
    });
    // 测试 removeAllSpace 方法
    (0, mocha_1.describe)("removeAllSpace 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.removeAllSpace("Hello, world!")).equals("Hello,world!");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.removeAllSpace("")).equals("");
        });
    });
    // 测试 trimLeft 方法
    (0, mocha_1.describe)("trimLeft 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimLeft("   Hello")).equals("Hello");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimLeft("")).equals("");
        });
        (0, mocha_1.it)("边界情况：无前导空格", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimLeft("Hello")).equals("Hello");
        });
    });
    // 测试 trimRight 方法
    (0, mocha_1.describe)("trimRight 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimRight("Hello   ")).equals("Hello");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimRight("")).equals("");
        });
        (0, mocha_1.it)("边界情况：无后导空格", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimRight("Hello")).equals("Hello");
        });
    });
    // 测试 trimBoth 方法
    (0, mocha_1.describe)("trimBoth 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimBoth("   Hello   ")).equals("Hello");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimBoth("")).equals("");
        });
        (0, mocha_1.it)("边界情况：无前后空格", function () {
            (0, chai_1.expect)(src_1.StringHelper.trimBoth("Hello")).equals("Hello");
        });
    });
    // 测试 trim 方法
    (0, mocha_1.describe)("trim 方法测试", function () {
        (0, mocha_1.it)("正常情况", function () {
            (0, chai_1.expect)(src_1.StringHelper.trim("   Hello   ")).equals("Hello");
        });
        (0, mocha_1.it)("边界情况：空字符串", function () {
            (0, chai_1.expect)(src_1.StringHelper.trim("")).equals("");
        });
        (0, mocha_1.it)("边界情况：无前后空格", function () {
            (0, chai_1.expect)(src_1.StringHelper.trim("Hello")).equals("Hello");
        });
    });
});
