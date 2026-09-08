/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;

    if (dividend === MIN && divisor === -1) {
        return MAX;
    }

    let negative = (dividend < 0) !== (divisor < 0);

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while (a >= b) {
        let value = b;
        let count = 1;

        while (value + value <= a) {
            value += value;
            count += count;
        }

        a -= value;
        result += count;
    }

    return negative ? -result : result;
};