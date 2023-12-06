<template>
  <div class="loading">
    <el-loading v-loading="loading"></el-loading>
  </div>
</template>

<script setup>
import { ref } from "vue";
const loading = ref(true);
</script>

<style></style>
