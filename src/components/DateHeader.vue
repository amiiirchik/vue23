<script setup>
let now = new Date().toLocaleDateString()

</script>

<template>
<div class="pt-1">
    <p>Статья открыта: {{ count }}</p>
    <p>Просмотров: {{ readCount }}</p>
    <h1>Актуальные новости {{ now }}</h1>
    <hr>
</div>
</template>

<style scoped lang="sass">

</style>
