/*
 * @lc app=leetcode.cn id=1446 lang=typescript
 *
 * [1446] 连续字符
 */

// @lc code=start
function maxPower(s: string): number {
    let ans = 1, cnt = 1;
    for (let i = 1; i < s.length; ++i) {
        if (s[i] == s[i - 1]) {
            ++cnt;
            ans = Math.max(ans, cnt);
        } else {
            cnt = 1;
        }
    }
    return ans;
};
// @lc code=end

