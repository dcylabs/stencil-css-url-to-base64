

## Works also with sass plugin 

## Usage 

```typescript 
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { cssBase64URL } from '@dcylabs/stencil-css-url-to-base64';

export const config: Config = {
  plugins: [
    cssBase64URL()
  ]
};
```