/*
 * @lc app=leetcode.cn id=507 lang=typescript
 *
 * [507] 完美数
 */

// @lc code=start
function checkPerfectNumber(num: number): boolean {
        if (num === 1) {
            return false;
        }
    
        let sum = 1;
        for (let d = 2; d * d <= num; ++d) {
            if (num % d === 0) {
                sum += d;
                if (d * d < num) {
                    sum += Math.floor(num / d);
                }
            }
        }
        return sum === num;
};
// @lc code=end

