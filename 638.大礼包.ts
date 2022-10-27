/*
 * @lc app=leetcode.cn id=638 lang=typescript
 *
 * [638] 大礼包
 */

// @lc code=start
function shoppingOffers(price: number[], special: number[][], needs: number[]): number {
    let map = {};
	function dfs(arr, list) {
		let str = arr.join('-');
		if (map[str] !== undefined) {
			return map[str];
		}
		let done = true;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				done = false;
			}
		}
		if (done) {
			return 0;
		}

		list = list.filter(item => {
			let flag = true;
			for (let i = 0; i < item.length; i++) {
				if (arr[i] < item[i]) {
					flag = false;
					break;
				}
			}
			return flag;
		})



		let min = Infinity;
		for (let i = 0; i < list.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				if (list[i][j] > 0 && arr[j] > 0) {
					for (let k = 0; k < arr.length; k++) {
						arr[k] -= list[i][k];
					}
					min = Math.min(min, list[i][list[i].length - 1] + dfs( arr.slice(), list.slice() ));
					for (let k = 0; k < arr.length; k++) {
						arr[k] += list[i][k];
					}
				}
			}
		}

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				arr[i] -= 1;
				min = Math.min(min, price[i] + dfs( arr.slice(), list.slice() ));
				arr[i] += 1;
			}
		}

		map[str] = min;
		return map[str];
	}
	let ret = dfs(needs, special);
	console.log(map);
	return ret;
};
// @lc code=end

