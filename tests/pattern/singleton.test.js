"use strict";
/**
 * @file   : Pattern.test.ts
 * @time   : 8:22
 * @date   : 2022/9/12
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai"); // 使用 Chai 进行断言
var singleton_1 = require("../../src/pattern/singleton");
var student_1 = require("../_res/student");
(0, mocha_1.describe)("单元测试包名称 模式测试", function () {
    (0, mocha_1.it)("单元测试方法名称 单例模式", function () {
        var expectData = singleton_1.Singleton.create(student_1.Student);
        var actualData = singleton_1.Singleton.create(student_1.Student);
        (0, chai_1.expect)(actualData).deep.equals(expectData);
    });
});
