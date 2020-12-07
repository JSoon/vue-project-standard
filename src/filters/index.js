/**
 * 注册全局过滤器
 */

import Vue from 'vue';
import { toFixed, toThusandsSeparator } from '@/utils';
import _isNil from 'lodash/isNil';
import filterEnumText from './enum-to-text';

// 根据枚举值显示枚举文本
Vue.filter('filterEnumText', filterEnumText);
// 价格三位分节法表示
Vue.filter('filterPrice', (value, ...args) => toThusandsSeparator(value ?? 0, ...args));
// 数值定点表示
Vue.filter('filterToFixed', toFixed);
// 数字缺省
Vue.filter('filterNumber', (value) => value ?? 0);
// 文本缺省
Vue.filter('filterText', (value, nullText = '无') => {
  if (_isNil(value)) {
    return nullText;
  }
  return value;
});
