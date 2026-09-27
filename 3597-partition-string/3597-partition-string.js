/**
 * @param {string} s
 * @return {string[]}
 */
var partitionString = function(s) {
   let seen = new Set();
    let result = [];
    let current = "";

    for (let ch of s) {
        current += ch;

        if (!seen.has(current)) {
            seen.add(current);
            result.push(current);
            current = "";
        }
    }

    return result;
};