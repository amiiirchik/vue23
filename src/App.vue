<script setup>
import './theme.css'
import { provide } from 'vue'
import { store } from './components/store' 

const newsStore = store()
provide('newsStore', newsStore)

</script>

<template>
  <date-header />
  <news-header v-for="elem in newsStore.news" :key="elem" :newsTitle="elem.h1" :newsText="elem.text" />
</template>