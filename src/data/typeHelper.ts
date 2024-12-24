/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/24 10:15:51
 * @FilePath     : typeHelper.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */


/**
 * 因为不是所有的类型都继承与Object,所有对目标对象类型的判断,
 * 不能通过原型中注入的方式实现.因此没有typeHelper对应的Injector.
 */
export class TypeHelper {


    static ObjectTypes = {
        null     : "null",
        string   : "string",
        date     : "date",
        boolean  : "boolean",
        undefined: "undefined",
        function : "function",
        number   : "number",
        array    : "array",
        symbol   : "symbol",
        error    : "error",
        regexp   : "regexp",
        object   : "object",
    };

    /**
     * 判断数据的数据类型
     * @param data
     * @returns {string}
     */
    static getType = function (data: any): string {
        let typeName: string = typeof (data);

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
            const typeObject = Object.prototype.toString.call(data);

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
    static isNumber = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.number;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isString = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.string;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isArray = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.array;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isBoolean = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.boolean;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isUndefined = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.undefined;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isNull = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.null;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isSymbol = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.symbol;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isObject = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.object;
    };

    /**
     *
     * @param data
     * @returns {boolean}
     */
    static isFunction = function (data: any): boolean {
        return TypeHelper.getType(data) === TypeHelper.ObjectTypes.function;
    };

    /**
     * 判断给定的数据是否为引用类型
     * @param value
     * @return {boolean}
     */
    static isReferenceType = function (value: any): boolean {
        /**
         * 必须使用 === 严格相等（否则 undefined==null）
         */
        if (value === null) {
            return true;
        }

        return value instanceof Object;
    }

    /**
     * 判断给定的数据是否为值类型
     * @param value
     * @return {boolean}
     */
    static isValueType = function (value: any): boolean {
        return !TypeHelper.isReferenceType(value);
    }
}
