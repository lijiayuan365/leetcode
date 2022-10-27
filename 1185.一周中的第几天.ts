/*
 * @lc app=leetcode.cn id=1185 lang=typescript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
function dayOfTheWeek(day: number, month: number, year: number): string {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date(`${year}-${month}-${day}`)
    return days[date.getDay()]
};
// @lc code=end

