/**
 * Promise错误捕获工具函数
 *
 * @description 用于异步函数Async & Await
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}
 * @example
 * let err, data, loading;
 * loading = true
 * [err, data] = await to(DataModel);
 * if (err) {
 *  // do something to handle err...
 * }
 * loading = false
 *
 * @returns {Array} 包含错误对象和返回数据的数组
 */
export default function to(promise) {
  return promise
    .then((data) => [null, data])
    .catch((err) => [err]);
}
