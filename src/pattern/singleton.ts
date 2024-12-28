/**
 * @file   : Singleton.ts
 * @time   : 8:15
 * @date   : 2022/9/12
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export class Singleton {
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
    static create<T>(className: new () => T) {
        let instance: T;
        return (() => {
            return (instance ??= new className());
        })();
    };
}
