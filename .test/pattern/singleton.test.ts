/**
 * @file   : Pattern.test.ts
 * @time   : 8:22
 * @date   : 2022/9/12
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import {describe, it} from "mocha";
import {expect}       from "chai"; // 使用 Chai 进行断言

import {Singleton} from "../../src";
import {Student}   from "../_res/student";


describe("单元测试包名称 模式测试", function () {
    it("单元测试方法名称 单例模式", function () {
        let expectData = Singleton.create(Student);
        let actualData = Singleton.create(Student);

        expect(actualData).deep.equals(expectData);
    });
});

