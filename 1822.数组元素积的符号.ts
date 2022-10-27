/*
 * @lc app=leetcode.cn id=1822 lang=typescript
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
function arraySign(nums: number[]): number {
  let res = nums.reduce((i, j) => {
    if (i === 0 || j === 0) {
      return 0
    }
    return i * j > 0 ? 1 : -1;
  });
  res = res > 1 ? 1 : res < -1 ? -1 : res;
  return res ;
};
// @lc code=end