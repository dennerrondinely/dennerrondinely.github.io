import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;
// Código da diretiva
Vue.directive('scroll', {
  inserted(el, binding) {
    const f = (evt) => {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
