import { expect } from 'chai';

// +--------------------------------------------------------------------------
// |::说明·| 以下两种导入方式都可以：使用功能类型的原始定义 或者 使用项目的统一暴露接口
// +--------------------------------------------------------------------------

// import { StringHelper as sh } from '../src/data/StringHelper';
import { StringHelper as sh } from '../src/index';


describe("字符串测试", function () {
  it("单元测试方法 explode", function () {
    const whole = "qingdao city";
    const separator = " ";
    const actualData = sh.getContentBeforeSeparator(whole, separator);
    const expectData = 'qingdao';
    expect(actualData).equals(expectData);
  });
});


describe("单元测试包 packageName", function () {
  it("单元测试方法 funcName", function () {
    const actualData = 0;
    const expectData = 0;
    expect(actualData).equals(expectData);
  });
  it("单元测试方法 funcName", function () {
    const actualData = 0;
    const expectData = 0;
    expect(actualData).equals(expectData);
  });
});