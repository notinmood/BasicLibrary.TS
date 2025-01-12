import {StringHelper} from "./stringHelper";

export class ArrayHelper {


    /**
     * 判断是否存在某个元素成员(判断Value)
     * (不需要为关联数组和索引数组分别进行判断)
     * @param arrayData
     * @param item
     * @returns {boolean}
     */
    static hasMember(arrayData: any[], item: any): boolean {
        for (const arrayDataKey in arrayData) {
            if (arrayData[arrayDataKey] === item) {
                return true;
            }
        }

        return false;
    }


    /**
     * 获取元素的个数
     * @param arrayData
     * @returns {number}
     */
    static getCount(arrayData: any[]): number {
        return ArrayHelper._getSelfCount(arrayData);
    }

    /**
     * 获取数组上所有的元素个数 (包括索引元素、关联元素、原型链元素)
     * @param arrayData
     * @returns {number}
     * @private
     */
    static getAllCount(arrayData: any[]): number {
        let inCount = 0;
        for (const myArrayKey in arrayData) {
            inCount++;
        }
        return inCount;
    }

    /**
     * 获取数组自身上所有的元素个数(包括索引元素、关联元素;但不包括原型链元素)
     * @param arrayData
     * @returns {number}
     * @private
     */
    static _getSelfCount(arrayData: any[]): number {
        let inHasCount = 0;
        for (const myArrayKey in arrayData) {
            if (arrayData.hasOwnProperty(myArrayKey)) {
                inHasCount++;
            }
        }

        return inHasCount;
    }

    /**
     * 获取数组上索引元素的个数(不包括关联元素和原型链元素;本方法跟length属性结果一致。)
     * @param arrayData
     * @returns {number}
     * @private
     */
    static _getIndexCount(arrayData: any[]): number {
        let ofCount = 0;
        for (const number of arrayData) {
            ofCount++;
        }

        return ofCount;
    }

    // /**
    //  * 判断是否为索引数组
    //  * @param arrayData
    //  * @returns {boolean}
    //  */
    // static isIndexArray(arrayData: any[]): boolean {
    //     const indexCount = ArrayHelper._getIndexCount(arrayData);
    //     const selfCount = ArrayHelper._getSelfCount(arrayData);
    //
    //     return indexCount !== 0 && indexCount === selfCount;
    // }
    //
    // /**
    //  * 判断是否为关联数组
    //  * @param arrayData
    //  * @returns {boolean}
    //  */
    // static isAssociationArray(arrayData: any[]): boolean {
    //     const indexCount = ArrayHelper._getIndexCount(arrayData);
    //     const selfCount = ArrayHelper._getSelfCount(arrayData);
    //
    //     return indexCount === 0 && selfCount !== 0;
    // }
    //
    // /**
    //  * 判断是否为混合了索引元素和关联元素的数组
    //  * @param arrayData
    //  * @returns {boolean}
    //  */
    // static isHybridArray(arrayData: any[]): boolean {
    //     const indexCount = ArrayHelper._getIndexCount(arrayData);
    //     const selfCount = ArrayHelper._getSelfCount(arrayData);
    //
    //     return indexCount !== 0 && indexCount !== selfCount;
    // }

    /**
     * 判断 2个数组是否相等
     * @param arrayDataLeft
     * @param arrayDataRight
     * @return {boolean}
     */
    static isEqual(arrayDataLeft: any[], arrayDataRight: any[]): boolean {
        /**
         * 如果2个数组对应的指针相同，那么肯定相等，同时也对比一下类型
         */
        if (arrayDataLeft === arrayDataRight) {
            return true;
        }

        if (arrayDataLeft.length !== arrayDataRight.length) {
            return false;
        }

        for (const i in arrayDataLeft) {
            /**
             * 只要出现一次不相等，那么2个数组就不相等
             */
            if (arrayDataLeft[i] !== arrayDataRight[i]) {
                return false;
            }
        }

        /**
         * for循环完成，没有出现不相等的情况，那么2个数组相等
         */
        return true;
    }

