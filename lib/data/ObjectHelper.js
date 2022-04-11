"use strict";
/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 08:44:19
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-12 06:45:41
 * @FilePath     : ObjectHelper.ts
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
        const result = {};
        for (const id in first) {
            result[id] = first[id];
        }
        for (const id in second) {
            if (!Object.prototype.hasOwnProperty.call(result, id)) {
                result[id] = second[id];
            }
            // if (!(<any>result).hasOwnProperty(id)) {
            //     (<any>result)[id] = (<any>second)[id];
            // }
        }
        return result;
    }
    /**
     * 合并所有的各个对象为一个目标对象
     * @param objects
     * @returns
     */
    static combineAll(...objects) {
        const result = {};
        objects.forEach(element => {
            for (const id in element) {
                result[id] = element[id];
            }
        });
        return result;
    }
}
exports.ObjectHelper = ObjectHelper;
