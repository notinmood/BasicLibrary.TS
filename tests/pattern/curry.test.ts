/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2025/1/30 18:08:34
 * @FilePath     : curry.test.ts
 * @Description  :
 * Copyright (c) 2025 by Hiland & RainyTop, All Rights Reserved.
 */

import {curry} from "../../src/pattern/curry";

import {expect, describe, it} from "vitest";

describe("curry", () => {
    it("curry", () => {
        const add = (a: number, b: number, c: number) => a + b + c;
        const curriedAdd = curry(add);

        const add1 = curriedAdd(1);
        const add12 = add1(2);
        const result = add12(3);
        expect(result).toBe(6);

        const result2 = curriedAdd(2)(3)(4);
        expect(result2).toBe(9);

        const result3 = curriedAdd(2, 3)(4);
        expect(result3).toBe(9);
    });
});
