import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap

const app = createApp(App);

app.use(router);
app.mount("#app");
