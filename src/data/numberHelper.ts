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

import {StringHelper} from "./stringHelper";

export class NumberHelper {
    /**
     * 获取带精度的浮点数
     * @param {number|string} value 待计算数值
     * @param {number} precision  获取结果的精度(默认2位小数精度)
     * @returns {number|string}
     */
    static getFloat(value: number | string, precision: number = 2): string {
        const paddingZeros = StringHelper.multi("0", precision);

        const temp = parseInt("1" + paddingZeros);
        value = Math.round(parseFloat(typeof value === "string" ? value : value.toString()) * temp) / temp;
        let xsd = value.toString().split(".");

        if (xsd.length === 1) {
            value = value.toString();
            if (paddingZeros != "") {
                value = `${value}.${paddingZeros}`;
            }
            return value;
        }

        // 目前小数点后面的位数
        const existPrecision: number = xsd[1].length;
        const stillPaddingZeros = StringHelper.multi("0", precision - existPrecision);
        value = value.toString() + stillPaddingZeros;

        return value.toString();
    }
}
