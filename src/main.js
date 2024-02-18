import { createApp } from 'vue';
import App from './App.vue';
// CSS entry point
import './assets/scss/style.scss';
// JS entry point
import './assets/js/main';
// Bootstrap
import * as bootstrap from 'bootstrap';

import { router } from './router';

// Vue App
createApp(App).use(router).mount('#app');
