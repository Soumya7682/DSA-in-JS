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
let arr1=[2,5,9,6];
let arr2=[4,1,7,8,3];
let merge=new Array(arr1.length+arr2.length);
let k=0;
for(let i=0;i<arr1.length;i++){
    merge[k++]=arr1[i]
}
for(let j=0;j<arr2.length;j++){
    merge[k++]=arr2[j]
}
console.log(merge.sort())

