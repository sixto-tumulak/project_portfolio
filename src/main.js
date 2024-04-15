import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './router/vuetify'
import { loadFonts } from './router/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
