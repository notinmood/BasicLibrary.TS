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

## 编译JavaScript代码
默认情况下，WebStorm 会自动编译 TypeScript 代码成为 JavaScript 代码，编译时候会使用`tsconfig.json`中的配置信息。
如果要编译指定类型的JavaScript代码，可以在WebStorm的终端中执行以下命令：
```shell
tsc -p./tsconfig.commonjs.json # 编译 commonjs 格式的 JavaScript 代码
tsc -p./tsconfig.es.json # 编译 es(ES6, ES2015等) 格式的 JavaScript 代码
```

## 类库发布流程
1. 修改 `package.json` 文件，更新版本号
2. 执行 `npm publish` 发布代码到npm平台

## 类库使用说明
1. 安装依赖：`npm install basiclibrary.ts`
2. 更新依赖：`npm update basiclibrary.ts`
3. 类库的使用(下文中的 ***Helper 表示BL类库中的某个具体功能的类)：
   1. TypeScript 项目中导入类库：`import { ***Helper } from 'basiclibrary.ts';`
   2. JavaScript(CommonJS) 项目中引入类库：`const { ***Helper } = require("basiclibrary.ts/lib/commonjs/index");`
   3. JavaScript(ES6) 项目中引入类库：`import { ***Helper } from 'basiclibrary.ts/lib/es/index';`
