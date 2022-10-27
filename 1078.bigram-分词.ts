/*
 * @lc app=leetcode.cn id=1078 lang=typescript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
function findOcurrences(text: string, first: string, second: string): string[] {
    let arr = text.split(' ');
    let result =[];
    console.log(arr)
    for(let i=0;i<arr.length-2;i++) {
        if(arr[i]==first&&arr[i+1]==second) {
            result.push(arr[i+2])
        }
    }
    return result;
};
// @lc code=end
let text = "alice is a good girl she is a good student", 
first = "a", 
second = "good"
// console.log(findOcurrences(text,first,second))

