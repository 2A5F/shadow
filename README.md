# Shadow
**Shadow dom component for Vue**
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
<div>
  <shadow-root>
    <div></div>
    <p>123</p>
  </shadow-root>
</div>
```
Will output
```html
▼ <div>
 ▼ <div>
   ▼ #shadow-root (open)
      <div></div>
      <p>123</p>
  </div>
</div>
```
## Build
```
npm i
npm run build
```