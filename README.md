# BasicLibrary.TS

```txt
@creator: ShanDong Xiedali
@emailto: 9727005@qq.com
@company: HiLand & RainyTop
```

企业级的 TypeScript 类库
## 项目介绍

本项目基于 TypeScript 开发，旨在提供企业级的 TypeScript 类库，帮助开发者更高效地开发 TypeScript 项目。
本项目使用 pnpm 作为包管理工具。

## 项目特点

* 基于 TypeScript 开发，提供完整的类型定义文件，方便开发者进行类型检查和代码提示。
* 提供完整的单元测试用例，确保代码质量。
* 提供完整的文档注释，帮助开发者更好地理解代码。
* 提供完整的发布流程，帮助开发者快速发布代码。


## 项目结构说明
* 文件 `.npmignore` 内记录的是不需要发布到npm平台的文件和文件夹信息
* 文件 `.eslintignore` 内记录的是不需要进行 ESLint 规则约束的文件和文件夹
* 文件 `.editorconfig` 内记录的是开发团队必须遵守的代码样式风格（不需要开发人员进行其他操作，其自动约束）

## 编译JavaScript代码
默认情况下，WebStorm 会自动编译 TypeScript 代码成为 JavaScript 代码，编译时候会使用`tsconfig.json`中的配置信息。
如果要编译指定类型的JavaScript代码，可以在WebStorm的终端中执行以下命令：
```shell
tsc -p./tsconfig.cjs.json # 编译 commonjs 格式的 JavaScript 代码
tsc -p./tsconfig.esm.json # 编译 es(ES6, ES2015等) 格式的 JavaScript 代码
//或者执行
pnpm build:cjs
pnpm build:esm
//或者执行以下命令，同时编译两者
pnpm build
```

## 类库发布流程
1. 请调用上步的方法对代码进行编译，确保编译后代码没有错误。
2. 使用命令`npm version patch`（或者手动）修改文件 `package.json` 中的版本号信息。
3. 执行 `npm publish --registry=https://registry.npmjs.org` 发布代码到npm平台。
>>> 以上工作可以使用统一的命令完成：`npm run release`或者`pnpm release`


## 类库使用说明(推荐使用pnpm代替npm)
1. 安装依赖：`pnpm install basiclibrary.ts`
2. 更新依赖：`pnpm update basiclibrary.ts`
3. 类库的使用(下文中的 ***Helper 表示BL类库中的某个具体功能的类;同时请特别注意：CommonJS格式的JavaScript文件的路径为`basiclibrary.ts/lib`;ES6格式的JavaScript文件的路径为`basiclibrary.ts/dist)`：
   1. TypeScript 项目中导入类库：`import { ***Helper } from 'basiclibrary.ts';`
   2. JavaScript(CommonJS) 项目中引入类库：`const { ***Helper } = require("basiclibrary.ts/lib/index");`
   3. JavaScript(ES6) 项目中引入类库：`import { StringHelper } from 'basiclibrary.ts/dist/data/stringHelper.js';` (注意1：必选引用到具体的功能类所在的js文件，并且要带上后缀名“.js”；注意2：调用方的文件扩展名最好为“.mjs“，以支持ES6模块化”,并且要在项目或者文件夹的package.json中配置`"type": "module"`)
