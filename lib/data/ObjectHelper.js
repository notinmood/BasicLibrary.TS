"use strict";
/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 08:44:19
 * @LastEditors: Shandong Xiedali
 * @LastEditTime: 2022-04-11 12:24:40
 * @FilePath: \BasicLibrary.TS\src\data\ObjectHelper.ts
 * @Description:
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectHelper = void 0;
class ObjectHelper {
    /**
     * 合并两个对象，并返回两个对象的联合类型
     * @param first
     * @param second
     * @returns
     */
    static combine(first, second) {
        let result = {};
        for (let id in first) {
            result[id] = first[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    /**
     * 合并所有的各个对象为一个目标对象
     * @param objects
     * @returns
     */
    static combineAll(...objects) {
        let result = {};
        objects.forEach(element => {
            for (let id in element) {
                result[id] = element[id];
            }
        });
        return result;
    }
}
exports.ObjectHelper = ObjectHelper;
