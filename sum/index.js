'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}

module.exports = { add };
 //add: add のようにオブジェクト名と変数名が同じ時はまとめられる
