<script setup>
import { ref } from 'vue'

let count = ref(0);
let isOpen = ref(false)

defineProps({
  newsTitle: String,
  newsText: String
})

function btnHandler(){
  if(!this.isOpen) this.count += 1 
  this.isOpen = !this.isOpen
}

</script>

<template>
  <div>
    <h3>{{ newsTitle }}</h3>
    <button class="btn" @click="btnHandler()">{{isOpen ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="isOpen">{{ newsText }}</p>
    <p>Просмотров статьи: {{ count }}</p>
  </div>
</template>

<style scoped lang="sass">

</style>
