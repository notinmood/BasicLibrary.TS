# BasicLibrary.TS

```shell
@creator: ShanDong Xiedali
@emailto: 9727005@qq.com
@company: HiLand & RainyTop
```

企业级的 TypeScript 类库


## 项目结构说明
* 文件 `.npmignore` 内记录的是不需要发布到npm平台的文件和文件夹信息
* 文件 `.eslintignore` 内记录的是不需要进行 ESLint 规则约束的文件和文件夹
* 文件 `.editorconfig` 内记录的是开发团队必须遵守的代码样式风格（不需要开发人员进行其他操作，其自动约束）

## 类库发布流程
1. 修改 `package.json` 文件，更新版本号
2. 执行 `npm publish` 发布代码到npm平台

## 类库使用说明
1. 安装依赖：`npm install basiclibrary.ts`
2. 导入类库：`import { BasicLibrary } from 'basiclibrary.ts';`
