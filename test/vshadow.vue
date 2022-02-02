<script setup lang="ts">
import { ref } from 'vue'

const show_self = ref(true)
const show_child = ref(true)
</script>
<template>
    <div>v-shadow</div>
    <button @click="show_self = !show_self">Toggle self</button>
    <button @click="show_child = !show_child">Toggle child</button>
    <section v-shadow v-if="show_self">
        <article>
            <p>self exist</p>
            <p v-if="show_child">child exist</p>
        </article>
    </section>
</template>
