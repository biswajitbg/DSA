function fibo(n){
        if(n===0)return 0;
        if(n<=2) return 1;
        return fibo(n-1)+fibo(n-2);
    
    }

    console.log(fibo(8))


//factorial

// function fact(number){
//     if(number == 0){
//         return 1;
//     }else{
//         return number*fact(number -1)
//     }
// }
// console.log(fact(171));


let num = 6;
let fact =1;
for(num;num>=1;num--){
    fact = fact*num;
    console.log(fact)
        
    
}