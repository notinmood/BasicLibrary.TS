"use strict";
/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 08:42:12
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-20 12:13:22
 * @FilePath     : StringHelper.ts
 * @Description:
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    /**
     * 截取某个字符串的子字符串
     * @param {*} wholeString 待截取的全字符串
     * @param {*} length 截取长度
     * @param {*} positive 截取方向（true表示正向，false表示反向）
     */
    StringHelper.getSubString = function (wholeString, length, positive) {
        if (positive === void 0) { positive = true; }
        var realLength = wholeString.length;
        var result;
        if (length >= realLength) {
            result = wholeString;
        }
        else if (positive === true) {
            result = wholeString.substring(0, length);
        }
        else {
            result = wholeString.substring(realLength - length, realLength);
        }
        return result;
    };
    ;
    /**
     * 从右向左截取字符串
     * @param {*} wholeString
     * @param {*} length
     */
    StringHelper.right = function (wholeString, length) {
        return StringHelper.getSubString(wholeString, length, false);
    };
    ;
    /**
     * 从左向右截取字符串
     * @param {*} wholeString
     * @param {*} length
     */
    StringHelper.left = function (wholeString, length) {
        return StringHelper.getSubString(wholeString, length, true);
    };
    ;
    /**
     * 将字符串进行方向反转
     * @param {*} stringData 待反转的字符串
     */
    StringHelper.reverse = function (stringData) {
        return stringData.split("").reverse().join("");
    };
    ;
    /**
     * 判断一个字符串是否包含另外一个子字符串
     * @param {*} wholeString 全字符串
     * @param {*} target 被包含的子字符串
     */
    StringHelper.isContains = function (wholeString, target) {
        var result = wholeString.indexOf(target);
        return result > -1;
    };
    ;
    /**
     * 判断字符串是否以某个子字符串结尾
     * @param wholeString
     * @param target
     * @return {boolean}
     */
    StringHelper.isEndWith = function (wholeString, target) {
        return wholeString.endsWith(target);
    };
    /**
     * 判断字符串是否以某个子字符串开始
     * @param wholeString
     * @param target
     * @return {boolean}
     */
    StringHelper.isStartWith = function (wholeString, target) {
        return wholeString.startsWith(target);
    };
    /**
     * 获取子字符串出现的位置
     * @param {*} wholeString
     * @param {*} target
     */
    StringHelper.getPosition = function (wholeString, target) {
        return wholeString.indexOf(target);
    };
    ;
    /**
     * 获取分隔符之前的子字符串
     * @param {*} wholeString
     * @param {*} separator
     */
    StringHelper.getStringBeforeSeparator = function (wholeString, separator) {
        if (StringHelper.isContains(wholeString, separator)) {
            var pos = StringHelper.getPosition(wholeString, separator);
            return wholeString.substring(0, pos);
        }
        return wholeString;
    };
    /**
     * 获取分隔符之后的子字符串
     * @param {*} wholeString
     * @param {*} separator
     */
    StringHelper.getStringAfterSeparator = function (wholeString, separator) {
        if (separator === "") {
            return wholeString;
        }
        if (StringHelper.isContains(wholeString, separator)) {
            var pos = StringHelper.getPosition(wholeString, separator) + 1;
            return wholeString.substring(pos);
        }
        return wholeString;
    };
    /**
     * 为了使用体验，将字符串中的占位符进行替代操作，例子如下：
     * format("Hi--2, {0}, '{1}',this is a '{0}'! ", name, 'uuu');
     * 【注意】现在统一使用 ES6 下的动态字符串表示方式 `hi,${name}`
     *   即，用反引号包裹目标字符串，字符串内的变量用 ${}包裹
     * @param {string} placeHeldString 带占位符 {i} 的字符串
     * @param placeHolders
     * @return {*}
     */
    StringHelper.format = function (placeHeldString) {
        var placeHolders = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            placeHolders[_i - 1] = arguments[_i];
        }
        if (placeHolders) {
            for (var i = 0; i < placeHolders.length; i++) {
                var reg = new RegExp("\\{".concat(i, "\\}"), "gm");
                placeHeldString = placeHeldString.replace(reg, placeHolders[i]);
            }
        }
        return placeHeldString;
    };
    /**
     * 把字符串 whole 按照给定的分隔符 separator 打散为数组
     * @param {*} wholeString
     * @param {*} separator
     */
    StringHelper.explode = function (wholeString, separator) {
        return wholeString.split(separator);
    };
    /**
     * 将数组的各个元素组装为字符串（各个元素之间，置入分隔符 separator）
     * @param arrayData
     * @param separator
     */
    StringHelper.implode = function (arrayData, separator) {
        if (separator === void 0) { separator = ","; }
        return arrayData.join(separator);
    };
    /** 将小写的方法整理成辨识度高的方法，供项目调用
     * （因为随着时间的推移，人脑是很难记清楚系统的小写方法是toLower还是toLowerCase）
     * 将字符串转换为小写
     * @param {*} stringData
     */
    StringHelper.toLower = function (stringData) {
        return stringData.toLowerCase();
    };
    /** 将大写的方法整理成辨识度高的方法，供项目调用
     * （因为随着时间的推移，人脑是很难记清楚系统的小写方法是toUpper还是toUpperCase）
     * 将字符串转换为大写
     * @param {*} stringData
     */
    StringHelper.toUpper = function (stringData) {
        return stringData.toUpperCase();
    };
    /**
     * 将给定的字符串转换为整数类型
     * @param {*} stringData
     */
    StringHelper.convertToInt = function (stringData) {
        return parseInt(stringData);
    };
    /**
     * 将给定的字符串转换为浮点类型
     * @param {*} stringData
     */
    StringHelper.convertToFloat = function (stringData) {
        return parseFloat(stringData);
    };
    /**
     * 将给定的字符串转换为布尔类型
     * @param {*} stringData
     */
    StringHelper.convertToBool = function (stringData) {
        return JSON.parse(stringData);
    };
    /**
     * 将给定的字符串转换为时间类型
     * @param {*} stringData
     */
    StringHelper.convertTODateTime = function (stringData) {
        return new Date(stringData);
    };
    /**
     * 判断给定的字符串内是否为数字类型
     * @param {*} stringData
     */
    StringHelper.isNumber = function (stringData) {
        return /^-?[.\d]+$/.test(stringData);
    };
    /**
     * 获取 count 倍的 stringData
     * @param stringData
     * @param count
     * @returns {string}
     */
    StringHelper.multi = function (stringData, count) {
        var result = "";
        for (var i = 0; i < count; i++) {
            result += stringData;
        }
        return result;
    };
    /**
     * 将一个字符串按照分隔符 ($oldDelimiter) 撕开，然后再用 $newDelimiter 进行缝合
     * @param {string} stringData
     * @param {string} oldDelimiter
     * @param {string} newDelimiter
     * @return {string}
     */
    StringHelper.splice = function (stringData, oldDelimiter, newDelimiter) {
        if (newDelimiter === void 0) { newDelimiter = ""; }
        var tempArray = StringHelper.explode(stringData, oldDelimiter);
        return StringHelper.implode(tempArray, newDelimiter);
    };
    /**
     * 移除字符串内所有的空格
     * @param stringData
     * @return {*}
     */
    StringHelper.removeAllSpace = function (stringData) {
        return stringData.replace(/(\s*)/g, "");
    };
    /**
     *
     * @param stringData
     * @param target
     */
    StringHelper.trimLeft = function (stringData, target) {
        if (target === void 0) { target = " "; }
        var targetLength = target.length;
        if (stringData.substring(0, targetLength) == target) {
            stringData = stringData.slice(target.length); //将空格从字串中去掉
            stringData = StringHelper.trimLeft(stringData, target); //递归调用
        }
        return stringData;
    };
    /**
     * 右侧减除
     * @param stringData
     * @param target
     */
    StringHelper.trimRight = function (stringData, target) {
        if (target === void 0) { target = " "; }
        var allLength = stringData.length;
        var targetLength = target.length;
        if (stringData.substring(allLength - targetLength) == target) {
            //如果字串右边第一个字符为空格
            stringData = stringData.slice(0, allLength - targetLength); //将空格从字串中去掉
            stringData = StringHelper.trimRight(stringData, target); //递归调用
        }
        return stringData;
    };
    /**
     * 两端减除
     * @param stringData
     * @param target
     */
    StringHelper.trimBoth = function (stringData, target) {
        if (target === void 0) { target = " "; }
        var temp = StringHelper.trimLeft(stringData, target);
        return StringHelper.trimRight(temp, target);
    };
    /**
     * 两端减除（trimBoth的别名）
     * @param stringData
     * @param target
     */
    StringHelper.trim = function (stringData, target) {
        if (target === void 0) { target = " "; }
        return StringHelper.trimBoth(stringData, target);
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;
