import Vue from 'vue';
import filterEnumText from './enum-to-text';

// 注册全局过滤器
Vue.filter('filterEnumText', filterEnumText);
