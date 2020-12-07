import _isNil from 'lodash/isNil';
import _has from 'lodash/has';
import enums from '@/utils/enums';

/**
 * 通过value获取到对应的枚举text
 * @param {any}     value 枚举value
 * @param {string}  key   枚举key
 */
export const filterEnumText = (value, key) => {
  if (_has(enums, key)) {
    const cur = enums[key].find((item) => {
      if (!_isNil(value)) {
        return item.value.toString() === value.toString();
      }
      return false;
    });
    if (cur) {
      return cur.text;
    }
  }
  return '';
};
