/**
 * 大数字计算
 */

import Big from 'big.js';

// 加法
export const plus = (...args) => {
  if (!args || !args.length) {
    return 0;
  }
  return args.reduce((acc, cur) => new Big(acc).plus(new Big(cur)));
};

// 减法
export const minus = (...args) => {
  if (!args || !args.length) {
    return 0;
  }
  return args.reduce((acc, cur) => new Big(acc).minus(new Big(cur)));
};

// 乘法
export const times = (...args) => {
  if (!args || !args.length) {
    return 0;
  }
  return args.reduce((acc, cur) => new Big(acc).times(new Big(cur)));
};

// 除法
export const div = (...args) => {
  if (!args || !args.length) {
    return 0;
  }
  return args.reduce((acc, cur) => new Big(acc).div(new Big(cur)));
};
