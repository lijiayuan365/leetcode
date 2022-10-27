/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    let map = new Map();
    for(let i=0;i<magazine.length;i++) {
        let num = map.get(magazine[i])||0
        map.set(magazine[i],num+1)
    }
    for(let i=0;i<ransomNote.length;i++) {
        let num = map.get(ransomNote[i])||0;
        if(num==0) {
            return false;
        } else {
            map.set(ransomNote[i],num-1)
        }
    }
    return true;
};
// @lc code=end
console.log(canConstruct('aa','aab'))
