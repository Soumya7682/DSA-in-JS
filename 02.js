// function Fibonaccci(n){
//     let fibo=[0,1];
//     for(let i=2;i<=n;i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo;
// }
// console.log(Fibonaccci(7));

// function FiboRecursive(n){
//     if(n<2){
//         return n;
//     }
//     return FiboRecursive(n-1)+FiboRecursive(n-2);
// }
// console.log(FiboRecursive(7));

function factFib(n){
    if(n==0){
        return n
    }
    if(n==1){
        return n
    }
    return n*factFib(n-1);
}
console.log(factFib(5));