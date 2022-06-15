# Shadow
[![](https://img.shields.io/npm/v/vue-shadow-dom)](https://www.npmjs.com/package/vue-shadow-dom)
![MIT](https://img.shields.io/github/license/2a5f/shadow)
[![](https://img.shields.io/badge/Vue-3-brightgreen?style=flat&logo=vue.js)](https://v3.vuejs.org/)  
***Shadow dom support for Vue***

> ### !!!!!!!!!! important !!!!!!!!!!
> ### **[For vue2 use 1.x](https://github.com/2A5F/shadow/tree/vue2)**  
> ```
> npm i vue-shadow-dom@1
> ```

## Usage

```
npm i vue-shadow-dom
```

---

```html
<head>
  <script src="vue.js"></script>
  <script src="../path/to/shadow.global.js"></script>
  
  <script>
    const app = Vue.createApp(...)
    app.use(shadow)
  </script>
</head>
```
or
```typescript
import shadow from 'vue-shadow-dom'

const app = Vue.createApp(...)
app.use(shadow)
```

### Files

- `dist/shadow.global.js`  
  For UMD
  ```html
  <script src="vue.js"></script>
  <script src="../path/to/shadow.global.js"></script>
  ```
- `dist/shadow.esm-browser.mjs` | `dist/shadow.esm-browser.prod.mjs`  
  For browser import, when Vue from global
  ```html
  <script src="vue.js"></script>
  <link rel="modulepreload" href="../path/to/shadow.esm-browser.mjs" />
  <script type="module">
    import shadow from '../path/to/shadow.esm-browser.mjs'
  </script>
  ```
- `dist/shadow.cdn-jsdelivr.mjs` | `shadow.cdn-jsdelivr.prod.mjs`  
  For browser import, when Vue from cdn
  ```html
  <link rel="modulepreload" href="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.runtime.esm-browser.js" />
  <link rel="modulepreload" href="shadow.cdn-jsdelivr.mjs" />
  <script type="module">
    import shadow from 'shadow.cdn-jsdelivr.mjs'
  </script>
  ```
- `dist/shadow.esm-bundler.mjs` | `dist/shadow.esm-bundler.prod.mjs`  
  For packaging tool  
  ```js
  import shadow from '../path/to/shadow.esm-bundler.mjs'
  ```
- `dist/shadow.cjs.cjs` | `dist/shadow.cjs.prod.cjs`  
  For node cjs  
  ```js
  const shadow = require('../path/to/shadow.cjs.prod.cjs') 
  ```
- `shadow.js`  
  For node cjs  
  ```js
  const shadow = require('vue-shadow-dom') 
  ```
- `shadow.mjs`  
  For node esm  
  ```js
  import shadow from 'vue-shadow-dom'
  ```

---

```html
<div v-shadow id=app>
  <input>
  <shadow-root>
    <div></div>
    <p>123</p>
  </shadow-root>
</div>
```
Will output
```html
▼ <div id="app">
 ▼ #shadow-root (open)
    <input>
  ▼ <div>
   ▼ #shadow-root (open)
      <div></div>
      <p>123</p>
    </div>
  </div>
```

## Api

- `<shadow-root>`  
Usage: 
  ```html
  <shadow-root></shadow-root>
  ```
  
  ### Props

  - `abstract`
    - type: `boolean`
    - default: `false`

    it change the location of the #shadow-root  
    it should not be dynamically changed  

    #### default

    ```html
    <article>
      <shadow-root><br></shadow-root>
    </article>
    ```
    ```html
    ▼ <article>
     ▼ <div>
      ▼ #shadow-root (open)
         <br>
      </article>
    ```

    #### abstract

    It will make other external tags unavailable
    ```html
    <article>
      <shadow-root abstract><br></shadow-root>
    </article>
    ```
    ```html
    ▼ <article>
     ▼ #shadow-root (open)
        <br>
      </article>
    ```

  - `tag`
    - type: `string`
    - default: `'div'`

    ```html
    <article>
      <shadow-root tag="section"><br></shadow-root>
    </article>
    ```
    ```html
    ▼ <article>
     ▼ <section>
      ▼ #shadow-root (open)
         <br>
       </section>
      </article>
    ```

  ### Expose

    ```typescript
    const ex = ref<ShadowRootExpose>()
    ```
    ```html
    <shadow-root ref="ex"></shadow-root>
    ```

  - `shadow_root`  
   
    - type: `ShadowRoot`  

    ```typescript
    const shadow_root: ShadowRoot = ex.shadow_root
    ```

- `shadow-style`  
  Usage:  
  
  ```html
  <shadow-style></shadow-style>
  <!-- or -->
  <ShadowRoot.Style></ShadowRoot.Style>
  ```

  Same to html `style`  

  The reason it exists is that vue SFC disabled style tag

- ~~`v-shadow`~~  
  ***Deprecated***

  Usage: 
  ```html
  <div v-shadow></div>
  ```

- Experimental `adoptedStyleSheets`

  ```js
  const adoptedStyleSheets = new CSSStyleSheet()
  adoptedStyleSheets.replace('p { color: green }')
  ```
  ```vue
  <shadow-root :adopted-style-sheets="[adoptedStyleSheets]">
    <p>test adoptedStyleSheets</p>
  </shadow-root>
  ```
  ![p is green](data:image/png;base64,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)

## Build

```
npm i
npm run build
```

### Test

```
npm run test:dev
npm run test:build
npm run test:preview
```
