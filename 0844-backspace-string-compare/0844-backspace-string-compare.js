/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function process(str){
        let stack=[];
        for(let ch of str){
            if(ch==='#'){
                stack.pop()
            }else{
                stack.push(ch);
            }
        }
        return stack.join('');
    }
    return process(s)===process(t);
};