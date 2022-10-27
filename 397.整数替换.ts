/*
 * @lc app=leetcode.cn id=397 lang=typescript
 *
 * [397] 整数替换
 */

// @lc code=start
function integerReplacement(n: number): number {
    function getNum(key:number):number {
        if(key==1) {
            return 0
        }
        if(key%2==0) {
            return 1+getNum(key/2)
        }else {
            return 1+Math.min(getNum(key-1),getNum(key+1))
        }
    }
    return getNum(n)
};
// @lc code=end
console.log(integerReplacement(7))

{
    type:'number'
}