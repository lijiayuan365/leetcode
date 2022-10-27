/*
 * @lc app=leetcode.cn id=520 lang=typescript
 *
 * [520] 检测大写字母
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
    if(word.toLowerCase()===word||word.toUpperCase()==word) {
        return true;
    } else {
        if(word[0]==word[0].toUpperCase()) {
            if(word.substr(1,word.length-1).toLowerCase()===word.substr(1,word.length-1)) {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

