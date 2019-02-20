# Shadow
***Shadow dom support for Vue***
## Usage
```
npm i vue-shadow-dom -S
```
---
```html
<head>
  <script src='vue.js'></script>

  <script src='../path/to/shadow.js'></script>
  or
  <script src='../path/to/shadow.mjs' type=module></script>
</head>
```
or
```typescript
import shadow from 'vue-shadow-dom'
Vue.use(shadow)
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
- `v-shadow`  
  Usage: 
  ```html
  <div v-shadow></div>
  ```
- `<shadow-root>`  
Usage: 
  ```html
  <shadow-root></shadow-root>
  ```
## Build
```
npm i
npm run build
```