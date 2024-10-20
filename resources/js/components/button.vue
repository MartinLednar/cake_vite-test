<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    <button @click="count++">Click me:{{ count }}</button>
</template>

<style scoped>
button {
    color: red;
    font-size: 25px;
}
</style>
