// 单元测试文件: arrayHelper.test.ts
import {ArrayHelper} from "../../src/data/arrayHelper";

import { expect, test, describe, it } from "vitest";
// import {expect}       from "chai";
// import {describe, it} from "mocha";


// 测试 ArrayHelper 类
describe('ArrayHelper', () => {

    // 测试 hasMember 方法
    describe('hasMember', () => {
        it('存在元素时返回 true', () => {
            expect(ArrayHelper.hasMember([1, 2, 3], 2)).true;
        });
        it('不存在元素时返回 false', () => {
            expect(ArrayHelper.hasMember([1, 2, 3], 4)).false;
        });
        it('空数组时返回 false', () => {
            expect(ArrayHelper.hasMember([], 1)).false;
        });
        it('包含对象时正确判断', () => {
            const obj = {a: 1};
            expect(ArrayHelper.hasMember([obj], obj)).true;
        });
        it('包含对象时不同对象返回 false', () => {
            expect(ArrayHelper.hasMember([{a: 1}], {a: 1})).false;
        });
    });

    // 测试 getCount 方法
    describe('getCount', () => {
        it('普通数组返回正确长度', () => {
            expect(ArrayHelper.getCount([1, 2, 3])).equals(3);
        });
        it('空数组返回 0', () => {
            expect(ArrayHelper.getCount([])).equals(0);
        });
        // it('包含关联属性的数组返回正确长度', () => {
        //     const arr = [1, 2, 3];
        //     arr['key'] = 'value';
        //     expect(ArrayHelper.getCount(arr)).equals(3);
        // });
    });

    // 测试 isEqual 方法
    describe('isEqual', () => {
        it('两个相同数组返回 true', () => {
            expect(ArrayHelper.isEqual([1, 2, 3], [1, 2, 3])).true;
        });
        it('两个不同数组返回 false', () => {
            expect(ArrayHelper.isEqual([1, 2, 3], [3, 2, 1])).false;
        });
        it('两个空数组返回 true', () => {
            expect(ArrayHelper.isEqual([], [])).true;
        });
        it('两个不同类型的数组返回 false', () => {
            expect(ArrayHelper.isEqual([1, 2, 3], ['1', '2', '3'])).false;
        });
    });

    // 测试 sortByPropertyValue 方法
    describe('sortByPropertyValue', () => {
        const arr = [{name: "zlw", age: "24"}, {name: "wlz", age: "5"}, {name: "abc", age: "10"}];
        it('按 age 升序排序', () => {
            expect(ArrayHelper.sortByPropertyValue(arr, 'age', 'ASC')).equals([{name: "wlz", age: "5"}, {name: "abc", age: "10"}, {name: "zlw", age: "24"}]);
        });
        it('按 age 降序排序', () => {
            expect(ArrayHelper.sortByPropertyValue(arr, 'age', 'DESC')).equals([{name: "zlw", age: "24"}, {name: "abc", age: "10"}, {name: "wlz", age: "5"}]);
        });
    });

    // 测试 sortByPropertyLength 方法
    describe('sortByPropertyLength', () => {
        const arr = [{name: "zlw", age: "24"}, {name: "wlz", age: "5"}, {name: "abc", age: "10"}];
        it('按 name 升序排序', () => {
            expect(ArrayHelper.sortByPropertyLength(arr, 'name', 'ASC')).equals([{name: "abc", age: "10"}, {name: "wlz", age: "5"}, {name: "zlw", age: "24"}]);
        });
        it('按 name 降序排序', () => {
            expect(ArrayHelper.sortByPropertyLength(arr, 'name', 'DESC')).equals([{name: "zlw", age: "24"}, {name: "abc", age: "10"}, {name: "wlz", age: "5"}]);
        });
    });

    // 测试 mergeElementProperty 方法
    describe('mergeElementProperty', () => {
        const arrayA = [{ 'a': 'a1', 'b': 'b1' }, { 'a': 'a2', 'b': 'b2' }, { 'a': 'a3', 'b': 'b3' }, { 'a': 'a4', 'b': 'b4' }];
        const arrayB = [{ 'm': 'm1', 'n': 'n1' }, { 'm': 'm2', 'n': 'n2' }, { 'm': 'm3', 'n': 'n3' }, { 'm': 'm4', 'n': 'n4' }, { 'm': 'm5', 'n': 'n5' }];
        const arrayC = [{ 'x': 'x1', 'y': 'y1' }, { 'x': 'x2', 'y': 'y2' }, { 'x': 'x3', 'y': 'y3' }];

        it('正确合并数组A和数组B', () => {
            expect(ArrayHelper.mergeElementProperty(arrayA, arrayB)).equals([
                {"a": "a1", "b": "b1", "m": "m1", "n": "n1"},
                {"a": "a2", "b": "b2", "m": "m2", "n": "n2"},
                {"a": "a3", "b": "b3", "m": "m3", "n": "n3"},
                {"a": "a4", "b": "b4", "m": "m4", "n": "n4"},
            ]);
        });
        it('正确合并数组A和数组C', () => {
            expect(ArrayHelper.mergeElementProperty(arrayA, arrayC)).equals([
                {"a": "a1", "b": "b1", "x": "x1", "y": "y1"},
                {"a": "a2", "b": "b2", "x": "x2", "y": "y2"},
                {"a": "a3", "b": "b3", "x": "x3", "y": "y3"},
                {"a": "a4", "b": "b4", "x": "x1", "y": "y1"},
            ]);
        });
        it('主数组为空时返回空数组', () => {
            expect(ArrayHelper.mergeElementProperty([], arrayB)).equals([]);
        });
        it('合并数组为空时返回主数组', () => {
            expect(ArrayHelper.mergeElementProperty(arrayA, [])).equals(arrayA);
        });
    });

    // 测试 concat 和 merge 方法
    describe('concat/merge', () => {
        const arr1 = [1, 2, 3];
        const arr2 = ['a', 'b'];
        const arr3 = {key: 'value'};

        it('正确合并多个数组', () => {
            expect(ArrayHelper.concat(arr1, arr2)).equals([1, 2, 3, 'a', 'b']);
        });
        it('正确处理关联数组', () => {
            expect(ArrayHelper.concat(arr1, arr3)).equals([1, 2, 3, {key: 'value'}]);
        });
        it('空数组合并返回空数组', () => {
            expect(ArrayHelper.concat([])).equals([]);
        });
        it('合并空数组不影响结果', () => {
            expect(ArrayHelper.concat(arr1, [])).equals(arr1);
        });
        it('merge 是 concat 的别名', () => {
            expect(ArrayHelper.merge(arr1, arr2)).equals(ArrayHelper.concat(arr1, arr2));
        });
    });

    // 测试 explode 方法
    describe('explode', () => {
        it('按默认分隔符分割字符串', () => {
            expect(ArrayHelper.explode('1,2,3')).equals(['1', '2', '3']);
        });
        it('按指定分隔符分割字符串', () => {
            expect(ArrayHelper.explode('1-2-3', '-')).equals(['1', '2', '3']);
        });
        it('空字符串返回空数组', () => {
            expect(ArrayHelper.explode('')).equals([]);
        });
        it('单个元素不带分隔符返回单个元素数组', () => {
            expect(ArrayHelper.explode('abc')).equals(['abc']);
        });
    });

    // 测试 implode 方法
    describe('implode', () => {
        it('按默认分隔符连接数组', () => {
            expect(ArrayHelper.implode(['1', '2', '3'])).equals('1,2,3');
        });
        it('按指定分隔符连接数组', () => {
            expect(ArrayHelper.implode(['1', '2', '3'], '-')).equals('1-2-3');
        });
        it('空数组返回空字符串', () => {
            expect(ArrayHelper.implode([])).equals('');
        });
        it('单个元素数组返回单个元素字符串', () => {
            expect(ArrayHelper.implode(['abc'])).equals('abc');
        });
    });

    // 测试 addHead 方法
    describe('addHead', () => {
        const arr = [2, 3, 4];

        it('正确添加单个元素到数组头部', () => {
            expect(ArrayHelper.addHead(arr, 1)).equals(4);
            expect(arr).equals([1, 2, 3, 4]);
        });
        it('正确添加多个元素到数组头部', () => {
            expect(ArrayHelper.addHead(arr, 5, 6)).equals(6);
            expect(arr).equals([5, 6, 1, 2, 3, 4]);
        });
        it('空数组添加元素后长度正确', () => {
            expect(ArrayHelper.addHead([], 1, 2)).equals(2);
        });
    });

    // 测试 removeHead 方法
    describe('removeHead', () => {
        it('正确移除数组头部元素', () => {
            expect(ArrayHelper.removeHead([1, 2, 3])).equals(1);
        });
        // it('空数组移除元素后返回 undefined', () => {
        //     expect(ArrayHelper.removeHead([])).equalsUndefined();
        // });
    });

    // 测试 addTail 方法
    describe('addTail', () => {
        const arr = [1, 2, 3];

        it('正确添加单个元素到数组尾部', () => {
            expect(ArrayHelper.addTail(arr, 4)).equals(4);
            expect(arr).equals([1, 2, 3, 4]);
        });
        it('正确添加多个元素到数组尾部', () => {
            expect(ArrayHelper.addTail(arr, 5, 6)).equals(6);
            expect(arr).equals([1, 2, 3, 4, 5, 6]);
        });
        it('空数组添加元素后长度正确', () => {
            expect(ArrayHelper.addTail([], 1, 2)).equals(2);
        });
    });

    // 测试 removeTail 方法
    describe('removeTail', () => {
        it('正确移除数组尾部元素', () => {
            expect(ArrayHelper.removeTail([1, 2, 3])).equals(3);
        });
        // it('空数组移除元素后返回 undefined', () => {
        //     expect(ArrayHelper.removeTail([])).equalsUndefined();
        // });
    });
});

