/*
 * @lc app=leetcode.cn id=1518 lang=typescript
 *
 * [1518] 换酒问题
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
    return numBottles+Math.floor((numBottles-1)/(numExchange-1))
};
// @lc code=end
console.log(numWaterBottles(15,4))
