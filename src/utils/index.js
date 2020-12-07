/**
 * 数值定点表示法
 * @example
 * toFixed(1) => '1'
 * toFixed(123.456) => '123.46'
 * toFixed(0.004) => '0'
 */
export function toFixed(value = 0, fixed = 2) {
  // 是否存在小数
  const hasDecimal = value.toString().indexOf('.');
  // 小数位数
  const decimalNum = value.toString().split('.')[1]?.length || 0;
  // 补零的小数位
  const zeroFillNum = fixed > decimalNum ? fixed - decimalNum : 0;
  // 若有小数, 则进行定点计算后返回
  if (hasDecimal) {
    return `${(value - 0).toFixed(fixed)}`;
  }
  // 若无小数, 则补零后返回
  return `${value}${fixed > 0 ? '.' : ''}${'0'.repeat(zeroFillNum)}`;
}

/**
 * 数值三位分节表示法
 * @param {boolean} withW 是否以万为单位
 * @example
 * toThusandsSeparator(1234567) => '1,234,567'
 * toThusandsSeparator(1234567, 2, true) => '123.46万'
 * toThusandsSeparator(12345678, 2, true) => '1,234.57万'
 */
export function toThusandsSeparator(amount = 0, fixed = 2, withW = false) {
  let trimAmount = parseFloat(amount);
  if (Number.isNaN(trimAmount)) {
    return amount;
  }
  let isW = false;
  // 超过100万且以万为单位
  if (withW && Math.abs(trimAmount) >= 1000000) {
    isW = true;
    trimAmount /= 10000;
  }
  trimAmount = toFixed(trimAmount, fixed);
  return `${trimAmount.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}${isW ? '万' : ''}`;
}
