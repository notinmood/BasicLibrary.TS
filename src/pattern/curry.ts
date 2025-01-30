/*
 * @Author       : Shandong Xiedali
 * @Mail     : 9727005@qq.com
 * @Date     : 2025/1/30 08:00:15
 * @FilePath     : curry.ts
 * @Description  :
 * Copyright (c) 2025 by Hiland & RainyTop, All Rights Reserved.
 */

// TODO:xiedali@2025/01/30 暂时使用any类型，后续需要修改为更具体的类型

/**
 * 偏函数化函数
 * @param fn 待偏函数化的函数
 * @example
 *     const add = (a: number, b: number, c: number) => a + b + c;
 *     const curriedAdd = curry(add);
 *
 *     const add1 = curriedAdd(1);
 *     const add12 = add1(2);
 *     const result = add12(3);
 *     expect(result).toBe(6);
 *
 *     const result2 = curriedAdd(2)(3)(4);
 *     expect(result2).toBe(9);
 *
 *     const result3 = curriedAdd(2, 3)(4);
 *     expect(result3).toBe(9);
 */

// eslint-disable-next-line
export function curry<T>(fn: (...args: T[]) => any) {
    function curried(...args: T[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...args2: T[]) {
                const newArgs = [...args, ...args2]; // args.concat(args2);
                return curried(...newArgs);
            };
        }
    }

    return curried;
}
