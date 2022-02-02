<script setup lang="ts">
import { ref } from 'vue'
import { ShadowRoot } from '../src/shadow'

const show_self = ref(true)
const show_child = ref(true)
</script>
<template>
    <div>nested</div>
    <button @click="show_self = !show_self">Toggle self</button>
    <button @click="show_child = !show_child">Toggle child</button>
    <shadow-root class="foo">
        <shadow-root class="bar" v-if="show_self">
            <p>self exist</p>
            <p v-if="show_child">child exist</p>
        </shadow-root>
    </shadow-root>
</template>
