/**
 * @param {number[]} arr
 * @return {number}
 */
var firstMissingPositive = function(arr) {
    let n=arr.length;
    for(let i=0;i<n;i++){
        while(arr[i]>=1 && arr[i]<=n && arr[arr[i]-1]!==arr[i]){
            let Index=arr[i]-1;
            [arr[i],arr[Index]]=[arr[Index],arr[i]];
        }
    }
    for(let i=0;i<n;i++){
        if(arr[i]!==i+1){
            return i+1;
        }
    }
    return n+1;
};