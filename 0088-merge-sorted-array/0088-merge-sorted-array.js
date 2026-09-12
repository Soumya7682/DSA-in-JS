/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    m=m-1;
    n=n-1;
     let k = nums1.length - 1;

    while (n >= 0) {
        if (m >= 0 && nums1[m] > nums2[n]) {
            nums1[k] = nums1[m];
            m--;
        } else {
            nums1[k] = nums2[n];
            n--;
        }

        k--;
    } 
};