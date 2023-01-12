//check a string or a array is palindrom or not

// const isPalinDrom = function(S){

//     start = 0;
//     end = S.length-1;

//     while(start<end){
//         if(S[start] !==S[end]) return "the string is not a palindrom";
//         start++;
//         end--;
//     }   
         
//         return "the string is palindrom"
// }
// console.log(isPalinDro("madam"))


// make sure all input of secquesnc
// => Array => readLine().split(' ').map(Number); if geven array of integer
// => Array => readLine().split(' '); if geven array of string
// => Number => parseInt(readLine());
// => String => readLine();




//using recursion string is palindrom or not

// function isPrl(str){
    
//     if(str.length<=1) return true

//     if(str[0]!==str.slice(-1)) return false
//     return isPrl(str.slice(1,-1))
//  }
//     console.log(isPrl("madam"))

    const palinDrom=(str)=>{
        if(str.length<=1)  return true;
        
        if(str[0]!==str.slice(-1)) return false;
        return palinDrom(str.slice(1,-1))
    }
      console.log(palinDrom("babu"))


 //a number is palindrom or not

// function palindrom(num){
//     if(num==0) {
//         return 0;
//     } 
  
   
//     let revNum =0;
//     while(num > 0)
//     {
//         revNum= revNum* 10 + num % 10;
//         num = Math.floor(num / 10);

//         if(num!==revNum){
//             return false;
          
//     }
    
    
// }


// }
// console.log(palindrom(121))