"use strict";
/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 08:42:12
 * @LastEditors: Shandong Xiedali
 * @LastEditTime: 2022-04-11 14:20:55
 * @FilePath: \BasicLibrary.TS\src\data\stringHelper.ts
 * @Description:
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
class StringHelper {
    /**
     * 获取分隔符前的字符串内容
     * @param wholeString
     * @param separator
     * @returns
     */
    static getContentBeforeSeparator(wholeString, separator) {
        const position = wholeString.indexOf(separator);
        if (position) {
            return wholeString.split(separator)[0];
        }
        else {
            return wholeString;
        }
    }
    /**
     * 获取分隔符后的字符串内容
     * @param wholeString
     * @param separator
     * @returns
     */
    static getContentAfterSeparator(wholeString, separator) {
        const position = wholeString.indexOf(separator);
        if (position) {
            return wholeString.substring(position);
        }
        else {
            return wholeString;
        }
    }
}
exports.StringHelper = StringHelper;
