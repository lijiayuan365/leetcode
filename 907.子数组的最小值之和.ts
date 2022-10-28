/*
 * @lc app=leetcode.cn id=907 lang=typescript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
function sumSubarrayMins(arr: number[]): number {
  let sumCount = 0
  let len = arr.length
  let dp = new Array(len).fill(0)
  let lowDp = new Array(len).fill(len)
  lowDp[0] = 0
  sumCount = dp[0] = arr[0]
  for (let i = 1; i < arr.length; i++) {
    //将每个前一个的最小值保存下来
    let j = i - 1
    let lowest = false
    if (arr[j] <= arr[i]) {
      lowDp[i] = j
      dp[i] = arr[i]
    } else {
      while (arr[j] > arr[i]) {
        if (j === 0 || j === lowDp[j]) {
          lowest = true
          j = 0
          break
        }

        j = lowDp[j]

      }

      let count = 0
      if (lowest) {
        lowDp[i] = i
        count = i - j + 1
      } else {
        lowDp[i] = j
        count = i - j
      }
      dp[i] = dp[i] + count * arr[i]

    }

    if (!lowest) {
      dp[i] = dp[i] + dp[j]
    }

    sumCount = sumCount + dp[i]

  }

  return sumCount % 1000000007
};
// @lc code=end

