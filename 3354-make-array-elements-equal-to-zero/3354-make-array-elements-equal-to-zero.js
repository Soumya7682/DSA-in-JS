/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
     let total = nums.reduce((a, b) => a + b, 0);
    let left = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        left += nums[i];
        let right = total - left;

        if (nums[i] === 0) {
            if (left === right) {
                ans += 2;
            } else if (Math.abs(left - right) === 1) {
                ans += 1;
            }
        }
    }

    return ans;
};