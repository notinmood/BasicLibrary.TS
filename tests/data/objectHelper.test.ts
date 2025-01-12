import { expect, test, describe, it } from "vitest";
// import {expect}       from "chai";
// import {describe, it} from "mocha";

import {ObjectHelper} from "../../src/data/objectHelper";


describe("ObjectHelper", () => {
    // combine方法测试
    it("combine方法-正常合并两个对象", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const result = ObjectHelper.combine(obj1, obj2);
        expect(result).deep.equals({ a: 1, b: 2, c: 4 });
    });

    it("combine方法-第一个对象为空", () => {
        const obj1 = {};
        const obj2 = { a: 1, b: 2 };
        const result = ObjectHelper.combine(obj1, obj2);
        expect(result).deep.equals({ a: 1, b: 2 });
    });

    it("combine方法-第二个对象为空", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = {};
        const result = ObjectHelper.combine(obj1, obj2);
        expect(result).deep.equals({ a: 1, b: 2 });
    });

    it("combine方法-两个对象都为空", () => {
        const obj1 = {};
        const obj2 = {};
        const result = ObjectHelper.combine(obj1, obj2);
        expect(result).empty;
    });

    // combineAll方法测试
    it("combineAll方法-正常合并多个对象", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const obj3 = { c: 5, d: 6 };
        const result = ObjectHelper.combineAll(obj1, obj2, obj3);
        expect(result).deep.equals({ a: 1, b: 3, c: 5, d: 6 });
    });

    it("combineAll方法-传入空数组", () => {
        const result = ObjectHelper.combineAll();
        expect(result).empty;
    });

    it("combineAll方法-传入一个对象", () => {
        const obj1 = { a: 1, b: 2 };
        const result = ObjectHelper.combineAll(obj1);
        expect(result).deep.equals({ a: 1, b: 2 });
    });

    it("combineAll方法-传入多个空对象", () => {
        const result = ObjectHelper.combineAll({}, {}, {});
        expect(result).deep.equals({});
    });

    // hasKey方法测试
    it("hasKey方法-对象包含指定key", () => {
        const obj1 = { a: 1, b: 2 };
        expect(ObjectHelper.hasKey(obj1, "a")).true;
    });

    it("hasKey方法-对象不包含指定key", () => {
        const obj1 = { a: 1, b: 2 };
        expect(ObjectHelper.hasKey(obj1, "c")).false;
    });

    it("hasKey方法-空对象", () => {
        const obj1 = {};
        expect(ObjectHelper.hasKey(obj1, "a")).false;
    });

    // hasMember方法测试
    it("hasMember方法-对象包含指定成员", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        expect(ObjectHelper.hasMember(obj1, "a")).true;
        expect(ObjectHelper.hasMember(obj1, "b.c")).true;
    });

    it("hasMember方法-对象不包含指定成员", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        expect(ObjectHelper.hasMember(obj1, "d")).false;
        expect(ObjectHelper.hasMember(obj1, "b.d")).false;
    });

    it("hasMember方法-空对象", () => {
        const obj1 = {};
        expect(ObjectHelper.hasMember(obj1, "a")).false;
    });

    // getMember方法测试
    it("getMember方法-正常获取对象成员", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        expect(ObjectHelper.getMember(obj1, "a")).equals(1);
        expect(ObjectHelper.getMember(obj1, "b.c")).equals(2);
    });

    it("getMember方法-对象不包含指定成员，返回默认值", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        expect(ObjectHelper.getMember(obj1, "d", "default")).equals("default");
        expect(ObjectHelper.getMember(obj1, "b.d", "default")).equals("default");
    });

    it("getMember方法-空对象", () => {
        const obj1 = {};
        expect(ObjectHelper.getMember(obj1, "a", "default")).equals("default");
    });

    // assignDeeply方法测试
    it("assignDeeply方法-正常深度合并两个对象", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { b: { c: 3, d: 4 }, e: 5 };
        const result = ObjectHelper.assignDeeply(obj1, obj2);
        expect(result).deep.equals({ a: 1, b: { c: 3, d: 4 }, e: 5 });
    });

    it("assignDeeply方法-第一个对象为空", () => {
        const obj1 = {};
        const obj2 = { a: 1, b: { c: 2 } };
        const result = ObjectHelper.assignDeeply(obj1, obj2);
        expect(result).deep.equals({ a: 1, b: { c: 2 } });
    });

    it("assignDeeply方法-第二个对象为空", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = {};
        const result = ObjectHelper.assignDeeply(obj1, obj2);
        expect(result).deep.equals({ a: 1, b: { c: 2 } });
    });

    it("assignDeeply方法-两个对象都为空", () => {
        const obj1 = {};
        const obj2 = {};
        const result = ObjectHelper.assignDeeply(obj1, obj2);
        expect(result).deep.equals({});
    });

    // getMemberCount方法测试
    it("getMemberCount方法-正常获取成员数量", () => {
        const obj1 = { a: 1, b: 2 };
        expect(ObjectHelper.getMemberCount(obj1)).equals(2);
    });

    it("getMemberCount方法-空对象", () => {
        const obj1 = {};
        expect(ObjectHelper.getMemberCount(obj1)).equals(0);
    });

    // isValueEqual方法测试
    it("isValueEqual方法-两个对象相等", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        expect(ObjectHelper.isValueEqual(obj1, obj2)).true;
    });

    it("isValueEqual方法-两个对象不相等", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 3 } };
        expect(ObjectHelper.isValueEqual(obj1, obj2)).false;
    });

    it("isValueEqual方法-两个对象键值数量不相等", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { a: 1 };
        expect(ObjectHelper.isValueEqual(obj1, obj2)).false;
    });

    it("isValueEqual方法-两个对象都为空", () => {
        const obj1 = {};
        const obj2 = {};
        expect(ObjectHelper.isValueEqual(obj1, obj2)).true;
    });

    it("isValueEqual方法-一个对象为空", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = {};
        expect(ObjectHelper.isValueEqual(obj1, obj2)).false;
    });
});
