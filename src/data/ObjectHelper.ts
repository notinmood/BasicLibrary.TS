export class ObjectHelper {
    /**
     * 合并两个对象，并返回两个对象的联合类型
     * @param first 
     * @param second 
     * @returns 
     */
    static combine<T, U>(first: T, second: U): T & U {
        let result = <T & U>({} as unknown);

        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }

        for (let id in second) {
            if (!(<any>result).hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }

        return result;
    }

    /**
     * 合并所有的各个对象为一个目标对象
     * @param objects 
     * @returns 
     */
    static combineAll(...objects: any[]) {
        let result = {};
        objects.forEach(element => {
            for (let id in element) {
                (<any>result)[id] = element[id];
            }
        });

        return result;
    }
}