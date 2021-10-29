import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './store'

import componentsUI from './components/UI'

componentsUI.forEach(component => {
  Vue.component(component.name, component);
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
