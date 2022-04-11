"use strict";
/*
 * @Author: Shandong Xiedali
 * @Mail: 9727005@qq.com
 * @Date: 2022-04-10 16:10:11
 * @LastEditors: Shandong Xiedali
 * @LastEditTime: 2022-04-11 12:15:10
 * @FilePath: \BasicLibrary.TS\src\index.ts
 * @Description:
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberHelper = exports.ObjectHelper = exports.StringHelper = void 0;
// +--------------------------------------------------------------------------
// |::说明·| 将各个类型和方法集中暴露
// +--------------------------------------------------------------------------
var StringHelper_1 = require("./data/StringHelper");
Object.defineProperty(exports, "StringHelper", { enumerable: true, get: function () { return StringHelper_1.StringHelper; } });
var ObjectHelper_1 = require("./data/ObjectHelper");
Object.defineProperty(exports, "ObjectHelper", { enumerable: true, get: function () { return ObjectHelper_1.ObjectHelper; } });
var NumberHelper_1 = require("./data/NumberHelper");
Object.defineProperty(exports, "NumberHelper", { enumerable: true, get: function () { return NumberHelper_1.NumberHelper; } });
