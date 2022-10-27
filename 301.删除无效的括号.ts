/*
 * @lc app=leetcode.cn id=301 lang=typescript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
function removeInvalidParentheses(s: string): string[] {
    let result:string [] = [];//结果数组
    let list:string [] = [s];//循环数组
    while(result.length === 0) {//没有结果一直循环
         while(list.length > 0) {
             let str = list.shift();
             if (checkStr(str)) {
                 result.push(str);//判断成功加入数组
             } else {
                 if (result.length > 0) {
                     continue;
                 } else {
                     //如果没有结果且字符不符合则将这个字符删除一个括号，把所有的结果加入循环数组
                     for (let i:number = 0 ; i < str.length ; i++) {
                         if (str[i] !== '(' && str[i] !== ')') continue;
                         let newStr = str.slice(0, i) + str.slice(i + 1);//循环删除某个字符
                         if (list.indexOf(newStr) < 0) list.push(newStr);//加入循环数组
                     }
                 }
             }
         }
    }
    return result;
}

function checkStr(s:string):boolean {//判断括号是否正常
    if (s === '') return true;//空格字符串
    let now:number = 0;//当前括号嵌套层数
    for(let i:number = 0 ; i < s.length ; i++) {
        if (s[i] === '(') now++;//左括号层数++
        if (s[i] === ')') now--;//右括号层数--
        if (now < 0) return false;//负层数返回false
    }
    return now === 0;
}
// @lc code=end

