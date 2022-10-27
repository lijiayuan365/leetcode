/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  let result:number[] = [];
  result[0] = 1;
  result[1] = 1;
  result[2] = 2;
  for(let i = 3; i <= n; i++) {
    result[i] = result[i-1]+result[i-2]
  }
  return result[n];

};
// @lc code=end

