// Babel Polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 过滤器
import '@/filters';
// 枚举
import '@/enums';

Vue.config.productionTip = false;

// babel测试代码
let a = [1, 2, 3, 4];
const b = [2, 3, 4];
a = [a, ...b];

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
