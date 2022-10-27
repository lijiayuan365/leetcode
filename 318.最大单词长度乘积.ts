/*
 * @lc app=leetcode.cn id=318 lang=typescript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
function maxProduct(words: string[]): number {
    // let res = [];
    // let map = new Map();
    // for(let i=0;i<words.length;i++) {
    //     let flag = true;
    //     for(let j=0;j<words[i].length;j++) {
    //         if(map.get(words[j][j])) {
    //             flag = false;
    //         } else {
    //             map.set(words[i][j],i);
    //         }
    //     }
    //     if(flag) {
    //         res.push(words[i])
    //     }
    // }
    // console.log(map)
    // console.log(res)
    const length = words.length;
    const masks = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        const word = words[i];
        const wordLength = word.length;
        for (let j = 0; j < wordLength; j++) {
            masks[i] |= 1 << (word[j].charCodeAt(0) - 'a'.charCodeAt(0));
        }
    }
    let maxProd = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if ((masks[i] & masks[j]) === 0) {
                maxProd = Math.max(maxProd, words[i].length * words[j].length);
            }
        }
    }
    return maxProd;
};
// @lc code=end

maxProduct(["a","ab","abc","d","cd","bcd","abcd"])