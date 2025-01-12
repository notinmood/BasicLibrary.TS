"use strict";
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/24 10:14:45
 * @FilePath     : resultObject.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultObject = void 0;
var typeHelper_1 = require("../data/typeHelper");
var objectHelper_1 = require("../data/objectHelper");
/**
 * 从服务端返回的带格式的数据
 * 属性{bool} resultType 表示反回信息的真或者假
 * 属性{string} message 返回信息的主题信息
 * 属性{object} data 返回信息的内容信息
 * 属性{object} misc 返回信息的各种其他信息，这是一个自定义对象可以任意扩展其子属性信息
 */
var ResultObject = /** @class */ (function () {
    function ResultObject(status, message, data, misc) {
        if (status === void 0) { status = true; }
        if (message === void 0) { message = ""; }
        if (data === void 0) { data = null; }
        if (misc === void 0) { misc = null; }
        this.status = status;
        this.message = message;
        this.data = data;
        if (misc == null) {
            this.misc = {};
        }
        else {
            this.misc = misc;
        }
    }
    /**
     * 设定属性misc的各个子属性
     * @param {*} name
     * @param {*} value
     */
    ResultObject.prototype.setMiscItem = function (name, value) {
        this.misc[name] = value;
    };
    /**
     * 获取misc的各个子属性的值
     * @param {*} name
     * @param {*} defaultValue
     */
    ResultObject.prototype.getMiscItem = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return objectHelper_1.ObjectHelper.getMember(this.misc, name, defaultValue);
    };
    /**
     * 将ResultObject转换成为json字符串
     * @returns {string}
     */
    ResultObject.prototype.stringify = function () {
        return ResultObject.stringify(this);
    };
    /**
     * 将ResultObject转换成为json字符串
     * @param resultObject
     * @returns {string}
     */
    ResultObject.stringify = function (resultObject) {
        return JSON.stringify(resultObject);
    };
    /**
     * 解析服务器返回信息为本地类型ResultObject的对象
     * @param {*} jsonData 服务器返回的json格式字符串或者json对象
     */
    ResultObject.parse = function (jsonData) {
        var typeInfo = typeHelper_1.TypeHelper.getType(jsonData);
        if (typeInfo === typeHelper_1.TypeHelper.ObjectTypes.string) {
            jsonData = JSON.parse(jsonData);
            typeInfo = typeHelper_1.TypeHelper.getType(jsonData);
        }
        var result = null;
        if (typeInfo === typeHelper_1.TypeHelper.ObjectTypes.object) {
            var status_1 = objectHelper_1.ObjectHelper.getMember(jsonData, "status", false);
            var message = objectHelper_1.ObjectHelper.getMember(jsonData, "message", "");
            var data = objectHelper_1.ObjectHelper.getMember(jsonData, "data", null);
            var misc = objectHelper_1.ObjectHelper.getMember(jsonData, "misc", null);
            result = new ResultObject(status_1, message, data, misc);
        }
        return result;
    };
    return ResultObject;
}());
exports.ResultObject = ResultObject;
