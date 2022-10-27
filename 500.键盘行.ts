/*
 * @lc app=leetcode.cn id=500 lang=typescript
 *
 * [500] 键盘行
 * 22/22 cases passed (68 ms)
Your runtime beats 76.19 % of typescript submissions
Your memory usage beats 9.52 % of typescript submissions (39.5 MB)
 */

// @lc code=start
function findWords(words: string[]): string[] {
    const list: string[] = [];
    const rowIdx: string = "12210111011122000010020202";
    for (const word of words) {
        let isValid: boolean = true;
        const idx: string = rowIdx[word[0].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)];
        for (let i = 1; i < word.length; ++i) {
            if (rowIdx[word[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)] !== idx) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            list.push(word);
        }
    }
    return list;
    // let word1 = 'qwertyuiop';
    // let word2 = 'asdfghjkl';
    // let word3 = 'zxcvbnm';
    // let result = [];
    // function check(string:string){
    //     // result.push(string)
    //     let keys = ''
    //     if(word1.includes(string[0])) {
    //         keys = word1;
    //     } else if(word2.includes(string[0])) {
    //         keys = word2;
    //     } else {
    //         keys = word3;
    //     }
    //     for(let i=0;i<string.length;i++) {
    //         if(!keys.includes(string[i])){
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    // words.forEach(item => {
        
    //     // if()
    //     if(check(item.toLocaleLowerCase())) {
    //         result.push(item)
    //     }
    // })
    // return result;
};
// @lc code=end

