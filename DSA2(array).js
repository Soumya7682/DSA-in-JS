//Left Rotation by 1
// let arr=[12,32,56,41,21,30];
// let copy=arr[0];
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1]=copy;
// console.log(arr);

//Right Rotation by 1
// let arr=[12,35,69,85,23];
// let copy=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1];
// }
// arr[0]=copy;
// console.log(arr)

//Left Rotation BY K steps

// let arr=[1,2,3,4,5];
// let k=7;
// k=k % arr.length; //For every value 7%5=2
// for(let j=0;j<k;j++){
//     let copy=arr[0];
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i+1]
//     }

//     arr[arr.length-1]=copy
// }
// console.log(arr)

//Right Rotation BY k Steps

// let arr=[1,2,3,4,5];
// let k=2;
// k=k%arr.length;
// for(let j=0;j<k;j++){
// let copy=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
//     arr[i]=arr[i-1];
// }
// arr[0]=copy;
// }
// console.log(arr)

//To reduce the time complextity O n^2(Better By taking Extra Space)
// (Left Rotation)
// let arr=[1,2,3,4,5];
// let temp=new Array(arr.length);
// let k=2;
// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[(i+k)%arr.length];
// }

// console.log(temp)

//Right Rotation

// let arr=[1,2,3,4,5];
// let temp=new Array(arr.length);
// let k=2;
// for(let i=arr.length-1;i>=0;i--){
//     temp[(i+k)%arr.length]=arr[i]
// }
// console.log(temp)

//Best Appraoch
//  (Left Rotation)

// let arr=[1,2,3,4,5];
// let k=2;
// function reverse(i,j){
//     while(i<j){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//     }
// }
// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1);
// console.log(arr);

// Right Rotation

// let arr=[1,2,3,4,5];
// let k=2;
// reverse(0,arr.length-1);
// reverse(0,k-1);
// reverse(k,arr.length-1);
// function reverse(i,j){
//     while(i<j){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//     }

// }
// console.log(arr);


//Remove Duplicates from array

