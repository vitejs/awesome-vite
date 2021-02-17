<!--lint disable awesome-heading awesome-github awesome-toc double-link-->

<p align="center">
  <br>
  <img width="400" src="./assets/logo.svg" alt="logo of awesome-vite repository">
  <br>
  <br>
</p>

<h2 align='center'>Awesome Vite.js</h2>

<p align='center'>
A curated list of awesome things related to <a href='https://github.com/vitejs/vite'>Vite.js</a>
<br><br>

<a href='https://github.com/sindresorhus/awesome'>
<img src='https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg' alt='Awesome'>
</a>
</p>

<!--lint ignore-->
> **This awesome list is for Vite 2.x and onward. [Vite 1.x's list](./README.legacy.md) is archived.**


## Table of Contents

<!--lint disable awesome-list-item-->

<!-- toc -->

- [Resources](#resources)
  - [Official Resources](#official-resources)
- [Get Started](#get-started)
  - [Templates](#templates)
    - [Vue 3](#vue-3)
    - [React](#react)
- [Plugins](#plugins)
  - [Framework-agnostic Plugins](#framework-agnostic-plugins)
    - [Integrations](#integrations)
    - [Loaders](#loaders)
    - [Resolvers](#resolvers)
    - [Helpers](#helpers)
    - [Bundling](#bundling)
  - [Vue 3](#vue-3-1)
    - [Official](#official)
    - [Routing](#routing)
    - [Loaders](#loaders-1)
    - [SSR / SSG](#ssr--ssg)
    - [Integrations](#integrations-1)
    - [Helpers](#helpers-1)
    - [Bundling](#bundling-1)
  - [Vue 2](#vue-2)
    - [Integrations](#integrations-2)
  - [React](#react-1)
    - [Official](#official-1)
    - [Loaders](#loaders-2)
    - [Framework](#framework)
  - [Solid](#solid)
    - [Integrations](#integrations-3)
  - [Rollup Plugins](#rollup-plugins)
    - [Included in Vite](#included-in-vite)
    - [Compatible with Vite](#compatible-with-vite)
    - [Community](#community)
- [Integrations with Backends](#integrations-with-backends)
  - [Ruby on Rails](#ruby-on-rails)
- [Projects Using Vite.js](#projects-using-vitejs)
  - [Open Source](#open-source)
  - [Apps/Websites](#appswebsites)

<!-- tocstop -->

<!--lint enable awesome-list-item-->

## Resources

### Official Resources

- [Documentation](https://vitejs.dev/)
- [GitHub Repo](https://github.com/vitejs/vite)
- [Release Notes](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)
- [Vue 3 Docs](https://v3.vuejs.org/)
- [Awesome Vue](https://github.com/vuejs/awesome-vue)
- [Migration from v1](https://vitejs.dev/guide/migration.html)

<!--### Tutorials-->

## Get Started

- [@vite/create-app](https://github.com/vitejs/vite/tree/main/packages/create-app) - Scaffolding Your First Vite Project.

### Templates

#### Vue 3

- [Vitesse](https://github.com/antfu/vitesse) - Opinionated starter template.
- [vite-vue3-tailwind-starter](https://github.com/web2033/vite-vue3-tailwind-starter) - Vue 3, Vue Router and Tailwind CSS.
- [vite-ts-tailwind-starter](https://github.com/Uninen/vite-ts-tailwind-starter) - TypeScript, Tailwind CSS, Cypress.io e2e tests + CI.
- [vite-electron-quick](https://github.com/MangoTsing/vite-electron-quick) - Starter template with Vue 3, TypeScript and Electron 11.
- [vite-electron-builder](https://github.com/cawa-93/vite-electron-builder/) - Electron apps using Vite for both back and front-end, with automatic releases.
- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin) - Background management template based on Vue3, Ant-Design-Vue, TypeScript.
- [electron-vue-next](https://github.com/ci010/electron-vue-next) - Vue 3 and Electron with VS Code debug and GitHub release process out-of-box.

#### React

- [vite-reactts-electron-starter](https://github.com/lTimeless/vite-reactts-electron-starter) - React, TailwindCSS, TypeScript and Electron.

## Plugins

### Framework-agnostic Plugins

#### Integrations

- [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa) - Zero-config PWA.
- [vite-plugin-purge-icons](https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons) - Bundle icons on demand by PurgeIcons.
- [vite-eslint](https://github.com/ehutch79/vite-eslint) - Allow ESLint to work with bundling and dev server.
- [vite-plugin-html](https://github.com/anncwb/vite-plugin-html) - Plugin to minimize and use ejs template syntax in `index.html`.

#### Loaders

- [vite-plugin-rsw](https://github.com/lencx/vite-plugin-rsw) - Load rust-compiled (wasm-pack) WebAssembly packages.
- [vite-plugin-fonts](https://github.com/stafyniaksacha/vite-plugin-fonts) - Webfont loader.
- [vite-imagetools](https://github.com/JonasKruckenberg/vite-imagetools) - Load and transform images using url query parameters.

#### Resolvers

- [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) - Support for TypeScript's path mapping.

#### Helpers

- [vite-plugin-faker](https://github.com/vue-toys/vite-plugin-faker) - Use TypeScript compiler to generate mock data.
- [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) - Introduces component library styles on demand.
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - Mock plugin for development and production.
- [vite-plugin-mocker](https://github.com/minjs1cn/vite-plugin-mocker) - Mocker server.

#### Bundling

- [vite-plugin-compress](https://github.com/alloc/vite-plugin-compress) - Compress your bundle + assets.
- [vite-plugin-imagemin](https://github.com/anncwb/vite-plugin-imagemin) - Compress image assets.

<hr>

### Vue 3

#### Official

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue) - Official Vue support.

#### Routing

- [vite-plugin-voie](https://github.com/vamplate/vite-plugin-voie) - File system based routing.
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) - File system based route generator.

#### Loaders

- [vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc) - Markdown Code block as Vue Preview components.
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md) - Markdown as Vue components / Vue components in Markdown.
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - Load SVG files as Vue components.

#### SSR / SSG

- [vite-ssg](https://github.com/antfu/vite-ssg) - Server-side generation.
- [vite-ssr](https://github.com/frandiox/vite-ssr) - Server-side rendering.
- [vitedge](https://github.com/frandiox/vitedge) - Edge-side rendering with fullstack utilities.

#### Integrations

- [vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) - Integration for Vue I18n.
- [vite-plugin-i18n-resources](https://github.com/fvena/vite-plugin-i18n-resources) - Load i18n translation message files.

#### Helpers

- [vite-plugin-components](https://github.com/antfu/vite-plugin-components) - On-demand components auto-importing.

#### Bundling

- [vite-plugin-multi-device](https://github.com/SasanFarrokh/vite-plugin-multi-device) - Outputs for different devices.

<hr>

### Vue 2

#### Integrations

- [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2) - Vue 2 integration.

<hr>

### React

#### Official

- [@vitejs/plugin-react-refresh](https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh) - Official React Refresh support.

#### Loaders

- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - Transform SVGs into React components.

#### Framework

- [vite-plugin-react-pages](https://github.com/vitejs/vite-plugin-react-pages) - A Vite framework for building React app.

#### Integrations

- [@brillout/vite-plugin-mdx](https://github.com/brillout/vite-plugin-mdx) - Use MDX for your Vite app, with support for MDX v1, MDX v2, HMR, and SSR.

<hr>

### Solid

#### Integrations

- [vite-plugin-solid](https://github.com/amoutonbrady/vite-plugin-solid) - Provides JSX transformation for Solid.

<hr>

### Rollup Plugins

- [Vite Rollup Plugins](https://vite-rollup-plugins.patak.dev/) - Compatibility list for official rollup plugins.

#### Included in Vite

- [@rollup/plugin-alias](https://github.com/rollup/plugins/blob/master/packages/alias) - Define and resolve aliases for bundle dependencies.
- [@rollup/plugin-commonjs](https://github.com/rollup/plugins/blob/master/packages/commonjs) - Convert CommonJS modules to ES6.
- [@rollup/plugin-dynamic-import-vars](https://github.com/rollup/plugins/blob/master/packages/dynamic-import-vars) - Resolving dynamic imports that contain variables.
- [@rollup/plugin-json](https://github.com/rollup/plugins/blob/master/packages/json) - Convert `.json` files to ES6 modules.

#### Covered by default in Vite

- [@rollup/plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel) - Compile your files with Babel.
- [@rollup/plugin-buble](https://github.com/rollup/plugins/tree/master/packages/buble) - Compile ES2015 with buble.
- [@rollup/plugin-data-uri](https://github.com/rollup/plugins/tree/master/packages/data-uri) - Import modules from Data URIs.
- [@rollup/plugin-html](https://github.com/rollup/plugins/tree/master/packages/html) - Create HTML files to serve Rollup bundles.
- [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) - Locate and bundle third-party dependencies in node_modules.
- [@rollup/plugin-sucrase](https://github.com/rollup/plugins/tree/master/packages/sucrase) - Compile TypeScript, Flow, JSX, etc with Sucrase.
- [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) - Integration between Rollup and Typescript.
- [@rollup/plugin-wasm](https://github.com/rollup/plugins/tree/master/packages/wasm) - Import WebAssembly code with Rollup.
- [@rollup/plugin-url](https://github.com/rollup/plugins/tree/master/packages/url) - Import files as data-URIs or ES Modules.

#### Compatible with Vite

- [@rollup/plugin-beep](https://github.com/rollup/plugins/tree/master/packages/beep) - System beeps on errors and warnings.
- [@rollup/plugin-dsv](https://github.com/rollup/plugins/blob/master/packages/dsv) - Convert `.csv` and `.tsv` files into JavaScript modules with d3-dsv.
- [@rollup/plugin-eslint](https://github.com/rollup/plugins/blob/master/packages/eslint) - Verify entry point and all imported files with ESLint.
- [@rollup/plugin-graphql](https://github.com/rollup/plugins/blob/master/packages/graphql) - Convert .gql/.graphql files to ES6 modules.
- [@rollup/plugin-image](https://github.com/rollup/plugins/blob/master/packages/image) - Import JPG, PNG, GIF, SVG, and WebP files (needs `enforce: 'pre'`).
- [@rollup/plugin-inject](https://github.com/rollup/plugins/blob/master/packages/inject) - Scan modules for global variables and injects import statements where necessary.
- [@rollup/plugin-legacy](https://github.com/rollup/plugins/tree/master/packages/legacy) - Add export declarations to legacy non-module scripts.
- [@rollup/plugin-replace](https://github.com/rollup/plugins/tree/master/packages/replace) - Replace strings in files while bundling.
- [@rollup/plugin-strip](https://github.com/rollup/plugins/tree/master/packages/strip) - Remove debugger statements and functions from your code.
- [@rollup/plugin-virtual](https://github.com/rollup/plugins/blob/master/packages/virtual) - A Rollup plugin which loads virtual modules from memory.
- [@rollup/plugin-yaml](https://github.com/rollup/plugins/blob/master/packages/yaml) - Convert YAML files to ES6 modules.

#### Community

- Check the [Awesome Rollup list](https://github.com/rollup/awesome) for community maintained rollup plugins, and refer to the Vite docs section about [rollup plugin compatibility](https://vitejs.dev/guide/api-plugin.html#rollup-plugin-compatiblity).

## Integrations with Backends

### Ruby on Rails

- [vite-plugin-ruby](https://github.com/ElMassimo/vite_rails/tree/main/package) - Vite configuration for Ruby backends.
- [vite_rails](https://github.com/ElMassimo/vite_rails) - Manage your Rails assets with Vite.

## Projects Using Vite.js

### Open Source

- [VitePress](https://github.com/vuejs/vitepress) - Static Site Generator powered by Vite and Vue.
- [TroisJS](https://github.com/troisjs/trois) - Three.js integration with Vite and Vue 3.

### Apps/Websites

- [Icônes](https://github.com/antfu/icones) - Icon explorer with instant search.
- [Awesome CN Café](https://github.com/antfu/awesome-cn-cafe-web) - Web application for Awesome CN Café.
- [Todo Example](https://github.com/beary/vite-example) - Todo app with routing and state management.
- [Tailwind Pre-Processor](https://github.com/xiaoluoboding/tailwind-pre-processor) - An implementation of Tailwind CSS using Less / Stylus / Sass / SCSS.
- [npmview](https://github.com/pd4d10/npmview) - A web application to view npm package files.
- [Layoutit Grid](https://github.com/Leniolabs/layoutit-grid) - Interactive CSS Grid layout generator.
- [TypGame](https://github.com/rupamkairi/TypGame) - Test your typing performance.
- [aitrack.work](https://aitrack.work) - A task-based time tracker for everyday use.
- [macOS Web](https://github.com/PuruVJ/macos-web/) - macOS Desktop experience for Web.
