/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=[];
    for(let ch of s){
        if(ch==='(' || ch=== '{' || ch=== '['){
            arr.push(ch);
        }else{
            let top=arr.pop();
            if((ch===')'&& top !== '(')||(ch==='}' && top!=='{') || (ch=== ']' && top !=='[')){
                return false
            }
        }
    }
    return arr.length===0;
};