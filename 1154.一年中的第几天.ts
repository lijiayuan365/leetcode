/*
 * @lc app=leetcode.cn id=1154 lang=typescript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
function dayOfYear(date: string): number {
    let start = new Date(date.substring(0,4)).getTime()
    let time = new Date(date).getTime();
    // console.log(start);
    // console.log(time);
    return ((time-start)/(3600*24*1000))+1;
};
// @lc code=end

