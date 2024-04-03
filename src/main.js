/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Pinia State Management
import { createPinia } from 'pinia'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app.use(pinia)
app.mount('#app')

