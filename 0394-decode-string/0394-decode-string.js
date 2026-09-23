/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
     let numStack = [];
    let strStack = [];

    let num = 0;
    let current = "";

    for (let ch of s) {

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);
        }

        else if (ch === '[') {
            numStack.push(num);
            strStack.push(current);

            num = 0;
            current = "";
        }

        else if (ch === ']') {
            let repeat = numStack.pop();
            let previous = strStack.pop();

            current = previous + current.repeat(repeat);
        }

        else {
            current += ch;
        }
    }

    return current;
};