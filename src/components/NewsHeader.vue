<script setup>
import { ref } from 'vue'

let count = 0
let readCount = 0
let isOpen = ref(false)
let wasRead = ref(false)

defineProps({
  newsTitle: String,
  newsText: String
})

function openBtnHandler(){
  if(!this.isOpen){
    this.count += 1
  }  
  this.isOpen = !this.isOpen
}

function readBtnHandler(){
  if(!this.wasRead){
    this.isOpen = false
    this.readCount += 1
  }
  else{
    this.readCount -= 1
  }
  this.wasRead = !this.wasRead
}
</script>

<template>
  <div class="card">
    <h3>{{ newsTitle }}</h3>
    <button class="btn" @click="openBtnHandler()">{{isOpen ? 'Свернуть' : 'Развернуть'}}</button>
    <p v-if="isOpen">{{ newsText }}</p>
    <button v-if="isOpen" class="btn" @click="readBtnHandler()">{{wasRead ? 'Не прочитано' : 'Прочитано'}}</button>

  </div>
</template>
