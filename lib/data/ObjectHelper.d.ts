export declare class ObjectHelper {
    /**
     * 合并两个对象，并返回两个对象的联合类型
     * @param first
     * @param second
     * @returns
     */
    static combine<T, U>(first: T, second: U): T & U;
    /**
     * 合并所有的各个对象为一个目标对象
     * @param objects
     * @returns
     */
    static combineAll(...objects: any[]): {};
}
