import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import '@/assets/styles/app/app.scss';
import AppButton from '@/components/app/Button.vue';

const app = createApp(App);

app.component('AppButton', AppButton);

app.use(store);
app.use(router);
app.mount('#app');