// let arr=[0,0,1,1,2,3,3,4];
// let j=1;
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]!=arr[i+1]){
//         arr[j]=arr[i+1]
//         j++;
//     }
// }
// arr.length=j
// console.log(arr);


//Merge Two  Sorted array;
// let arr1=[1,2,3,4,6];
// let arr2=[7,8,9,5];
// let Merge=new Array(arr1.length+arr2.length);
// let i=j=k=0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         Merge[k++]=arr1[i++]
//     }else{
//         Merge[k++]=arr2[j++]
//     }
// }
// while(i<arr1.length){
//     Merge[k++]=arr1[i++]
// }
// while(j<arr2.length){
//     Merge[k++]=arr2[j++]
// }

// console.log(Merge)

//Merge two unserted array
// let arr1=[2,5,9,6];
// let arr2=[4,1,7,8,3];
// let merge=new Array(arr1.length+arr2.length);
// let k=0;
// for(let i=0;i<arr1.length;i++){
//     merge[k++]=arr1[i]
// }
// for(let j=0;j<arr2.length;j++){
//     merge[k++]=arr2[j]
// }
// console.log(merge.sort())


//Best time to buy and sell the stocks

// let arr=[7,1,5,3,6,4];
// let profit=0;
// let i=0;
// let min=arr[i];
// let ans=0;
// for(i;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }else{
//         ans=arr[i]-min
//        profit=Math.max(profit,ans);
//     }
// }
// console.log(profit)

//Sort The Colour
// let arr=[1,0,2,1,0,2,1];
// let i=j=0;
// let k=arr.length-1;
// while(i<=k){
//     if(arr[i]==0){
//              [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++,j++;
//     }else if(arr[i]==2){
//         [arr[i], arr[k]] = [arr[k], arr[i]];
//         k--;
//     }
//     else{
//         i++
//     }
// }
// console.log(arr)


//Maximum Subarray//Kadane's Algorithm
// let arr=[-2,1,-3,4,-1,2,1,-5,4];
// let sum=0;
// let max=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
//     if(sum>max){
//         max=sum
//     }else if(sum<0){
//         sum=0
//     }
// }
// console.log(max)


// Moore's Voting Algorithm
// let arr = [1, 1, 2, 2, 1, 3, 2, 1, 2, 1];
// let ans = arr[0];
// let count = 1;
// for (let i = 1; i < arr.length; i++) {
//     if (count == 0) {
//         ans = arr[i];
//         count = 1;
//     } else if (ans == arr[i]) {
//         count++;
//     } else {
//         count--;
//     }
// }
// console.log(ans);

//Trapping Rain Water

// let height=[4,2,0,3,2,5];
// let Left=new Array(height.length)
// let Right=new Array(height.length);
// let maxLeft=height[0];
// let maxRight=height[height.length-1];
// Left[0]=maxLeft
// Right[Right.length-1]=maxRight;

// for(let i=1;i<height.length;i++){
//     maxLeft=Math.max(height[i],maxLeft);
//     Left[i]=maxLeft
// }
// for(let i=height.length-2;i>=0;i--){
//     maxRight=Math.max(height[i],maxRight);
//     Right[i]=maxRight;
// }
// console.log(Left);
// console.log(Right);
// let ans=0;
// for(let i=0;i<height.length;i++){
// ans+=Math.min(Left[i],Right[i])-height[i];
// }
// console.log(ans);


// var twoSum = function(nums, target) {
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]+nums[i+1]==target){
//             return [i,i+1];
//         }
//     }
// };
// console.log(twoSum([2,7,11,15],9))

//Product of array except self

// let arr=[1,2,3,4];
// let left=new Array(arr.length);
// let right=new Array(arr.length);
// let j=0;
// let k=arr.length-1;
// right[right.length-1]=arr[0];
// left[0]=arr[0];
// let ans=new Array(arr.length)
// for(let i=1;i<arr.length;i++){
//     left[i]=left[j]*arr[i-1];
//     j++;
// }
// for(let i=arr.length-2;i>=0;i--){
//     right[i]=right[k]*arr[i+1];
//     k--;
// }
// for(let i=0;i<left.length;i++){
//    ans[i]=left[i]*right[i];
// }
// console.log(ans)

//Better Appraoch
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     let left = new Array(nums.length);
//     let right = new Array(nums.length);
//     let ans = new Array(nums.length);

//     // Initialize
//     left[0] = 1;
//     right[nums.length - 1] = 1;

//     // Left products
//     for (let i = 1; i < nums.length; i++) {
//         left[i] = left[i - 1] * nums[i - 1];
//     }

//     // Right products
//     for (let i = nums.length - 2; i >= 0; i--) {
//         right[i] = right[i + 1] * nums[i + 1];
//     }

//     // Final answer
//     for (let i = 0; i < nums.length; i++) {
//         ans[i] = left[i] * right[i];
//     }

//     return ans;
// };
//Gas Station
// var canCompleteCircuit = function(gas, cost) {
//     let total=0;
//     let tank=0;
//     let start=0;
//     for(let i=0;i<gas.length;i++){
//         let diff=gas[i]-cost[i];
//         total+=diff;
//         tank+=diff;
//         if(tank<0){
//             start=i+1;
//             tank=0;
//         }
//     }
//     return total >= 0?start:-1;
// };
// console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));

//Duplicate from array
// var containsDuplicate = function (nums) {
//     let i = 0;
//     let j = nums.length - 1;
//     while (i <= j) {
//         if (nums[i] !== nums[j]) {
//             j--;
//             i++;
//             return false
//         }
//         else {
//             return true;
//         }
//     }

// };
// console.log(containsDuplicate([1, 2, 3, 4]))

//Intersection of Two Arrays
// var intersection = function(nums1, nums2) {
//     let set1=new Set(nums1);
//     let result=new Set();
//     for(let num of nums2){
//         if(set1.has(num)){
//             result.add(num);
//         }
//     }
//     return [...result]
// };

//Third maximum NUmber

// let arr=[2,4,5,3,1,6,6,9];
// let max=null;
// let max2=null;
// let max3=null;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===max||arr[i]===max2||arr[i]===max3){
//         continue;
//     }else if(max===null||arr[i]>max){
//          max3 = max2;
//     max2 = max;
//     max = arr[i];
//     }else if(max2===null||arr[i]>max2){
//         max3 = max2;
//     max2 = arr[i];
//     }else if (max3 === null || arr[i] > max3) {
//     max3 = arr[i];
// }
// }
// console.log(max3);

//Two sum II

let arr=[1,2,3,4,5,6];
let target=10;
let i=0;
let j=arr.length-1;
while(i<j){
    let sum=arr[i]+arr[j];
    if(sum>target){
        j--;
    }else if(sum<target){
        i++;
    }else if(sum===target){
        console.log([i+1,j+1]);
        break;
    }
}