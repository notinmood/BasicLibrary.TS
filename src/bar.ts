/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2024/12/15 23:02:35
 * @FilePath     : bar.ts
 * @Description  :
 * Copyright (c) 2024 by Hiland & RainyTop, All Rights Reserved.
 */
class Bar {
    static sm1(someParam: string) {
        someParam = Bar.smx() + someParam;
        return "sm1" + someParam;
    }

    static sm2 = (someParam: string) => {
        someParam = Bar.smx() + someParam;
        return "sm2" + someParam;
    }

    static smx() {
        return "smx";
    }

    cm1(someParam: string) {
        someParam = this.cmx() + someParam;
        return "cm1" + someParam;
    }

    cm2 = (someParam: string) => {
        someParam = this.cmx() + someParam;
        return "cm2" + someParam;
    }

    cmx() {
        return "cmx-";
    }
}

export {Bar};
