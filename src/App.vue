<script setup>
import './theme.css'
import { store } from './components/store' 

const news = store()




</script>

<template>
  <date-header />
  <news-header v-for="elem in news" :key="elem" :newsTitle="elem.h1" :newsText="elem.text" />
</template>