import { createApp } from 'vue'
import App from './App.vue'
import NewsHeader from './components/NewsHeader.vue'
import DateHeader from './components/DateHeader.vue'

createApp(App)
.component('news-header', NewsHeader)
.component('date-header', DateHeader)
.mount('#app')