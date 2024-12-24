/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 08:44:19
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-20 12:14:06
 * @FilePath     : ObjectHelper.ts
 * @Description:
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */

import {TypeHelper} from "./typeHelper";

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


    /**
     * 判断一个对象内是否存在某成员
     * @param objectData 目标对象实例
     * @param memberName 成员名称(如果是某个对象子对象的成员，则可以使用“A.B.C”的格式。)
     * @returns {boolean}
     */
    static hasMember(objectData: any, memberName: string): boolean {
        let nodes = memberName.split(".");
        let nodeCount = nodes.length;
        let lastNode = objectData;

        let defaultValue = "_hasMember_|_defaultValue_";
        for (let i = 0; i < nodeCount; i++) {
            if (lastNode == null) {
                break;
            }

            lastNode = ObjectHelper._getMemberInner(lastNode, nodes[i], defaultValue);
        }


        return lastNode !== defaultValue;
    }

    static _hasMemberInner(objectData: any, memberName: string) {
        return memberName in objectData;
    }

    /**
     * 獲取对象的成员信息。如果指定的成员名称不存在，则返回defaultValue。
     * @param {*} targetObject
     * @param {*} memberName 成员的名称(如果是某个对象子对象的成员，则可以使用“A.B.C”的格式。)
     * @param {*} defaultValue
     * @example:
     * 如下有对象moo
     moo= {
         m0: 'mike',
         m1: {},
         m2: {
             n1: {
                 o: 'hello',
                 p: function (s) {
                    return 1 + s;
                 }
             }
         },
     }

     调用时候：
     //调用直接moo的属性
     let p = app.util.getObjectMemberSafely(this.moo, "m0");
     console.log(p);
     //调用moo的子属性对象的属性
     p = app.util.getObjectMemberSafely(this.moo, "m2.n1.o", "something");
     console.log(p);
     //调用moo的子属性对象的方法
     p = app.util.getObjectMemberSafely(this.moo, "m2.n1.p");
     console.log(p(5));
     //调用moo的不存在的属性，返回的结果为第三个参数
     //（缺省值 I am empty。如果不给指定明确的缺省值，那么返回 null 作为缺省值）
     p = app.util.getObjectMemberSafely(this.moo, "m2.n1.w", "I am empty");
     console.log(p);
     */
    static getMember(targetObject: any, memberName: any, defaultValue: any = null) {
        let nodes = memberName.split(".");
        let nodeCount = nodes.length;
        let lastNode = targetObject;

        for (let i = 0; i < nodeCount; i++) {
            if (lastNode == null) {
                break;
            }

            lastNode = ObjectHelper._getMemberInner(lastNode, nodes[i], defaultValue);
        }

        return lastNode;
    }

    static _getMemberInner(targetObject: any, propertyName: any, defaultValue: string | null = null) {
        let exist = ObjectHelper._hasMemberInner(targetObject, propertyName);
        if (exist) {
            return targetObject[propertyName];
        } else {
            return defaultValue;
        }
    }

    /**
     * 与assign相对,assignDeeply是深度赋值
     * @param args
     * @returns {{}|*}
     */
    static assignDeeply(...args: any[]): {} | any {
        if (args.length === 0) {
            console.error("extends params is undefined")
            return {};
        }

        if (args.length === 1) {
            return args[0]
        }

        //要合并的目标对象
        let target = args[0];
        //要合并的内容
        let sources = args.slice(1, args.length)

        if (TypeHelper.isObject(target) && TypeHelper.isArray(target)) {
            target = {};
        }

        sources.map(function (item) {
            //防止死循环
            if (target === item) {
                return false;
            }

            //如果内容是对象
            if (TypeHelper.isObject(item) || TypeHelper.isArray(item)) {
                for (const key in item) {
                    if (item.hasOwnProperty(key)) {
                        if (TypeHelper.isObject(item[key])) {
                            //修正数据
                            target[key] = (target[key] && TypeHelper.isObject(target[key])) ? target[key] : {};
                            target[key] = ObjectHelper.assignDeeply(target[key], item[key])
                        } else if (TypeHelper.isArray(item[key])) {
                            //修正数据
                            target[key] = (target[key] && TypeHelper.isArray(target[key])) ? target[key] : [];
                            target[key] = ObjectHelper.assignDeeply(target[key], item[key])
                        } else {
                            //基本类型直接赋值
                            target[key] = item[key]
                        }
                    }
                }
            }
        })
        return target
    }

    /**
     * 获取所有属性的数量
     */
    static getMemberCount(targetObject: any) {
        return Object.getOwnPropertyNames(targetObject).length;
    }

    /**
     * 两个对象内容成员相等性的判断
     * @param {Object} objectA 待比较对象 a
     * @param  {Object} objectB  待比较对象 b
     * @return {boolean}
     * @link https://www.jb51.net/article/178180.htm
     * @link https://www.jb51.net/article/110768.htm
     */
    static isValueEqual(objectA: any, objectB: any): boolean {
        // 判断两个对象是否指向同一内存，指向同一内存返回true
        if (objectA === objectB) return true
        // 获取两个对象键值数组
        let aProps = Object.getOwnPropertyNames(objectA)
        let bProps = Object.getOwnPropertyNames(objectB)
        // 判断两个对象键值数组长度是否一致，不一致返回false
        if (aProps.length !== bProps.length) return false
        // 遍历对象的键值
        for (let prop in objectA) {
            // 判断a的键值，在b中是否存在，不存在，返回false
            if (objectB.hasOwnProperty(prop)) {
                // 判断a的键值是否为对象，是则递归，不是对象直接判断键值是否相等，不相等返回false
                if (typeof objectA[prop] === "object") {
                    if (!ObjectHelper.isValueEqual(objectA[prop], objectB[prop])) return false
                } else if (objectA[prop] !== objectB[prop]) {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    }
}
