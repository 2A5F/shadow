<script setup lang="ts">
import { ref } from 'vue'
import { ShadowRoot } from '../src/shadow'

const show_self = ref(true)
const show_child = ref(true)
</script>
<template>
    <div>abstract</div>
    <button @click="show_self = !show_self">Toggle self</button>
    <button @click="show_child = !show_child">Toggle child</button>
    <section>
        <shadow-root v-if="show_self" abstract>
            <p>self exist</p>
            <p v-if="show_child">child exist</p>
        </shadow-root>
    </section>
</template>
