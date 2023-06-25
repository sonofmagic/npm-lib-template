# npm-lib-rollup-template

[![codecov](https://codecov.io/gh/sonofmagic/npm-lib-rollup-template/branch/main/graph/badge.svg?token=zn05qXYznt)](https://codecov.io/gh/sonofmagic/npm-lib-rollup-template)

本人用于编写的一个 `npm` 包的一个模板

- 使用 `rollup` 打包 (兼容 `tsc`)
- 使用 ~~`jest`~~ `vitest` 作为单元测试框架
- 使用 `eslint` 来规范代码风格，默认风格为 `standard`
- 输出 `dist` -> `cjs`,`esm` and `.d.ts`
- 使用 `semantic-release` 来发布 `npm`/`github`

## 为什么使用 `vitest` 而不是原先的 `jest`

`vitest` 开箱即用,`jest` 在同时遇到 `cjs` 和 `esm` 依赖的时候，支持很差，经常会失败，而且配置复杂，依赖的 `preset` 多，比如 `ts-jest`..

## scripts

### rename

执行 `npm run init:rename`

作用为替换 `package.json` 中默认包含的所有名称为 `npm-lib-rollup-template` 的字段

默认替换为新建代码仓库的文件夹名称！

### bin

执行 `npm run init:bin`

作用为 `package.json`  添加 `files` 和 `bin`，同时生成 `bin/{{pkg.name}}.js` 和 `src/cli.ts` 文件
