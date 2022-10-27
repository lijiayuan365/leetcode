/*
 * @lc app=leetcode.cn id=492 lang=typescript
 *
 * [492] 构造矩形
 */

// @lc code=start
function constructRectangle(area: number): number[] {
    let num = Math.floor(Math.sqrt(area))
    for(let i=num;i>1;i--) {
        if(area%i==0) {
            return [area/i,i]
        }
    }
    return [area,1];
};
// @lc code=end

