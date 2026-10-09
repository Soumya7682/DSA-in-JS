/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
     let res = [1];

    while (res.length < n) {
        let temp = [];

        // Generate odd numbers
        for (let num of res) {
            if (2 * num - 1 <= n) {
                temp.push(2 * num - 1);
            }
        }

        // Generate even numbers
        for (let num of res) {
            if (2 * num <= n) {
                temp.push(2 * num);
            }
        }

        res = temp;
    }

    return res;
};