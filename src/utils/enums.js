/**
 * 枚举
 * @example
 * ENUM_NAME: [
 *  {
 *    text: ENUM_TEXT, value: ENUM_VALUE, key: ENUM_KEY
 *  }
 * ]
 */
const enums = {
  // @example
  ENUM_NAME: [
    {
      text: 'ENUM_TEXT', value: 'ENUM_VALUE', key: 'ENUM_KEY',
    },
  ],
};

export default enums;

export const getEnumList = (key) => enums?.[key] ?? [];
