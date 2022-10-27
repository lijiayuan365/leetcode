/*
 * @lc app=leetcode.cn id=495 lang=typescript
 *
 * [495] 提莫攻击
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let ans = 0;
    let expire = 0;
    for(let i=0;i<timeSeries.length;i++) {
        if(timeSeries[i]>=expire) {
            ans += duration;
        } else {
            ans += timeSeries[i]+duration -expire;
        }
        expire = timeSeries[i]+duration;
    }
    return ans;
};
// @lc code=end

