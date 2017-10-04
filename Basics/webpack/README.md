# Webpack
## Implement and Explain in your own code:

### Importing Libraries
```javascript
import React from 'react';
```

#### Importing and Destructuring Libraries
```javascript
import {Component} from 'react';
```

#### Importing *
```javascript
import {fn} from 'my-lib';
console.log(fn);
```
Is the same as:
```javascript
import * as MyLib from 'my-lib';
MyLib.fn
```

### Exporting
#### Exporting Default
```javascript
export default {
  fn: ()=>('hello');
}
```

#### Exporting by key
```javascript
const fn = ()=>('hello');
export {
  fn
}
```

### Importing CSS
```javascript
import style from "./style.scss"
console.log(style.yourClassName)
```

### Our Webpack File
https://github.com/embark-studio/boilerplate