<script setup>
import { ref } from 'vue'
let isOpen = ref(false)

const props = defineProps({
  msg: String
})

</script>

<template>
  <div>
    <h3>{{ msg }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">{{msg}}</p>
  </div>
</template>

<style scoped lang="sass">

</style>