    // /**
    //  * 判断数组的类型(ArrayTypes值之一:索引数组、关联数组、混合数组)
    //  * @param arrayData
    //  * @returns {string}
    //  */
    // static getArrayType(arrayData: any[]): string {
    //     if (ArrayHelper.isIndexArray(arrayData)) {
    //         return ArrayHelper.ArrayTypes.index;
    //     }
    //
    //     if (ArrayHelper.isAssociationArray(arrayData)) {
    //         return ArrayHelper.ArrayTypes.association;
    //     }
    //
    //     if (ArrayHelper.isHybridArray(arrayData)) {
    //         return ArrayHelper.ArrayTypes.hybrid;
    //     }
    //
    //     return ArrayHelper.ArrayTypes.non;
    // }

    /**
     * 用于元素为对象的数组，按照对象的某个属性进行排序
     * 其中propName是数组元素的这个对象的属性名称,例如下面的"age".
     * 例子：
     * var arr = [{name: "zlw", age: "24"}, {name: "wlz", age: "5"}];
     * arrayHelper.sortObjectPropertyValue(arr,"age","DESC");
     */
    static sortByPropertyValue(arrayData: any[], propName: any, sortOrder = "ASC") {
        return arrayData.sort(ArrayHelper._sortByPropertyValue(propName, sortOrder));
    }

