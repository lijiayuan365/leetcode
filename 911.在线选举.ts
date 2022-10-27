/*
 * @lc app=leetcode.cn id=911 lang=typescript
 *
 * [911] 在线选举
 */

// @lc code=start
class TopVotedCandidate {
    private timeMap: Map<number, number> = new Map;
    private times: number[];
    constructor(persons: number[], times: number[]) {
        this.times = times;
        const map: Map<number, number> = new Map;
        let most = 1;
        let target = persons[0];
        for(let i = 0; i < persons.length; i++){
            let p = persons[i];
            map.has(p) ? map.set(p, map.get(p) + 1) : map.set(p, 1);
            if(most <= map.get(p)){
                most = map.get(p);
                target = p;
            }
            this.timeMap.set(times[i], target);
        }
    }

    q(t: number): number {
        if(this.timeMap.has(t))
            return this.timeMap.get(t);
        else{
            let left = 0, right = this.times.length-1;
            while(left + 1 < right){
                let mid = left + ((right - left) >> 1);
                if(t === this.times[mid]){
                    return this.timeMap.get(this.times[mid]);
                }else if(t > this.times[mid]){
                    left = mid;
                }else{
                    right = mid;
                }
            }
            if(this.times[right] < t) t = this.times[right];
            else t = this.times[left];
            return this.timeMap.get(t);
        }
    }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

// @lc code=end

