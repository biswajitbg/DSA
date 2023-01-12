 
 //reverse a string--- "babu" => "ubab"
 
 let reverse = function(str){
    if(str.length<=1) return str;

    return reverse(str.slice(1)) +str[0];
 }

console.log(reverse("babu"))


let revese=function(str){
   if(str.length<=1) return str;

   return revese(str.slice(1)) +str[0]


}

console.log(revese("biswaji"))


// reverse a number-------- 54321 =>12345

function revNumber(num){                 //time complexity  O(n)

   if(num ==0 ) return 0;
   let revNum = 0;
   while(num>0){
      revNum= revNum*10 +num%10;
      num = Math.floor(num/10)

   }
   return revNum;
}
console.log(revNumber(54321))