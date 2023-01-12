// function sumNumbers(num){
//     let sum =0;
//     while(num>0){
//         let rem = num%10;
//         console.log(rem)
//         sum= sum+rem;
//         num = parseInt(num/10)
//         console.log(num)
//     } return sum;

// }
// console.log(sumNumbers(456))

// function numberSum(num){
//     if(num==0) return 0;
//     return (num +numberSum(num-1));
// }
// console.log(numberSum(10))

// function palindrom(S){
//     if(S.length<=1) return true;

//     if(S[0]!==S.slice(-1)) return false;
//     return palindrom(S.slice(1,-1))



// }
// console.log(palindrom("nayan"))

//swap two number:--------------------------------------

// let a=10;
// let b=20;
// function solution(){
//     if(a==0 ||b==0) return 0;
//     else{
//         a=a+b;
//         b=a-b;
//        a= a-b;
//     }
//     console.log(a , b)
    


// }
// solution()

function revNumber(number){
    if(number<10) {
        
        
        return ;
    }
  
    
}
console.log(revNumber(123))