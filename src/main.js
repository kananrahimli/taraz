import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseInput from './components/ui/BaseInput.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCheckBox from './components/ui/BaseCheckBox.vue'
import BaseSelect from './components/ui/BaseSelect.vue'
import BaseSelectKq from './components/ui/BaseSelectKq.vue'
import BaseSelectMark from './components/ui/BaseSelectMark.vue'
const app=createApp(App)

app.component('base-input',BaseInput)
app.component('base-button',BaseButton)
app.component('base-check-box',BaseCheckBox)
app.component('base-select',BaseSelect)
app.component('base-select-kq',BaseSelectKq)
app.component('base-select-mark',BaseSelectMark)
app.use(store).use(router).mount('#app');
