<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    <button @click="count++">
        <h1>Click me:{{ count }}</h1>
    </button>
</template>

<style>
h1 {
    color: red;
}
</style>
