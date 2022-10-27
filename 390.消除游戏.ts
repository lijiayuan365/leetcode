/*
 * @lc app=leetcode.cn id=390 lang=typescript
 *
 * [390] 消除游戏
 */

// @lc code=start
function lastRemaining(n: number): number {
    return n > 1 ? 2 * (Math.floor(n/2) + 1 - lastRemaining(Math.floor(n/2))) : 1
};
// @lc code=end

