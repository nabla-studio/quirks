import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';
import { quirksPlugin } from '@quirks/vue';

const app = createApp(App);

import { store } from './config';

app.use(router).use(quirksPlugin, store).mount('#root');
