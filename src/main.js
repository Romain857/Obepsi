import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import Button from 'primevue/Button';
import Toolbar from 'primevue/toolbar';
import Sidebar from 'primevue/sidebar';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'  

import './assets/main.css'

const app = createApp(App)

app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('Sidebar', Sidebar);

app.use(
    createAuth0({
      domain: "dev-v1aswrmd.eu.auth0.com",
      client_id: "bow8Kx0Rg5nNBwBZoC5mJYDNvHiwNUcB",
      redirect_uri: window.location.origin
    })
  );

app.use(router)

app.use(PrimeVue);

app.mount('#app')
