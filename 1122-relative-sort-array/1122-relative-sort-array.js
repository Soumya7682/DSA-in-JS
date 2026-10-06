/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let freq = new Map();


    for (let num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let result = [];

    
    for (let num of arr2) {
        let count = freq.get(num);

        while (count > 0) {
            result.push(num);
            count--;
        }

        freq.delete(num);
    }

    
    let remaining = [];

    for (let [num, count] of freq) {
        while (count > 0) {
            remaining.push(num);
            count--;
        }
    }

    remaining.sort((a, b) => a - b);

    return result.concat(remaining);
};