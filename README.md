# Stencil CSS URL to base64

A simple stencil plugin that allows you to embed your fonts as base64 encode url 

**Input:**  
```css
@font-face{
    font-family:'IconFont';
    src: url(./iconfont.woff) format('woff');
}
```

**Output:** 
```css
@font-face{
    font-family:'IconFont';
    src: url(data:;base64,<base64 encoded content of ./iconfont.woff>) format('woff');
}
```

## Install 

```sh
npm i @dcylabs/stencil-css-url-to-base64
```

## Usage 

```typescript 
import { Config } from '@stencil/core';
import { cssBase64URL } from '@dcylabs/stencil-css-url-to-base64';

export const config: Config = {
  plugins: [
    cssBase64URL()
  ]
};
```

*Please note that it also works alongside with sass plugin too !*


```typescript 
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { cssBase64URL } from '@dcylabs/stencil-css-url-to-base64';

export const config: Config = {
  plugins: [
    // we recommend to put sass before to avoid performance issue at build time 
    sass(),
    cssBase64URL()
  ]
};
```