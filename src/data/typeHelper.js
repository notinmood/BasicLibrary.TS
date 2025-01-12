"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/24 10:15:51
 * @FilePath     : typeHelper.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeHelper = void 0;
/**
 * 因为不是所有的类型都继承与Object,所有对目标对象类型的判断,
 * 不能通过原型中注入的方式实现.因此没有typeHelper对应的Injector.
 */
var TypeHelper = /** @class */ (function () {
    function TypeHelper() {
    }
    TypeHelper.ObjectTypes = {
        null: "null",
        string: "string",
        date: "date",
        boolean: "boolean",
        undefined: "undefined",
        function: "function",
        number: "number",
        array: "array",
        symbol: "symbol",
        error: "error",
        regexp: "regexp",
        object: "object",
    };
    /**
     * 判断数据的数据类型
     * @param data
     * @returns {string}
     */
    TypeHelper.getType = function (data) {
        var typeName = typeof (data);
        /**
         * 对undefined类型要先判断
         */
        if (typeName === "undefined") {
            return TypeHelper.ObjectTypes.undefined;
        }
        if (data == null) {
            return TypeHelper.ObjectTypes.null;
        }
        if (typeName === "object") {
            var typeObject = Object.prototype.toString.call(data);
            switch (typeObject) {
                case "[object Null]":
                    typeName = TypeHelper.ObjectTypes.null;
                    break;
                case "[object Array]":
                    typeName = TypeHelper.ObjectTypes.array;
                    break;
                case "[object Date]":
                    typeName = TypeHelper.ObjectTypes.date;
                    break;
                case "[object RegExp]":
                    typeName = TypeHelper.ObjectTypes.regexp;
                    break;
                case "[object Error]":
                    typeName = TypeHelper.ObjectTypes.error;
                    break;
                default:
                    typeName = TypeHelper.ObjectTypes.object;
            }
        }
        return typeName;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isNumber = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.number;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isString = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.string;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isArray = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.array;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isBoolean = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.boolean;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isUndefined = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.undefined;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isNull = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.null;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isSymbol = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.symbol;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isObject = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.object;
    };
    /**
     *
     * @param data
     * @returns {boolean}
     */
    TypeHelper.isFunction = function (data) {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.function;
    };
    /**
     * 判断给定的数据是否为引用类型
     * @param value
     * @return {boolean}
     */
    TypeHelper.isReferenceType = function (value) {
        /**
         * 必须使用 === 严格相等（否则 undefined==null）
         */
        if (value === null) {
            return true;
        }
        return value instanceof Object;
    };
    /**
     * 判断给定的数据是否为值类型
     * @param value
     * @return {boolean}
     */
    TypeHelper.isValueType = function (value) {
        return !TypeHelper.isReferenceType(value);
    };
    return TypeHelper;
}());
exports.TypeHelper = TypeHelper;
