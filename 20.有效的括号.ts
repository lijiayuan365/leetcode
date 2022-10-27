/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let queue:string[] = [];
  let right = ['()','[]','{}']
  for(let i=0; i<s.length; i++) {
    if(right.includes(queue[queue.length-1]+s[i])) {
      queue.pop()
    } else {
      queue.push(s[i])
    }
  }
  // console.log(queue)
  return queue.length === 0;
};
// @lc code=end

