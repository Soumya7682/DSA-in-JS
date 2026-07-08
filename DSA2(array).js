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



