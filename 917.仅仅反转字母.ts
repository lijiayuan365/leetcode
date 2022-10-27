/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
  let i = 0,j = s.length-1;
  let left ='', right = '';
  let wCharReg = /[a-zA-Z]/
  while(i < j) {
      while(i < j) {
          if(wCharReg.test(s[i])){
              break;
          } else {
              left += s[i++];
          }
      }
      while(i < j) {
          if(wCharReg.test(s[j])){
              break;
          } else {
              right = s[j--] + right;
          }
      }
      if(i < j) {
          left += s[j--];
          right = s[i++] + right;
      }
  }
  return left + (i == j ? s[i]:'') + right;
};
// @lc code=end

