import Vue from 'vue';
import TDesign from 'tdesign-vue';
import 'tdesign-vue/es/style/index.css';

import App from './App.vue';
import store from './store';
import router from './router';

import '@/style/index.less';

Vue.use(TDesign);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
