/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
     if (s.length !== goal.length) return false;

    let first = -1;
    let second = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            if (first === -1) {
                first = i;
            } else if (second === -1) {
                second = i;
            } else {
                return false; // More than 2 differences
            }
        }
    }

    // Strings are already equal
    if (first === -1) {
        let seen = new Set();

        for (let ch of s) {
            if (seen.has(ch)) return true;
            seen.add(ch);
        }

        return false;
    }

    // Must have exactly 2 differences
    if (second === -1) return false;

    return s[first] === goal[second] &&
           s[second] === goal[first];
};