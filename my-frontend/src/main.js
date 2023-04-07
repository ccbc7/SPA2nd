import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // ここで'./router'モジュールをインポート

createApp(App).use(router).mount('#app'); // router を適用
