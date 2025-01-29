/**
 * @Author: 山东解大劦 9727005@qq.com
 * @Date: 2025-01-16 14:29:21
 * @LastEditors: 山东解大劦 9727005@qq.com
 * @LastEditTime: 2025-01-16 14:50:05
 * @FilePath: tests/http/urlHelper.test.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
import {expect, describe, it} from "vitest";
import {UrlHelper}            from "../../src/http/urlHelper";


describe("UrlHelper 类测试", () => {
    // 测试getBaseUrl方法
    it("getBaseUrl 应该返回基本URL", () => {
        // 正常情况
        expect(UrlHelper.getBaseUrl("https://example.com/page?name=fitten&age=30")).toBe("https://example.com/page");
        // 没有查询字符串的情况
        expect(UrlHelper.getBaseUrl("https://example.com/page")).toBe("https://example.com/page");
        // 只有查询字符串的情况
        expect(UrlHelper.getBaseUrl("?name=fitten&age=30")).toBe("");
        // 空字符串的情况
        expect(UrlHelper.getBaseUrl("")).toBe("");
        // 特殊字符的情况
        expect(UrlHelper.getBaseUrl("https://example.com/page?name=fitten#section1")).toBe("https://example.com/page");
    });

    // 测试getQueryString方法
    it("getQueryString 应该返回查询字符串", () => {
        // 正常情况
        expect(UrlHelper.getQueryString("https://example.com/page?name=fitten&age=30")).toBe("name=fitten&age=30");
        // 没有查询字符串的情况
        expect(UrlHelper.getQueryString("https://example.com/page")).toBe('');
        // 只有查询字符串的情况
        expect(UrlHelper.getQueryString("?name=fitten&age=30")).toBe("name=fitten&age=30");
        // 空字符串的情况
        expect(UrlHelper.getQueryString("")).toBe('');
        // 特殊字符的情况
        expect(UrlHelper.getQueryString("https://example.com/page?name=fitten#section1")).toBe("name=fitten");
    });

    // 测试getQueryObject方法
    it("getQueryObject 应该返回查询参数对象", () => {
        // 正常情况
        expect(UrlHelper.getQueryObject("https://example.com/page?name=fitten&age=30")).toEqual({
            name: "fitten",
            age : "30"
        });
        // 解码情况
        expect(UrlHelper.getQueryObject("https://example.com/page?name=%E7%94%B5%E8%84%91%E7%A7%81%E5%85%88")).toEqual({name: "电脑私先"});
        // 没有查询字符串的情况
        expect(UrlHelper.getQueryObject("https://example.com/page")).toEqual({});
        // 只有查询字符串的情况
        expect(UrlHelper.getQueryObject("?name=fitten&age=30")).toEqual({name: "fitten", age: "30"});
        // 空字符串的情况
        expect(UrlHelper.getQueryObject("")).toEqual({});
        // 特殊字符的情况
        expect(UrlHelper.getQueryObject("https://example.com/page?name=fitten#section1")).toEqual({name: "fitten"});
    });

    // 测试getQueryParam方法
    it("getQueryParam 应该返回指定查询参数的值", () => {
        // 正常情况
        expect(UrlHelper.getQueryParam("https://example.com/page?name=fitten&age=30", "name")).toBe("fitten");
        // 参数不存在的情况
        expect(UrlHelper.getQueryParam("https://example.com/page?name=fitten&age=30", "address")).toBe("");
        // 默认值的情况
        expect(UrlHelper.getQueryParam("https://example.com/page?name=fitten&age=30", "address", "unknown")).toBe("unknown");
        // 没有查询字符串的情况
        expect(UrlHelper.getQueryParam("https://example.com/page", "name")).toBe("");
        // 只有查询字符串的情况
        expect(UrlHelper.getQueryParam("?name=fitten&age=30", "name")).toBe("fitten");
        // 空字符串的情况
        expect(UrlHelper.getQueryParam("", "name")).toBe("");
        // 特殊字符的情况
        expect(UrlHelper.getQueryParam("https://example.com/page?name=%E7%94%B5%E8%84%99%E7%A7%81%E5%85%88", "name")).toBe("电脙私先");
    });
});



