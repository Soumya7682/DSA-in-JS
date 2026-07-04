// let str="Soumya Ranjan Singh"
// let ans=str.split(" ").map((e)=>{
//     return e.split("").reverse().join("")
// })
// console.log(ans.join(" "))

// function checkArry(e){
//     return Array.isArray(e);
// }
// console.log(checkArry([]))

// let arr=[0,2,3];
// console.log(arr);
// arr.length=0;
// console.log(arr);

// function CheckIntger(e){
//     return Number.isInteger(e)
// }
// console.log(CheckIntger("45"));

// let num=12.1;
// if(num%1==0){
//     console.log("this is intiger");
// }else{
//     console.log("its Not a integer");
// }

// function DupliArr(arr){
//     return arr.concat(arr);
// }
// console.log(DupliArr([1,2,3,4]));

// function revNum(num){
//     let rev=0
//     while(num>0){
// let rem=num%10;
// rev=rev*10+rem;
// num=Math.floor(num/10);
//     }
// return rev;
// }
// console.log(revNum(123));

// function CheckPali(str){

//   let rev= str.split("").reverse().join("")
//   console.log(str);
//   console.log(rev);
//     if(rev===str){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(CheckPali("pool"));

// function Checkpali(num){
//     let rev=0;
//     while(num>0){
//         let rem=num%10;
//         rev=rev*10+rem;
//         num=Math.floor(num/10);
//     }
//     return rev==num;
// }
// console.log(Checkpali(444))



// function AlphaOrd(str){
// return str.split("").sort();
// }
// console.log(AlphaOrd("apple").join(""));


// function FirstCapital(str){
//   let ans=  str.split(" ").map((word)=>{
//         return word.charAt(0).toUpperCase()+word.substring(1);
//     })
//     console.log(ans.join(" "))
// }
// FirstCapital("soumya ranjan singh")

// function CheckLetter(str){
//     let occorance={};
//     str.split("").map((e)=>{
//         if(occorance.hasOwnProperty(e)===false){
//             occorance[e]=1
//         }else{
//             occorance[e]++;
//         }
//     })
//     return occorance;
// }
// console.log(CheckLetter("soumyaa"))

// let arr=[1,1,2,3];
// let ans=arr.reduce((ele,occ)=>{
//     return ele+occ
// },0);
// console.log(ans);

// let arrObj = [{
//     name: "soumya", age: 32
// }, {
//     name: "Raghab", age: 20
// },
// {
//     name: "Aman", age: 23
// },{
//     name:"rudra",age:25
// }]

// let newArr=arrObj.filter((e)=>{
//    return e.age<30
// })
// console.log(newArr);

// function CloneArr(arr){
//     return [...arr];
// }
// console.log(CloneArr([1,2,3,4,5]))


// function cloneArr(arr){
//     let newArr=[];
//     arr.forEach((e)=>{
//        return newArr.push(e);
//     })

//     return newArr;
// }
// console.log(cloneArr([1,2,3,4,5]))

// function showarr(arr,n){
//     if(n>arr.length){
//         console.log("Please enter a valid number ")
//     } else{
//     for(let i=0;i<n;i++){
// console.log(arr[i]);
//     }
// }
// }
// showarr([1,2,3,4],7);

// function lastshower(arr,n){
//     for(let i=arr.length-1;i>=n;i--){
//         console.log(arr[i]);
//     }
// }
// lastshower([1,2,3,4],2);


// function freqCheck(arr){
//     let freq={};
//     arr.forEach((ele)=>{
//        if(freq.hasOwnProperty(ele))freq[ele]++;
//        else freq[ele]=1
//     })
//    let ans=Object.keys(freq).reduce((acc,next)=>{
//     return freq[acc]>freq[next]?acc:next;
//    })

//     console.log(ans)
//     // return freq;
// }
// freqCheck([1,2,3,4,1,2,4,5,8,9])
// console.log(freqCheck([1,2,3,4,1,2,3,5,6]));

// function suffelArry(arr){

//     let totalSuffel=arr.length;
// while(totalSuffel>0){
//     totalSuffel--;
//     let randomSuffelIndex=Math.floor(Math.random()*totalSuffel);
//     // console.log(randomSuffelIndex)
// let temp=arr[totalSuffel];
// arr[totalSuffel]=arr[randomSuffelIndex];
// arr[randomSuffelIndex]=temp;
// }
// return arr;
// }
// console.log(suffelArry([1,2,3,4,5,6]))

// function unionn(arr1,arr2){
//     let ans=[...new Set(arr1.concat(arr2))];
//     return ans;
// }
// console.log(unionn([1,8,0,3,7,9],[1,2,3,4,7,7,8,9]))

// function unique(arr1){
//     let ans=new Set(arr1);
//     return ans;
// }
// console.log(unique([1,2,3,1,2,3,4,5,8]));
//  let rev=0;
//  let num=456;
// while(num>0){
//    let rem=num%10;
//    rev=rev*10+rem;
//    num=Math.floor(num/10)
// }
// console.log(rev)


// let n = 145;
// let org=n;
// let sum=0;
// while (n > 0) {
//     let fact = 1;

//     let rem = n % 10;
//     for (let i = 1; i <= rem; i++) {
//         fact = fact * i;
//     }
//     sum=sum+fact;
//     n = Math.floor(n / 10)   
// }


// if(org==sum){
//     console.log("its a strong number")
// }else{
//     console.log("its not a strong number");
// }
// console.log(sum)

