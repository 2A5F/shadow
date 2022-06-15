<script setup lang="ts">
import { ref, toRaw, watch } from 'vue'
import { ShadowRoot, ShadowRootExpose, ShadowStyle } from '../src/shadow'

const show_self = ref(true)
const show_child = ref(true)

const ex = ref<ShadowRootExpose>()
watch(ex, ex => console.log(ex.shadow_root))
</script>
<template>
    <div>default</div>
    <button @click="show_self = !show_self">Toggle self</button>
    <button @click="show_child = !show_child">Toggle child</button>
    <shadow-root class="foo" v-if="show_self" ref="ex">
        <shadow-style>p { color: red }</shadow-style>
        <p>self exist</p>
        <p v-if="show_child">child exist</p>
    </shadow-root>
</template>
