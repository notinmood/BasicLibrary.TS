/**
 * @file   : Singleton.ts
 * @time   : 8:15
 * @date   : 2022/9/12
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export class Singleton {
    static create = <T>(className: new () => T) => {
        let instance: T;
        return () => {
            return (instance ??= new className());
        };
    };
}
