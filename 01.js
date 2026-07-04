// function Fibonaccci(n){
//     let fib=[0,1];
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2];
//     }
//     return fib;
// }

// console.log(Fibonaccci(5));

// function factorial(n){
//     let fact=1;
//     for(let i=1;i<=n;i++){
//         fact=fact*i;
//     }
//     return fact;

// }
// console.log(factorial(5));

// function IsPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             return false;
//         }
//         return true;
//     }
// } //Time Complexity- O(n)
// console.log(IsPrime(3));
// console.log(IsPrime(4));
// console.log(IsPrime(5));

// function IsPrime(n){
//     if(n<2){
//         return false;
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false;
//         }
//         return true;
//     }
// } //Time Complexity- O(sqrt(n)) //Its an optimise method
// console.log(IsPrime(10));
// console.log(IsPrime(6));
// console.log(IsPrime(5));

// function PowerOfTwo(n){
//     if(n<1){
//         return false;
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false;
//         }
//         n=n/2; //O(log(n))
//     }
//     return true;
// }
// console.log(PowerOfTwo(2));
// console.log(PowerOfTwo(5));
// console.log(PowerOfTwo(8));

function PowerOFTwoBitWise(n){
    if(n<1){
        return false;
    }
    return (n & (n-1))==0 //Optimise Method
}
console.log(PowerOFTwoBitWise(2));
console.log(PowerOFTwoBitWise(5));
console.log(PowerOFTwoBitWise(8));