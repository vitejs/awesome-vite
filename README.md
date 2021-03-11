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
    - [Vue 2](#vue-2)
    - [React](#react)
- [Plugins](#plugins)
  - [Framework-agnostic Plugins](#framework-agnostic-plugins)
    - [Integrations](#integrations)
    - [Loaders](#loaders)
    - [Bundling](#bundling)
    - [Transformers](#transformers)
    - [Helpers](#helpers)
  - [Vue](#vue)
    - [Integrations](#integrations-1)
    - [Routing](#routing)
    - [Loaders](#loaders-1)
    - [SSR / SSG](#ssr--ssg)
    - [Ecosystem](#ecosystem)
    - [Helpers](#helpers-1)
    - [Bundling](#bundling-1)
  - [React](#react-1)
    - [Official](#official)
    - [Loaders](#loaders-2)
    - [Framework](#framework)
  - [Solid](#solid)
    - [Integrations](#integrations-2)
  - [Rollup Plugins](#rollup-plugins)
    - [Included in Vite](#included-in-vite)
    - [Covered by default in Vite](#covered-by-default-in-vite)
    - [Compatible with Vite](#compatible-with-vite)
    - [Community](#community)
- [Integrations with Backends](#integrations-with-backends)
  - [Ruby on Rails](#ruby-on-rails)
- [Migrations](#migrations)
  - [Vue CLI](#vue-cli)
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
- [vite-wind](https://github.com/boussadjra/vite-wind) - Boilerplate with Tailwind CSS, TypeScript, css-pro-layout, 9+ components and dark mode support.

#### Vue 2

- [vite-vue2-windicss-starter](https://github.com/lstoeferle/vite-vue2-windicss-starter) - Vue 2, Vue Router, Composition API, VueUse, Windi CSS and TypeScript.
#### React

- [vite-reactts-electron-starter](https://github.com/lTimeless/vite-reactts-electron-starter) - React, TailwindCSS, TypeScript and Electron.
- [vite-reactts-chakra-starter](https://github.com/Dieman89/vite-reactts-chakra-starter) - React, Typescript, Chakra, Cypress.

## Plugins

### Framework-agnostic Plugins

#### Integrations

- [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa) - Zero-config PWA.
- [vite-plugin-purge-icons](https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons) - Bundle icons on demand by PurgeIcons.
- [vite-eslint](https://github.com/ehutch79/vite-eslint) - Allow ESLint to work with bundling and dev server.
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss) - Windi CSS integration.
- [vite-plugin-node](https://github.com/axe-me/vite-plugin-node) - Integration with Node.js backend servers.
- [vite-plugin-cesium](https://github.com/nshen/vite-plugin-cesium) - Integration with Cesium library.
- [vite-plugin-mpa](https://github.com/IndexXuan/vite-plugin-mpa) - Out-of-box multi-page application (MPA) integration.
- [vite-plugin-svg-icons](https://github.com/anncwb/vite-plugin-svg-icons) - Fast creating SVG sprites.

#### Loaders

- [vite-plugin-rsw](https://github.com/lencx/vite-plugin-rsw) - Load rust-compiled (wasm-pack) WebAssembly packages.
- [vite-plugin-fonts](https://github.com/stafyniaksacha/vite-plugin-fonts) - Webfont loader.
- [vite-imagetools](https://github.com/JonasKruckenberg/vite-imagetools) - Load and transform images using url query parameters.

#### Bundling

- [vite-plugin-compress](https://github.com/alloc/vite-plugin-compress) - Compress your bundle + assets.
- [vite-plugin-imagemin](https://github.com/anncwb/vite-plugin-imagemin) - Compress image assets.
- [vite-plugin-importer](https://github.com/ajuner/vite-plugin-importer) - Integration for babel-plugin-import.
- [vite-plugin-banner](https://github.com/chengpeiquan/vite-plugin-banner) - Adds a banner to the top of each generated chunk.
- [vite-plugin-compression](https://github.com/anncwb/vite-plugin-compression) - Use gzip or brotli to compress resources.

#### Transformers

- [vite-plugin-html](https://github.com/anncwb/vite-plugin-html) - Plugin to minimize and use ejs template syntax in `index.html`.
- [vite-plugin-ts-nameof](https://github.com/Shinigami92/vite-plugin-ts-nameof) - Ability to resolve [nameof](https://github.com/dsherret/ts-nameof) in TypeScript.
- [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars) - Process HTML files with Handlebars.

#### Helpers

- [vite-tsconfig-paths](https://github.com/aleclarson/vite-tsconfig-paths) - Support for TypeScript's path mapping.
- [vite-plugin-faker](https://github.com/vue-toys/vite-plugin-faker) - Use TypeScript compiler to generate mock data.
- [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) - Introduces component library styles on demand.
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock) - Mock plugin for development and production.
- [vite-plugin-mocker](https://github.com/minjs1cn/vite-plugin-mocker) - Mocker server.
- [vite-plugin-theme](https://github.com/anncwb/vite-plugin-theme) - Dynamically changing the theme color.
- [vite-plugin-test](https://github.com/aelbore/vite-plugin-test) - Headless testing your component.
- [vite-aliases](https://github.com/subwaytime/vite-aliases) - Alias auto-generation based on project structure.

<hr>

### Vue

[v23]: https://img.shields.io/badge/-2%2F3-3C8171
[v2]: https://img.shields.io/badge/-v2-42b883
[v3]: https://img.shields.io/badge/-v3-35495e

In this section, we use badges to indicate the targeted Vue version for each plugin.

![v2] for Vue 2 only, ![v3] for Vue 3 only, and ![v23] for plugins that compatible with both versions.

<!--lint disable awesome-list-item-->

#### Integrations

- ![v3] [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue) - Official Vue 3 support.
- ![v2] [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2) - Vue 2 integration.

#### Routing

- ![v23] [vite-plugin-voie](https://github.com/vamplate/vite-plugin-voie) - File system based routing.
- ![v23] [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) - File system based route generator.

#### Loaders

- ![v23] [vite-plugin-md](https://github.com/antfu/vite-plugin-md) - Markdown as Vue components / Vue components in Markdown.
- ![v23] [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons) - Access thousands of icons as Vue components.
- ![v3] [vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc) - Markdown Code block as Vue Preview components.
- ![v3] [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - Load SVG files as Vue components.

#### SSR / SSG

- ![v3] [vite-ssg](https://github.com/antfu/vite-ssg) - Server-side generation.
- ![v3] [vite-ssr](https://github.com/frandiox/vite-ssr) - Server-side rendering.
- ![v3] [vitedge](https://github.com/frandiox/vitedge) - Edge-side rendering with fullstack utilities.

#### Ecosystem

- ![v3] [vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) - Integration for Vue I18n.
- ![v3] [vite-plugin-i18n-resources](https://github.com/fvena/vite-plugin-i18n-resources) - Load i18n translation message files.

#### Helpers

- ![v23] [vite-plugin-components](https://github.com/antfu/vite-plugin-components) - On-demand components auto-importing.

#### Bundling

- ![v3] [vite-plugin-multi-device](https://github.com/SasanFarrokh/vite-plugin-multi-device) - Outputs for different devices.

<!--lint enable awesome-list-item-->

<hr>

### React

#### Official

- [@vitejs/plugin-react-refresh](https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh) - Official React Refresh support.

#### Loaders

- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) - Transform SVGs into React components.
- [vite-plugin-mdx](https://github.com/brillout/vite-plugin-mdx) - Use MDX for your Vite app, with support for MDX v1, MDX v2, HMR, and SSR.

#### Framework

- [vite-plugin-react-pages](https://github.com/vitejs/vite-plugin-react-pages) - A Vite framework for building React app.

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

## Migrations

### Vue CLI

- [vue-cli-plugin-vite](https://github.com/IndexXuan/vue-cli-plugin-vite) - Use Vite on Vue CLI with minimize codebase modifications.

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
