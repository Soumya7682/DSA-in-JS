/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=0;
    for(let num of candies){
        if(num>max){
            max=num;
        }
    }
    let res=[];
    for(let num of candies){
        res.push(num+extraCandies>=max)
    }
    return res;
};