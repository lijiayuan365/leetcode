/*
 * @lc app=leetcode.cn id=299 lang=typescript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
function getHint(secret: string, guess: string): string {
    if(secret==guess) {
        return secret.length+'A0B'
    }
    function setCharAt(str:any,index:any,chr:any) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    let x= 0;
    let y = 0;
    for(let i=0;i<secret.length;i++) {
        if(secret[i]==guess[i]) {
            x += 1;
            secret = setCharAt(secret,i,'#')
            guess = setCharAt(guess,i,'#')
        } else {
        }
    }
    console.log(guess)
    console.log(secret)
    for(let i=0;i<secret.length;i++) {
        // if(secret[])
        let idx = guess.indexOf(secret[i])
        // console.log(idx)
        // console.log(secret[i])
        if(idx!=-1&&secret[i]!='#') {
            console.log(y)
            y += 1;
            guess = setCharAt(guess,idx,'#');
            secret = setCharAt(secret,i,'#');
        }
    }
    // for(const key in map1) {
    //     y += Math.floor(map1[key]/2)
    // }
    // for(let )
    // arr1.forEach(item => {
    //     console.log(item)
    //     if(arr2.includes(item)) {
    //         y+=1;
    //     }
    // })
    return `${x}A${y}B`
};
// @lc code=end
let data = getHint('1807','7810')
console.log(data)
