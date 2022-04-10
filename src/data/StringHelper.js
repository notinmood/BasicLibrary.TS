"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
class StringHelper {
    /**
     * 获取分隔符前的字符串内容
     * @param wholeString
     * @param separator
     * @returns
     */
    static getContentBeforeSeparator(wholeString, separator) {
        const position = wholeString.indexOf(separator);
        if (position) {
            return wholeString.split(separator)[0];
        }
        else {
            return wholeString;
        }
    }
}
exports.StringHelper = StringHelper;
