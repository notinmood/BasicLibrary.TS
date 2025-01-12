"use strict";
/*
 * @Author: Shandong Xiedali
 * @Date: 2022-04-10 23:30:52
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-20 12:11:56
 * @FilePath     : NumberHelper.ts
 * @Description:
 *
 * Copyright (c) 2022 by Hiland/RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberHelper = void 0;
var stringHelper_1 = require("./stringHelper");
var NumberHelper = /** @class */ (function () {
    function NumberHelper() {
    }
    /**
     * 获取带精度的浮点数
     * @param {number|string} value 待计算数值
     * @param {number} precision  获取结果的精度(默认2位小数精度)
     * @returns {number|string}
     */
    NumberHelper.getFloat = function (value, precision) {
        if (precision === void 0) { precision = 2; }
        var paddingZeros = stringHelper_1.StringHelper.multi("0", precision);
        var temp = parseInt("1" + paddingZeros);
        value = Math.round(parseFloat(typeof value === "string" ? value : value.toString()) * temp) / temp;
        var xsd = value.toString().split(".");
        if (xsd.length === 1) {
            value = value.toString();
            if (paddingZeros != "") {
                value = "".concat(value, ".").concat(paddingZeros);
            }
            return value;
        }
        // 目前小数点后面的位数
        var existPrecision = xsd[1].length;
        var stillPaddingZeros = stringHelper_1.StringHelper.multi("0", precision - existPrecision);
        value = value.toString() + stillPaddingZeros;
        return value.toString();
    };
    return NumberHelper;
}());
exports.NumberHelper = NumberHelper;
