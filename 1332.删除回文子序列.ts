/*
 * @lc app=leetcode.cn id=1332 lang=typescript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
function removePalindromeSub(s: string): number {
    const n = s.length;
    for (let i = 0; i < Math.floor(n / 2); ++i) {
        if (s[i] !== s[n - 1 - i]) {
            return 2;
        }
    }
    return 1;
};
// @lc code=end

