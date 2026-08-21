/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans=[];
    let srow=0;
    let erow=matrix.length-1;
    let scol=0;
    let ecol=matrix[0].length-1;

    while(srow<=erow && scol<=ecol){
        for(let i=scol;i<=ecol;i++){
            ans.push(matrix[srow][i]);
        }
        srow++;
        for(let i=srow;i<=erow;i++){
            ans.push(matrix[i][ecol]);
        }
        ecol--;

        if(srow<=erow){
            for(let i=ecol;i>=scol;i--){
                ans.push(matrix[erow][i])
            }
            erow--;
        }
        if(scol<=ecol){
            for(let i=erow;i>=srow;i--){
                ans.push(matrix[i][scol])
            }
            scol++
        }
    }
return ans;
};