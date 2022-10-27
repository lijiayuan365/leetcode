/*
 * @lc app=leetcode.cn id=1218 lang=typescript
 *
 * [1218] 最长定差子序列
 */

// @lc code=start
function longestSubsequence(arr: number[], difference: number): number {
    let ans = 0;
    const map:any = {};
    for (const v of arr) {
        map[v] = (map[v-difference]||0)+1;
        // dp.set(v, (dp.get(v - difference) || 0) + 1);
        ans = Math.max(ans, map[v]);
    }
    console.log(map)
    return ans;
};
// @lc code=end
let data = longestSubsequence([1,2,3,4],1)
console.log(data)
