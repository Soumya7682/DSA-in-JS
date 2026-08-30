/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length){
        return false;
    }
    let count1=new Array(26).fill(0);
    let count2=new Array(26).fill(0);

    for(let i=0;i<s1.length;i++){
        count1[s1.charCodeAt(i)-97]++;
        count2[s2.charCodeAt(i)-97]++;
    }
    if(count1.join()===count2.join()){
        return true;
    }


    for(let i=s1.length;i<s2.length;i++){
        count2[s2.charCodeAt(i)-97]++;

        let leftChar=i-s1.length;
        count2[s2.charCodeAt(leftChar)-97]--;
        if(count1.join()===count2.join()){
            return true;
        }
    }
    return false;
};