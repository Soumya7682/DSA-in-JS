/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    let result = [];

    function backtrack(start, remaining, current) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > remaining) {
                break;
            }

            current.push(candidates[i]);

      
            backtrack(i + 1, remaining - candidates[i], current);

            current.pop();
        }
    }

    backtrack(0, target, []);

    return result;
};