/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let res:number[] = [];
  nums.forEach((item, i) => {
    map.set(9-item, i);
  })
  // nums.forEach((item, i) => {
  //   if(map.has(item)) {
      
  //   }
  // })
  for (let i = 0; i < nums.length; i++)
  return res;
};
// @lc code=end

