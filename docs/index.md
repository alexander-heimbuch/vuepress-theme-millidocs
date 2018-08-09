---
title: Overview
navigation: 1
---

# Millidocs Theme

Simple documentation theme for VuePress featuring [Milligram CSS framework](http://milligram.io/).

One of the core features is a client side search and full responsiveness.

## Installation

Install the npm package:

```bash
$ npm i vuepress-theme-millidocs --save
# or
$ yarn add vuepress-theme-millidocs
```

Adapt your vuepress config `config.js`:

```js
module.exports = {
  title: 'My page Title',
  description: 'My docs description',
  theme: 'milidocs'
}
```

## Available Layouts

This theme is made for _pages_ only and doesn't support _posts_ by default.
