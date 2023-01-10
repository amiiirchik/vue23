<script setup>
import './theme.css'
import { store } from './components/store' 

const news = store()




</script>

<template>
  <date-header/>
  <news-header v-for="title in news" msg="{{title.text}}" ></news-header>
</template>