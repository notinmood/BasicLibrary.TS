"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/15 22:56:36
 * @FilePath     : foo.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.m2 = function (someParam) {
        return "m2" + someParam;
    };
    Foo.m1 = function (someParam) {
        return "m1" + someParam;
    };
    return Foo;
}());
exports.Foo = Foo;
