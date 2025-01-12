"use strict";
/**
 * @file   : Singleton.ts
 * @time   : 8:15
 * @date   : 2022/9/12
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    /**
     * 创建单例对象
     * @param className 类名
     * @returns 单例对象
     * @template T 类类型
     * @author ShanDong Xiedali
     * @version 1.0.0
     * @since 1.0.0
     * @example
     * ```typescript
     * //直接写create(类型名)
     * const singleton = Singleton.create(MyClass);
     * //而不用写create<MyClass>(MyClass),当然也可以这么写。
     * const singleton = Singleton.create<MyClass>(MyClass);
     * ```
     */
    Singleton.create = function (className) {
        var instance;
        return (function () {
            return (instance !== null && instance !== void 0 ? instance : (instance = new className()));
        })();
    };
    ;
    return Singleton;
}());
exports.Singleton = Singleton;
