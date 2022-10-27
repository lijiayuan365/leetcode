/*
 * @lc app=leetcode.cn id=686 lang=typescript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
function repeatedStringMatch(a: string, b: string): number {
    const an = a.length, bn = b.length;
    const index = strStr(a, b);
    if (index === -1) {
        return -1;
    }
    if (an - index >= bn) {
        return 1;
    }
    return Math.floor((bn + index - an - 1) / an) + 2;
};


const strStr = (haystack, needle) => {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }

    let k1 = 1000000009;
    let k2 = 1337;
    let kMod1 = Math.floor(Math.random() * k1) + k1;
    let kMod2 = Math.floor(Math.random() * k2) + k2;

    let hashNeedle = 0;
    for (let i = 0; i < m; i++) {
        const c = needle[i].charCodeAt();
        hashNeedle = (hashNeedle * kMod2 + c) % kMod1;
    }
    let hashHaystack = 0, extra = 1;
    for (let i = 0; i < m - 1; i++) {
        hashHaystack = (hashHaystack * kMod2 + haystack[i % n].charCodeAt()) % kMod1;
        extra = (extra * kMod2) % kMod1;
    }
    for (let i = m - 1; (i - m + 1) < n; i++) {
        hashHaystack = (hashHaystack * kMod2 + haystack[i % n].charCodeAt()) % kMod1;
        if (hashHaystack === hashNeedle) {
            return i - m + 1;
        }
        hashHaystack = (hashHaystack - extra * haystack[(i - m + 1) % n].charCodeAt()) % kMod1;
        hashHaystack = (hashHaystack + kMod1) % kMod1;
    }
    return -1;
}

// @lc code=end
let a= 'abcd';
let b = 'cdabcdab'
console.log(repeatedStringMatch(a,b))
