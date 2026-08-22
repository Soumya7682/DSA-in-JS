/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let ans=[];
    for(let i=0;i<intervals.length;i++){
        let current=intervals[i];
        if(ans.length===0||ans[ans.length-1][1]<current[0]){
            ans.push(current);
        }
        else{
            ans[ans.length-1][1]=Math.max(ans[ans.length-1][1],current[1]);
        }
    }
    return ans;
};