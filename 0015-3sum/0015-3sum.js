/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let result=[];
  

    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i]=== nums[i-1]){
            continue;
        }
        let st=i+1;
        let end=nums.length-1;

        while(st<end){
           let sum=nums[i]+nums[st]+nums[end];
if(sum===0){
    result.push([nums[i],nums[st],nums[end]]);
    while(st<end && nums[st]===nums[st+1]){
st++;
    }
    while (st < end && nums[end] === nums[end - 1]) {
                    end--;
                }
   st++;
   end--;

}else if(sum<0){
    st++;
}else{
    end--;
}
        }
    }
    return result;
};