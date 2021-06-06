import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseInput from './components/ui/BaseInput.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCheckBox from './components/ui/BaseCheckBox.vue'
import BaseSelect from './components/ui/BaseSelect.vue'
import BaseSelectMark from './components/ui/BaseSelectMark.vue'
import BaseTitle from './components/ui/BaseTitle.vue'
const app=createApp(App)

app.component('base-input',BaseInput)
app.component('base-button',BaseButton)
app.component('base-check-box',BaseCheckBox)
app.component('base-select',BaseSelect)
app.component('base-select-mark',BaseSelectMark)
app.component('base-title',BaseTitle)
app.use(store).use(router).mount('#app');
