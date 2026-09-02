/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxInd=0;
    let curEnd=0;
    let jump=0
    for(let i=0;i<nums.length-1;i++){
        maxInd=Math.max(maxInd,i+nums[i]);
        if(i===curEnd){
            jump++;
            curEnd=maxInd;
        }
    }
    return jump;
};