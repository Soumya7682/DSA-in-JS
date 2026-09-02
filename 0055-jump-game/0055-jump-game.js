/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxInd=0;
    for(let i=0;i<nums.length;i++){
        if(i>maxInd){
            return false;
        }else{
            maxInd=Math.max(maxInd,i+nums[i])
        }
    }
    return true;
};