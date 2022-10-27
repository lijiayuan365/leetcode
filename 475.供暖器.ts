/*
 * @lc app=leetcode.cn id=475 lang=typescript
 *
 * [475] 供暖器
 */

// @lc code=start
function findRadius(houses: number[], heaters: number[]): number {
    let lens:number[] = [];
    houses.sort();
    heaters.sort()
    // console.log(houses)
    for(let i=0;i<houses.length;i++) {
        let len =Math.abs(heaters[0]-houses[i]);
        for(let j=0;j<heaters.length;j++) {
            if(Math.abs(heaters[j]-houses[i])<len) {
                len = Math.abs(heaters[j]-houses[i])
            }
        }
        lens.push(len)
    }
    lens.sort((a,b)=>b-a)
    // console.log(lens)
    return lens[0]
    // return 1;
};
// @lc code=end
let houses = [1,2,3,4];
let heaters = [1,4];
console.log(findRadius(houses,heaters))

