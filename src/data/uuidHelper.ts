// /*
//  * @Author       : Shandong Xiedali
//  * @Mail         : 9727005@qq.com
//  * @Date         : 2024/12/25 10:34:04
//  * @FilePath     : uuidHelper.ts
//  * @Description  :
//  * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
//  */
//
//
// import {StringHelper} from "./stringHelper";
//
// const TWOZEROZEROZEROYEAR = 946656000; // 表示1970年1月1日到2000年1月1日间总的秒数
//
// export class UUIDHelper {
//     /**
//      * 空值guid
//      * @param isBracket 是否在guid两端加入括号
//      * @return string
//      */
//     public static empty(isBracket: boolean = false): string {
//         let guid = "00000000-0000-0000-0000-000000000000";
//
//         if (isBracket) {
//             guid = `{${guid}}`;
//         }
//
//         return guid;
//     }
//
//     /**
//      * 生成新的guid
//      * @param isBracket 是否在guid两端加入括号
//      * @return string
//      */
//     public static create(isBracket: boolean = false): string {
//         const totalMilliseconds = ((Date.now() / 1000 - TWOZEROZEROZEROYEAR) * 1000 + GuidHelper.getCurrentMilliSecond()).toString();
//         const timespanString = totalMilliseconds.replace(".", "");
//         let totalMillisecondsHex = parseInt(timespanString, 10).toString(16);
//
//         // 左侧通过添加 0 补齐 11 位
//         totalMillisecondsHex = totalMillisecondsHex.padStart(11, "0");
//
//         const charID = GuidHelper.md5(GuidHelper.uniqid(true));
//         totalMillisecondsHex = (totalMillisecondsHex + charID.substring(0, 21)).toUpperCase();
//
//         const hyphen = "-";
//         let guid = totalMillisecondsHex.substring(0, 8) + hyphen
//                    + totalMillisecondsHex.substring(8, 12) + hyphen
//                    + totalMillisecondsHex.substring(12, 16) + hyphen
//                    + totalMillisecondsHex.substring(16, 20) + hyphen
//                    + totalMillisecondsHex.substring(20);
//
//         if (isBracket) {
//             guid = `{${guid}}`;
//         }
//
//         return guid;
//     }
//
//     /**
//      * 清除guid内部的分隔符“-”
//      * @param guidWithHyphen 带有分隔符 “-” 的 guid 字符串
//      * @return string 清除后不带有分隔符“-”的guid字符串
//      */
//     public static cleanHyphen(guidWithHyphen: string): string {
//         const hyphen = "-";
//         return guidWithHyphen.replace(new RegExp(hyphen, "g"), "");
//     }
//
//     /**
//      * 对没有分隔符的guid字符串，通过分隔符“-”进行格式化
//      * @param guidWithoutHyphen 没有分隔符的guid字符串
//      * @return string 通过分隔符“-”格式化的guid字符串
//      */
//     public static addonHyphen(guidWithoutHyphen: string): string {
//         guidWithoutHyphen = StringHelper.getStringAfterSeparator(guidWithoutHyphen, "{");
//         guidWithoutHyphen = StringHelper.getStringBeforeSeparator(guidWithoutHyphen, "}");
//
//         const hyphen = "-";
//         return guidWithoutHyphen.substring(0, 8) + hyphen
//                + guidWithoutHyphen.substring(8, 12) + hyphen
//                + guidWithoutHyphen.substring(12, 16) + hyphen
//                + guidWithoutHyphen.substring(16, 20) + hyphen
//                + guidWithoutHyphen.substring(20);
//     }
//
//     /**
//      * 判断一个字符串是否为guid格式
//      * @param data
//      * @return boolean
//      */
//     public static determine(data: string): boolean {
//         data = StringHelper.getStringAfterSeparator(data, "{");
//         data = StringHelper.getStringBeforeSeparator(data, "}");
//         const pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
//         return pattern.test(data);
//     }
//
//     private static getCurrentMilliSecond(): number {
//         return Date.now() % 1000;
//     }
//
//     private static md5(input: string): string {
//         // Implement md5 function or use a library like crypto-js
//         return ""; // Placeholder
//     }
//
//     private static uniqid(prefix: string = "", moreEntropy: boolean = false): string {
//         // Implement uniqid function similar to PHP's uniqid
//         return ""; // Placeholder
//     }
//
//     // private static getStringAfterSeparator(input: string, separator: string): string {
//     //     const index = input.indexOf(separator);
//     //     return index !== -1 ? input.substring(index + 1) : input;
//     // }
//     //
//     // private static getStringBeforeSeparator(input: string, separator: string): string {
//     //     const index = input.indexOf(separator);
//     //     return index !== -1 ? input.substring(0, index) : input;
//     // }
// }
//