    static _sortByPropertyValue(propName: string | number, sortOrder = "ASC") {
        return function (obj1: { [x: string]: any; }, obj2: { [x: string]: any; }) {
            let val1 = obj1[propName];
            let val2 = obj2[propName];
            if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                val1 = Number(val1);
                val2 = Number(val2);
            }

            return ArrayHelper._sortTwoValue(val1, val2, sortOrder);
        };
    }

    /**
     * 用于元素为对象的数组，按照对象的某个属性（通常这个属性为字符串类型）的长度进行排序
     * 其中propName是数组元素的这个对象的属性名称,例如下面的"name".
     * 例子：
     * var arr = [{name: "zlw", age: "24"}, {name: "wl", age: "5"}];
     * arrayHelper.sortObjectPropertyLength(arr,"name","DESC");
     */
    static sortByPropertyLength(arrayData: any[], propName: any, sortOrder = "ASC") {
        return arrayData.sort(ArrayHelper._sortByPropertyLength(propName, sortOrder));
    }

    static _sortByPropertyLength(propName: string | number, sortOrder = "ASC") {
        return function (obj1: { [x: string]: { toString: () => { (): any; new(): any; length: any; }; }; }, obj2: {
            [x: string]: { toString: () => { (): any; new(): any; length: any; }; };
        }) {
            const val1 = obj1[propName].toString().length;
            const val2 = obj2[propName].toString().length;

            return ArrayHelper._sortTwoValue(val1, val2, sortOrder);
        };
    }

    static _sortTwoValue(val1: number, val2: number, sortOrder = "ASC") {
        let result;
        if (val1 < val2) {
            result = -1;
        } else if (val1 > val2) {
            result = 1;
        } else {
            result = 0;
        }

        sortOrder = sortOrder.toLowerCase();
        if (sortOrder === "desc") {
            result = 0 - result;
        }

        return result;
    }

    /**
     * 用于元素为对象的索引数组(不能是关联数组)，将两个数组中元素对象的属性进行顺次合并.
     * 1、以主数组为基准,如果后面的各个数组长度比主数组长,那么舍弃长的部分;
     * (主数组arrayA和其他数组arrayB合并的时候,arrayA的长度为4,那么arrayB的第5个元素就舍弃.)
     * 以主数组为基准,如果后面的各个数组长度比主数组短，那么将后面数组二次循环填充到主数组的未匹配元素上
     * (主数组arrayA和其他数组arrayC合并的时候,arrayA的长度为4,arrayC的长度为3,就将arrayC再循环一次(将arrayC的第一个元素匹配给arrayA的第4个元素))
     * 例如：
     let arrayA = [{ 'a': 'a1', 'b': 'b1' }, { 'a': 'a2', 'b': 'b2' }, { 'a': 'a3', 'b': 'b3' }, { 'a': 'a4', 'b': 'b4' }];
     let arrayB = [{ 'm': 'm1', 'n': 'n1' }, { 'm': 'm2', 'n': 'n2' }, { 'm': 'm3', 'n': 'n3' }, { 'm': 'm4', 'n': 'n4' }, { 'm': 'm5', 'n': 'n5' }];
     let arrayC = [{ 'x': 'x1', 'y': 'y1' }, { 'x': 'x2', 'y': 'y2' }, { 'x': 'x3', 'y': 'y3' }];

     let result1 = ***.mergeElementProperty(arrayA, arrayB);
     app.log(result1);
     let result2 = ***.mergeElementProperty(arrayA, arrayC);
     app.log(result2);

     ────────────────────────
     result1的结果为：
     [
     {
     "a": "a1",
     "b": "b1",
     "m": "m1",
     "n": "n1",
     },
     {
     "a": "a2",
     "b": "b2",
     "m": "m2",
     "n": "n2",
     },
     {
     "a": "a3",
     "b": "b3",
     "m": "m3",
     "n": "n3",
     },
     {
     "a": "a4",
     "b": "b4",
     "m": "m4",
     "n": "n4",
     },
     ];

     result2的结果为：
     [
     {
     "a": "a1",
     "b": "b1",
     "x": "x1",
     "y": "y1",
     },
     {
     "a": "a2",
     "b": "b2",
     "x": "x2",
     "y": "y2",
     },
     {
     "a": "a3",
     "b": "b3",
     "x": "x3",
     "y": "y3",
     },
     {
     "a": "a4",
     "b": "b4",
     "x": "x1",
     "y": "y1",
     },
     ]
     */
    static mergeElementProperty(mainArray: any[], ...otherArrays: any[]) {
        let result = mainArray;

        for (const currentArray of otherArrays) {
            result = ArrayHelper._mergeElementProperty(result, currentArray);
        }

        return result;
    }

    static _mergeElementProperty(mainArray: any[], secondaryArray: any[]) {
        const mainCount = ArrayHelper.getCount(mainArray);
        const secondaryCount = ArrayHelper.getCount(secondaryArray);

        const result = [];
        for (let i = 0; i < mainCount; i++) {
            let item = null;
            const index = i % secondaryCount;
            item = Object.assign(mainArray[i], secondaryArray[index]);
            result.push(item);
        }

        return result;
    }

    /**
     * 合并各个数组的元素
     * @param arrays
     * @returns []
     */
    static concat(...arrays: any[]) {
        const result = [];
        if (arrays.length > 0) {
            const arrayCount = arrays.length;
            for (let i = 0; i < arrayCount; i++) {
                const currentArray = arrays[i];

                for (const currentArrayKey in currentArray) {
                    if (currentArray.hasOwnProperty(currentArrayKey)) {
                        const tempKey = parseInt(currentArrayKey);

                        if (isNaN(tempKey)) {
                            // @ts-ignore
                            result[currentArrayKey] = currentArray[currentArrayKey];
                        } else {
                            result.push(currentArray[currentArrayKey]);
                        }
                    }
                }
            }
        }

        return result;
    }

    /**
     * 合并各个数组的元素(concat的别名)
     * @param arrays
     * @returns []
     */
    static merge(...arrays: any[]) {
        return ArrayHelper.concat(...arrays);
    }

    /**
     * 把字符串 stringData 按照给定的分隔符 separator 打散为数组
     * @param {string} stringData
     * @param {string} separator
     * @return {array}
     */
    static explode(stringData: string, separator: string = ","): string[] {
        return StringHelper.explode(stringData, separator);
    }

    /**
     * 将数组的各个元素组装为字符串（各个元素之间，置入分隔符 separator）
     * @param {array} arrayData
     * @param {string} separator
     * @returns string
     */
    static implode(arrayData: any[], separator: string = ","): string {
        return StringHelper.implode(arrayData, separator);
    }

    /**
     * 将元素添加到数组的头部
     * @param {array} arrayData
     * @param items
     * @return {number} 返回数组新的长度
     */
    static addHead(arrayData: any[], ...items: any[]): number {
        return arrayData.unshift(...items);
    }

    /**
     * 获取数组的头部元素并将其从数组内移除
     * @param  {array} arrayData
     * @return {*} 返回数组的头部元素
     */
    static removeHead(arrayData: any[]): any {
        return arrayData.shift();
    }

    /**
     * 将元素添加到数组的尾部
     * @param {array} arrayData
     * @param items
     * @return {number} 返回数组新的长度
     */
    static addTail(arrayData: any[], ...items: any[]): number {
        return arrayData.push(...items);
    }

    /**
     * 获取数组的尾部元素并将其从数组内移除
     * @param  {array} arrayData
     * @return {any}
     */
    static removeTail(arrayData: any[]): any {
        return arrayData.pop();
    }
};

