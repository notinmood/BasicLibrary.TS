"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = void 0;
/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/15 23:02:35
 * @FilePath     : bar.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
var Bar = /** @class */ (function () {
    function Bar() {
        var _this = this;
        this.cm2 = function (someParam) {
            someParam = _this.cmx() + someParam;
            return "cm2" + someParam;
        };
        this.cmm = function () {
            return "cmm";
        };
    }
    Bar.sm1 = function (someParam) {
        someParam = Bar.smx() + someParam;
        return "sm1" + someParam;
    };
    Bar.smx = function () {
        return "smx";
    };
    Bar.prototype.cm1 = function (someParam) {
        someParam = this.cmx() + someParam;
        return "cm1" + someParam;
    };
    Bar.prototype.cmx = function () {
        return "cmx-";
    };
    Bar.sm2 = function (someParam) {
        someParam = Bar.smx() + someParam;
        return "sm2" + someParam;
    };
    return Bar;
}());
exports.Bar = Bar;
