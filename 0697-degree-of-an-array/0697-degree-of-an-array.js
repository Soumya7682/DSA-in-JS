/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let freq = {};
    let first = {};
    let last = {};

   
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (freq[num] === undefined) {
            freq[num] = 1;
            first[num] = i;
        } else {
            freq[num]++;
        }

        last[num] = i;
    }

    // Find degree
    let degree = 0;

    for (let num in freq) {
        degree = Math.max(degree, freq[num]);
    }

 
    let ans = nums.length;

    for (let num in freq) {
        if (freq[num] === degree) {
            let length = last[num] - first[num] + 1;
            ans = Math.min(ans, length);
        }
    }

    return ans;
};