import { createApp } from 'vue'
import shadow from '../src/shadow'
import VShadowVue from './vshadow.vue'
import AppVue from './app.vue'
import NestedVue from './nested.vue'
import AbstractVue from './abstract.vue'

createApp(VShadowVue).use(shadow).mount('#vshadow')
createApp(AppVue).use(shadow).mount('#app')
createApp(NestedVue).use(shadow).mount('#nested')
createApp(AbstractVue).use(shadow).mount('#abstract')
