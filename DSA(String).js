// let s="poop";
// let rev=""
// for(let i=s.length;i>=0;i--){
//   rev = rev+s.charAt(i);

// }
// if(rev===s){
//     console.log("Palindrom")
// }else{
//     console.log("not a palindrom")
// }
// // console.log(rev)

// let string=prompt("Enter the string");
// let isPlaindrom=true;
// let i=0,j=string.length-1;
// while(i<j){
//     if(string.charAt(i)!=string.charAt(j)){
//         isPlaindrom=false;
//         break;
//     }
//     i++;
//     j--;
// }
// if(isPlaindrom) console.log("its a palindrom")
//     else console.log("not a plaindrom");

// toggle a char

// let str=prompt("Enter a string");
// let toggle="";
// for(let i=0;i<=str.length-1;i++){
//     let ch=str.charCodeAt(i);
//     if(ch>=65&&ch<=90){
//         toggle=toggle+String.fromCharCode(ch+32)
//     }else if(ch>=97&&ch<=122){
//         toggle=toggle+String.fromCharCode(ch-32)
//     }
// }
// console.log(toggle);

// function Occor(str) {
//     let occorance = {};
//     str.split("").map((e) => {
//         if (occorance.hasOwnProperty(e)) {
//             occorance[e]++
//         } else {
//             occorance[e]=1
//         }
//     })
//     return occorance;

// }
// console.log(Occor("Loop"))

// let str=prompt("enter a array");

// let arr=new Array(128).fill(0); //Fill all index with 0

// for(let i=0;i<str.length;i++){
//     let index=str.charCodeAt(i);
//     arr[index]=arr[index]+1;
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i)+" appear at"+ arr[i]+" tiems")
//     }
// }


// function Occor(str) {
//     let occorance = {};

//     for (let ch of str) {
//         occorance[ch] = (occorance[ch] || 0) + 1;
//     }

//     return occorance;
// }
// console.log(Occor("loop"))

// function al(x,y){
// if(y<=0)return x;
// return al(y,x%y);
// }
// console.log(al(12,18))

