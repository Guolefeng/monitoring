import { createApp } from 'vue';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import Element from '@/plugins/element';
import App from './App.vue';
import router from './router';
import store from './store';
import './main.css';

const locale = require('element-plus/lib/locale');

locale.use(lang);

const app = createApp(App);
app.use(Element);
app.use(router);
app.use(store);

app.mount('#app');
