// let arr=[12,45,78,24,69,79];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);

// let arr=[12,32,52,24,69,78];
// let max=Math.max(arr[0],arr[1]);
// let Smax=Math.min(arr[0],arr[1]);

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         Smax=max;
//         max=arr[i]
//     }
// }
// console.log(Smax);

// let arr=[12,32,52,24,69,78];
// let min=Math.min(arr[0],arr[1]);
// let Smin=Math.max(arr[0],arr[1]);

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         Smin=min;
//         min=arr[i]
//     }
// }
// console.log(Smin);

// let arr=[12,35,47,98,21];
// let temp=new Array(arr.length);

// let j=0;
// for(let i=arr.length-1;i>=0;i--){
//     temp[j]=arr[i];
//     j++;
// }
// console.log(temp);

// let arr=[12,45,78,96,36];
// let i=0,j=arr.length-1;
// let temp;
// while(i!=j){
//     temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// console.log(arr)

// let arr = [1, 0, 1, 0]
// let j = 0, i = 0;
// let temp;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }

// }
// console.log(arr);

//-ve -Left,+ve-Right

// let arr=[1,-3,57,-56,89,-74];
// let j=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
// let temp=arr[i];
// arr[i]=arr[j];
// arr[j]=temp;
// j++
//     }
// }
// console.log(arr)



//Right rotatiom by k element of an array

// let arr = [1, 2, 3, 4, 5];

// let k = 2;

// for (let j = 1; j <= k; j++) {
//     let copy = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1]
//     } 
//     arr[0] = copy
// }

// console.log(arr)

// let arr=[1,2,3,4,5];
// let k=2
// for(let j=0;j<k;j++){
// let copy=arr[0];
// for(let i=0;i<arr.length-1;i++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1]=copy;
// }
// console.log(arr)

//without extra space and time complexity

// let arr=[1,2,3,4,5];
// let k=3;
// k=k%arr.length;
// reverse(0,k-1);
// reverse(k-1,arr.length-1);
// reverse(0,arr.length-1);
// console.log(arr);
// function reverse(i,j){
//     while(i<j){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//     }
// }


