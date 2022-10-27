/*
 * @lc app=leetcode.cn id=869 lang=typescript
 *
 * [869] 重新排序得到 2 的幂
 */

// @lc code=start
function reorderedPowerOf2(n: number): boolean {
    let str:string = n.toString()
    let str2:string  = str.split('').sort().join('');
    let nums = ["1","2","4","8","16","23","46","128","256","125","0124","0248","0469","1289","13468",
    "23678","35566","011237","122446","224588","0145678","0122579","0134449","0368888",
    "11266777","23334455","01466788","112234778","234455668","012356789","0112344778"]
    console.log(str2)
    return nums.includes(str2);
};
// @lc code=end
reorderedPowerOf2(12222)
