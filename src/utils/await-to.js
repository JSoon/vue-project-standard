/**
 * Promise错误捕获工具函数
 *
 * @description 用于异步函数Async & Await
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}
 * @see {@link https://github.com/JSoon/await-to-js/blob/master/src/await-to-js.ts}
 *
 * @example
 * let err, data, loading;
 * loading = true
 * [err, data] = await to(DataModel);
 * if (err) {
 *  // do something to handle err...
 * }
 * loading = false
 *
 * @param   {Promise} promise
 * @param   {object}  errorExt - Additional Information you can pass to the err object
 * @return  {Promise}
 */
export default function to(promise, errorExt = {}) {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (Object.keys(errorExt).length) {
        Object.assign(err, errorExt);
      }
      return [err, undefined];
    });
}
