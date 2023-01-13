<script setup>
import { inject } from 'vue'
const store = inject('newsStore')

defineProps({
  newsTitle: String,
  newsText: String
})

</script>

<template>
  <div class="card">
    <h3>{{ newsTitle }}</h3>
    <button class="btn" @click="store.openBtnNews">{{store.isOpen.value ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="store.isOpen.value ">{{ newsText }}</p>
    <button v-if="store.isOpen.value " class="btn" @click="store.redBtnNews" >{{store.wasRead.value ? 'Не прочитано' : 'Прочитано'}}</button>
  </div>
</template>
