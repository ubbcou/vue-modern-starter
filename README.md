![Node.js CI](https://github.com/thelinuxlich/react-modern-starter/workflows/Node.js%20CI/badge.svg)&nbsp;&nbsp;&nbsp;<a href="https://app.netlify.com/start/deploy?repository=https://github.com/ubbcou/vue-modern-starter"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
# vue-modern-starter (Vue 3 + Typescript + Vite + vuex)

- [Vue](https://reactjs.org/docs/getting-started.html) for rendering
- [Vue Router](https://next.router.vuejs.org/) for routing
- [Vuex](https://next.vuex.vuejs.org/) for state management
- [WindyCSS](https://github.com/voorjaar/windicss/wiki/Introduction) for easy bundling TailwindCSS into the stack
- [Vite](https://vitejs.dev/guide/) for bundling
- [lint-staged](https://github.com/okonet/lint-staged) with precommit task for linting
- Github Actions CI preconfigured for running lint
- SSR/SSG builtin

## Setup

- Clone to local
- cd react-modern-starter
- yarn

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette 5. Search and run "Select TypeScript version" -> "Use workspace version"
