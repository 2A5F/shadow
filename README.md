# Shadow

[![](https://img.shields.io/npm/v/vue-shadow-dom)](https://www.npmjs.com/package/vue-shadow-dom)
![MIT](https://img.shields.io/github/license/2a5f/shadow)
[![](https://img.shields.io/badge/Vue-3-brightgreen?style=flat&logo=vue.js)](https://v3.vuejs.org/)  
**_Shadow dom support for Vue_**

> ### !!!!!!!!!! important !!!!!!!!!!
>
> ### **[For vue2 use 1.x](https://github.com/2A5F/shadow/tree/vue2)**
>
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

  <script src="../path/to/shadow.js"></script>
  or
  <script src="../path/to/shadow.mjs" type="module"></script>

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

---

```html
<div v-shadow id="app">
  <input />
  <shadow-root>
    <div></div>
    <p>123</p>
  </shadow-root>
</div>
```

Will output

```html
▼
<div id="app">
  ▼ #shadow-root (open)
  <input />
  ▼
  <div>
    ▼ #shadow-root (open) ▼
    <div>
      <div></div>
      <p>123</p>
    </div>
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

  - `abstract`、`static`

    - type: `Boolean`
    - default: `false`

    They are unsafe

    Unless you know what you are doing, don't modify them

    They change the location of the #shadow-root  
    they should not be dynamically changed

    #### default

    ```html
    <article>
      <shadow-root><br /></shadow-root>
    </article>
    ```

    ```html
    ▼
    <article>
      ▼
      <div>
        ▼ #shadow-root (open) ▼
        <div>
          <br />
        </div>
      </div>
    </article>
    ```

    #### abstract

    It will make other external tags unavailable

    ```html
    <article>
      <shadow-root :abstract="true"><br /></shadow-root>
    </article>
    ```

    ```html
    ▼
    <article>
      ▼ #shadow-root (open) ▼
      <div>
        <br />
      </div>
    </article>
    ```

    #### static

    If you destroy the first level tag in the #shadow-root will not be restored

    ```html
    <article>
      <shadow-root :static="true"><br /></shadow-root>
    </article>
    ```

    ```html
    ▼
    <article>
      ▼
      <div>
        ▼ #shadow-root (open)
        <br />
      </div>
    </article>
    ```

  - `injectedStyle `
  - type: `String`

    Should provide css text, it will render a style tag inside the shadow root, put css style into effect.

    You can use the [to-string-loader]("https://github.com/gajus/to-string-loader") to inject css as string.

    ```html
    <article>
      <shadow-root :injected-style="'p {color:red}'"><br /></shadow-root>
    </article>
    ```

    ```html
    ▼
    <article>
      ▼
      <div>
        ▼ #shadow-root (open)
        <style type="text/css">
          p {
            color: red;
          }
        </style>
        <br />
      </div>
    </article>
    ```

  - `tag`
    ```html
    <article>
      <shadow-root :tag="section"><br /></shadow-root>
    </article>
    ```
    ```html
    ▼
    <article>
      ▼
      <section>
        ▼ #shadow-root (open) ▼
        <div>
          <br />
        </div>
      </section>
    </article>
    ```
  - `slotTag`、`slotClass`、`slotId`
    ```html
    <article>
      <shadow-root :slotTag="section" :slotClass="slotclass" :slotId="slotid"
        ><br
      /></shadow-root>
    </article>
    ```
    ```html
    ▼
    <article>
      ▼
      <div>
        ▼ #shadow-root (open) ▼
        <section class="slotclass" id="slotid">
          <br />
        </section>
      </div>
    </article>
    ```

- `v-shadow`  
  v-shadow will also cause the first level tag to be unrecoverable  
  Unless you know what you are doing, don't use

  Usage:

  ```html
  <div v-shadow></div>
  ```

---

If you need to customize

```html
<div 0>
  <div 1>
    #shadow-root (open)
      <div 2></div 2>
      <div 2>
        <div 3></div 3>
      </div 2>
      <div 2>
        <div 3>
          <div 4>...</div 4>
        </div 3>
      </div 2>
      ...
  </div 1>
</div 0>
```

just let `div 1` and `div 2` not be destroyed

---

## Develope

It's will start a hot-reload devserver, using the index.html in test folder.

```
npm i
npm run dev
```

## Build

```
npm i
npm run build
```
