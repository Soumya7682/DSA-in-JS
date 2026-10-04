/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    if (n <= 0) return 0;
    if (n <= 3) return 1;

    let s = [1, 2, 2];
    let i = 2;
    let num = 1;
    let count = 1;

    while (s.length < n) {
        let times = s[i];

        for (let j = 0; j < times; j++) {
            s.push(num);

            if (num === 1 && s.length <= n) {
                count++;
            }
        }

        num = num === 1 ? 2 : 1;
        i++;
    }

    return count;
};