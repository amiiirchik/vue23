<script setup>
import { inject } from 'vue'
const store = inject('newsStore')


let now = new Date().toLocaleDateString()

</script>

<template>
<div class="pt-1">
    <h1>Актуальные новости {{ now }}</h1>
    <p>Прочитано новостей: {{ store.watchCount }}</p>
    <p>Просмотрено новостей: {{ store.readCount }}</p>
    <hr>
</div>
</template>

<style scoped lang="sass">

</style>
