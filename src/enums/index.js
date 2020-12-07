import Vue from 'vue';
import enums from '@/utils/enums';

// 注册全局枚举对象
const $enums = {};
Object.entries(enums).forEach(([eName, eArr]) => {
  eArr.forEach((item) => {
    if (!$enums[eName]) {
      $enums[eName] = {};
    }
    $enums[eName][item.key] = item.value;
  });
});

Vue.prototype.$enums = $enums;
