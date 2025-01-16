export class UrlHelper {
    /**
     * 获取url的基础路径
     * @param url
     */
    static getBaseUrl(url: string): string {
        const baseUrl = url.split("?")[0];
        return baseUrl;
    }

    /**
     * 获取url的查询字符串
     * @param url
     */
    static getQueryString(url: string): string {
        let queryString = url.split("?")[1];
        queryString = queryString || "";
        queryString = queryString.split("#")[0];

        return queryString;
    }

    /**
     * 获取url的查询参数对象。返回一个对象，key为参数名，value为参数值
     * @param url
     */
    static getQueryObject(url: string) {
        const queryString = this.getQueryString(url);

        if (!queryString) {
            return {};
        }

        const params = queryString.split("&");
        const result: { [key: string]: string } = {};
        for (const p of params) {
            let [key, value] = p.split("=");
            result[key] = decodeURIComponent(value || ""); // 解码参数值
        }

        return result;
    }


    /**
     * 获取url的指定参数值
     * @param url
     * @param param
     * @param defaultValue
     */
    static getQueryParam(url: string, param: string, defaultValue: string = ""): string {
        const queryString = this.getQueryString(url);

        if (!queryString) {
            return defaultValue;
        }

        const params = queryString.split("&");
        for (const p of params) {
            const [key, value] = p.split("=");
            if (key === param) {
                return decodeURIComponent(value || "");
            }
        }

        // param not found
        return defaultValue;
    }
}
