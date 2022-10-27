/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max:number = 0;
  let left = 0;
  let right = height.length - 1;
  while(left <= right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
// @lc code=end

