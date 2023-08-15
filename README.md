<a href="#installation" width="100%">
<img src="banner.svg" alt="Title banner"/>
</a>

## PostCSS Blend Colors Plugin

![npm](https://img.shields.io/npm/v/postcss-blend-colors)
![npm](https://img.shields.io/npm/dt/postcss-blend-colors)
![GitHub](https://img.shields.io/github/license/designbycode/postcss-blend-colors)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/postcss-blend-colors)
[![Test](https://github.com/DesignByCode/postcss-color-mix/actions/workflows/test.yaml/badge.svg)](https://github.com/DesignByCode/postcss-color-mix/actions/workflows/test.yaml)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/postcss-color-mix?style=social)](https://github.com/DesignByCode/postcss-color-mix/stargazers)
[![HitCount](https://hits.dwyl.com/designbycode/postcss-color-mix.svg?style=flat)](http://hits.dwyl.com/designbycode/postcss-color-mix)

[![NPM](https://nodei.co/npm/@designbycode/postcss-color-mix.png)](https://nodei.co/npm/@designbycode/postcss-color-mix/)

The PostCSS Blend Colors plugin is designed to simplify the process of blending colors within CSS declarations. It utilizes the chroma-js library to perform color blending operations, allowing developers to define custom color blends
using a mix() function in their stylesheets.

## 📇 Table of Contents

* [Motivation](#motivation)
* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [How to setup](#how-to-setup)
    * [In postcss.config.js](#in-postcssconfigjs)
    * [In css](#in-css)
    * [Converted output](#converted-output)
* [Contributing](#contributing)
    * [Contributors](#contributors)
* [License](#license)
* [Author](#author)

## Motivation

The motivation behind this plugin is to provide a seamless way for web developers to incorporate custom color blending effects into their stylesheets. While CSS already supports basic color blending modes, the mix() function allows
developers to define their own blending ratios and apply them to various color formats. This flexibility enables designers to create unique and visually appealing color transitions that go beyond the default CSS blending options.

## Installation

To use this plugin, you need to have Tailwind CSS installed in your project. If you haven't installed Tailwind CSS yet, follow these steps:

#### Using pnpm

```bash
pnpm add @designbycode/postcss-color-mix
```

#### Using npm

```bash
npm install @designbycode/postcss-color-mix
```

#### Using yarn

```bash
yarn add @designbycode/postcss-color-mix
```

## How to setup

### In postcss.config.js

```javascript
module.exports = {
    plugins: {
        "postcss-blend-colors": {}
    }
}
```

### In css

```css
body {
    background: mix('blue', 'red', 0.5);
}
```

### Converted output

```css
body {
    background: #800080;
}
```

## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue on the GitHub repository.

### Contributors

<a href="https://github.com/DesignByCode/postcss-color-mix/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DesignByCode/postcss-color-mix" />
</a>

## License

This project is licensed under the [MIT](LICENCE) License - see the [LICENSE](LICENCE) file for details.

## Author

<div>
<img  align="left" style="box-shadow:3px 3px 3px rgba(0,0,0,75);border-radius:1rem;border:solid 2px rgba(255,225,225,.25)" src="https://github.com/designbycode.png?size=130" alt="Claude Myburgh">
</div>
<h2 style="margin-top:0">Claude Myburgh</h2><ul style="padding-left:0;margin-top:-.63rem;list-style:none"><li>Github:<a href="https://github.com/designbycode"> @designbycode</a></li><li>Npm:<a href="https://www.npmjs.
com/~designbycode_"> @designbycode_</a></li></ul>

[//]: # ()

[//]: # (## Acknowledgments)

[//]: # ()

[//]: # (- This plugin is inspired by the needs of web developers using Tailwind CSS.)

[//]: # (- Special thanks to the Tailwind CSS team for creating such an amazing framework.)

