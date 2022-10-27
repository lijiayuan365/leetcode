/*
 * @lc app=leetcode.cn id=1816 lang=typescript
 *
 * [1816] 截断句子
 */

// @lc code=start
function truncateSentence(s: string, k: number): string {
    let arr = s.split(' ');
    arr = arr.splice(0,k)
    return arr.join(' ')
};
// @lc code=end

