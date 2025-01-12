"use strict";
/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 08:44:19
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-20 12:14:06
 * @FilePath     : ObjectHelper.ts
 * @Description:
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectHelper = void 0;
var typeHelper_1 = require("./typeHelper");
var ObjectHelper = /** @class */ (function () {
    function ObjectHelper() {
    }
    /**
     * 合并两个对象，并返回两个对象的联合类型
     * @param first
     * @param second
     * @returns
     */
    ObjectHelper.combine = function (first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!Object.prototype.hasOwnProperty.call(result, id)) {
                result[id] = second[id];
            }
        }
        return result;
    };
    /**
     * 合并所有的各个对象为一个目标对象
     * @param objects
     * @returns
     */
    ObjectHelper.combineAll = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        var result = {};
        objects.forEach(function (element) {
            for (var id in element) {
                result[id] = element[id];
            }
        });
        return result;
    };
    /**
     * 判断一个对象内是否存在某成员
     * @param objectData 目标对象实例
     * @param memberName 成员名称(如果是某个对象子对象的成员，则可以使用“A.B.C”的格式。)
     * @returns {boolean}
     */
    ObjectHelper.hasMember = function (objectData, memberName) {
        var nodes = memberName.split(".");
        var nodeCount = nodes.length;
        var lastNode = objectData;
        var defaultValue = "_hasMember_|_defaultValue_";
        for (var i = 0; i < nodeCount; i++) {
            if (lastNode == null) {
                break;
            }
            lastNode = ObjectHelper._getMemberInner(lastNode, nodes[i], defaultValue);
        }
        return lastNode !== defaultValue;
    };
    ObjectHelper._hasMemberInner = function (objectData, memberName) {
        return memberName in objectData;
    };
    /**
     * 獲取对象的成员信息。如果指定的成员名称不存在，则返回defaultValue。
     * @param {*} targetObject
     * @param {*} memberName 成员的名称(如果是某个对象子对象的成员，则可以使用“A.B.C”的格式。)
     * @param {*} defaultValue
     * @example:
     * 如下有对象moo
     moo= {
         m0: 'mike',
         m1: {},
         m2: {
             n1: {
                 o: 'hello',
                 p: function (s) {
                    return 1 + s;
                 }
             }
         },
     }

     调用时候：
     //调用直接moo的属性
     let p = app.util.getObjectMemberSafely(this.moo, "m0");
     console.log(p);
     //调用moo的子属性对象的属性
     p = app.util.getObjectMemberSafely(this.moo, "m2.n1.o", "something");
     console.log(p);
     //调用moo的子属性对象的方法
     p = app.util.getObjectMemberSafely(this.moo, "m2.n1.p");
     console.log(p(5));
     //调用moo的不存在的属性，返回的结果为第三个参数
     //（缺省值 I am empty。如果不给指定明确的缺省值，那么返回 null 作为缺省值）
     p = app.util.getObjectMemberSafely(this.moo, "m2.n1.w", "I am empty");
     console.log(p);
     */
    ObjectHelper.getMember = function (targetObject, memberName, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var nodes = memberName.split(".");
        var nodeCount = nodes.length;
        var lastNode = targetObject;
        for (var i = 0; i < nodeCount; i++) {
            if (lastNode == null) {
                break;
            }
            lastNode = ObjectHelper._getMemberInner(lastNode, nodes[i], defaultValue);
        }
        return lastNode;
    };
    ObjectHelper._getMemberInner = function (targetObject, propertyName, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var exist = ObjectHelper._hasMemberInner(targetObject, propertyName);
        if (exist) {
            return targetObject[propertyName];
        }
        else {
            return defaultValue;
        }
    };
    /**
     * 与assign相对,assignDeeply是深度赋值
     * @param args
     * @returns {{}|*}
     */
    ObjectHelper.assignDeeply = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0) {
            console.error("extends params is undefined");
            return {};
        }
        if (args.length === 1) {
            return args[0];
        }
        //要合并的目标对象
        var target = args[0];
        //要合并的内容
        var sources = args.slice(1, args.length);
        if (typeHelper_1.TypeHelper.isObject(target) && typeHelper_1.TypeHelper.isArray(target)) {
            target = {};
        }
        sources.map(function (item) {
            //防止死循环
            if (target === item) {
                return false;
            }
            //如果内容是对象
            if (typeHelper_1.TypeHelper.isObject(item) || typeHelper_1.TypeHelper.isArray(item)) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        if (typeHelper_1.TypeHelper.isObject(item[key])) {
                            //修正数据
                            target[key] = (target[key] && typeHelper_1.TypeHelper.isObject(target[key])) ? target[key] : {};
                            target[key] = ObjectHelper.assignDeeply(target[key], item[key]);
                        }
                        else if (typeHelper_1.TypeHelper.isArray(item[key])) {
                            //修正数据
                            target[key] = (target[key] && typeHelper_1.TypeHelper.isArray(target[key])) ? target[key] : [];
                            target[key] = ObjectHelper.assignDeeply(target[key], item[key]);
                        }
                        else {
                            //基本类型直接赋值
                            target[key] = item[key];
                        }
                    }
                }
            }
        });
        return target;
    };
    /**
     * 获取所有属性的数量
     */
    ObjectHelper.getMemberCount = function (targetObject) {
        return Object.getOwnPropertyNames(targetObject).length;
    };
    /**
     * 两个对象内容成员相等性的判断
     * @param {Object} objectA 待比较对象 a
     * @param  {Object} objectB  待比较对象 b
     * @return {boolean}
     * @link https://www.jb51.net/article/178180.htm
     * @link https://www.jb51.net/article/110768.htm
     */
    ObjectHelper.isValueEqual = function (objectA, objectB) {
        // 判断两个对象是否指向同一内存，指向同一内存返回true
        if (objectA === objectB)
            return true;
        // 获取两个对象键值数组
        var aProps = Object.getOwnPropertyNames(objectA);
        var bProps = Object.getOwnPropertyNames(objectB);
        // 判断两个对象键值数组长度是否一致，不一致返回false
        if (aProps.length !== bProps.length)
            return false;
        // 遍历对象的键值
        for (var prop in objectA) {
            // 判断a的键值，在b中是否存在，不存在，返回false
            if (objectB.hasOwnProperty(prop)) {
                // 判断a的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回false
                if (typeof objectA[prop] === "object") {
                    if (!ObjectHelper.isValueEqual(objectA[prop], objectB[prop]))
                        return false;
                }
                else if (objectA[prop] !== objectB[prop]) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    };
    return ObjectHelper;
}());
exports.ObjectHelper = ObjectHelper;
