
//check a input is integer or not

// function isInt(inp){
//     if(inp%1==0 || typeof inp == Number){
//         return true;
//     } return false;
// }
//   console.log(isInt(-7))


  function multipleNUmber(num){
    if(num%3 ==0 && num%5!==0) return "Foo";
    if(num%5==0 && num%3!==0) return "Bar";
    if (num%3==0 && num%5==0) return "FooBar"
    else{
        return "nothing"
    }
  }
  console.log(multipleNUmber(10))


  function integer(number){
    if(number%1==0 || typeof number == Number){
      return true;
    } else{
       return false;
    }
     
      
  }
console.log(integer("uhdf"))
