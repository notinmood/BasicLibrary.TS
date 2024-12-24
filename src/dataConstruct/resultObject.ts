/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/24 10:14:45
 * @FilePath     : resultObject.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */


import {TypeHelper}   from "../data/typeHelper";
import {ObjectHelper} from "../data/objectHelper";


/**
 * 从服务端返回的带格式的数据
 * 属性{bool} resultType 表示反回信息的真或者假
 * 属性{string} message 返回信息的主题信息
 * 属性{object} data 返回信息的内容信息
 * 属性{object} misc 返回信息的各种其他信息，这是一个自定义对象可以任意扩展其子属性信息
 */
export class ResultObject {
    status: boolean;
    message: string;
    data: any;
    readonly misc: any;

    constructor(status = true, message = "", data = null, misc = null) {
        this.status = status;
        this.message = message;
        this.data = data;
        if (misc == null) {
            this.misc = {};
        } else {
            this.misc = misc;
        }

    }

    /**
     * 设定属性misc的各个子属性
     * @param {*} name
     * @param {*} value
     */
    setMiscItem(name: string, value: any) {
        this.misc[name] = value;
    }

    /**
     * 获取misc的各个子属性的值
     * @param {*} name
     * @param {*} defaultValue
     */
    getMiscItem(name: string, defaultValue: any = null): any {
        return ObjectHelper.getMember(this.misc, name, defaultValue);
    }

    /**
     * 将ResultObject转换成为json字符串
     * @returns {string}
     */
    stringify(): string {
        return ResultObject.stringify(this);
    }

    /**
     * 将ResultObject转换成为json字符串
     * @param resultObject
     * @returns {string}
     */
    static stringify(resultObject: ResultObject): string {
        return JSON.stringify(resultObject);
    }


    /**
     * 解析服务器返回信息为本地类型ResultObject的对象
     * @param {*} jsonData 服务器返回的json格式字符串或者json对象
     */
    static parse(jsonData: any): ResultObject | null {
        let typeInfo = TypeHelper.getType(jsonData);
        if (typeInfo === TypeHelper.ObjectTypes.string) {
            jsonData = JSON.parse(jsonData);
            typeInfo = TypeHelper.getType(jsonData);
        }

        let result = null;
        if (typeInfo === TypeHelper.ObjectTypes.object) {
            let status = ObjectHelper.getMember(jsonData, "status", false);
            let message = ObjectHelper.getMember(jsonData, "message", "");
            let data = ObjectHelper.getMember(jsonData, "data", null);
            let misc = ObjectHelper.getMember(jsonData, "misc", null);

            result = new ResultObject(status, message, data, misc);
        }

        return result;
    }
}

