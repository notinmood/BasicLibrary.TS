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
exports.Singleton = exports.NumberHelper = exports.ObjectHelper = exports.StringHelper = void 0;
// +--------------------------------------------------------------------------
// |::说明·| 将各个类型和方法集中暴露
// +--------------------------------------------------------------------------
var stringHelper_1 = require("./data/stringHelper");
Object.defineProperty(exports, "StringHelper", { enumerable: true, get: function () { return stringHelper_1.StringHelper; } });
var objectHelper_1 = require("./data/objectHelper");
Object.defineProperty(exports, "ObjectHelper", { enumerable: true, get: function () { return objectHelper_1.ObjectHelper; } });
var numberHelper_1 = require("./data/numberHelper");
Object.defineProperty(exports, "NumberHelper", { enumerable: true, get: function () { return numberHelper_1.NumberHelper; } });
var singleton_1 = require("./pattern/singleton");
Object.defineProperty(exports, "Singleton", { enumerable: true, get: function () { return singleton_1.Singleton; } });
