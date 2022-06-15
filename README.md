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
  ```html
  <shadow-root :adopted-style-sheets="[adoptedStyleSheets]">
    <p>test adoptedStyleSheets</p>
  </shadow-root>
  ```
  result: ![p is green](./p_is_green.png)

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
