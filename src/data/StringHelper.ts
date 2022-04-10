export class StringHelper {
    /**
     * 获取分隔符前的字符串内容
     * @param wholeString 
     * @param separator 
     * @returns 
     */
    static getContentBeforeSeparator(wholeString: string, separator: string) {
        const position = wholeString.indexOf(separator);
        if (position) {
            return wholeString.split(separator)[0];
        } else {
            return wholeString;
        }
    }
}