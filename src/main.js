import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jsPDF from 'jspdf';
import 'jspdf-autotable';

createApp(App).use(router).mount('#app')
