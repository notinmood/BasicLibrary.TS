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

export class ObjectHelper {
    /**
     * 合并两个对象，并返回两个对象的联合类型
     * @param first 
     * @param second 
     * @returns 
     */
    static combine<T, U>(first: T, second: U): T & U {
        const result = <T & U>({} as any);

        for (const id in first) {
            (<any>result)[id] = (<any>first)[id];
        }

        for (const id in second) {
            if (!Object.prototype.hasOwnProperty.call((<any>result), id)) {
                (<any>result)[id] = (<any>second)[id];
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
    static combineAll(...objects: any[]) {
        const result = {};
        objects.forEach(element => {
            for (const id in element) {
                (<any>result)[id] = element[id];
            }
        });

        return result;
    }
}