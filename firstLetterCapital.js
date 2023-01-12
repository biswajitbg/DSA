// givean an array of stirng and i have to capital the first letter of a index
//ex:- ["rat","bat","cat"]   => ["Rat","Bat","Cat"]

function capitalFirst(arr){
    if(arr.length==0) return []


   let result=[]
  let S = arr[0] [0].toUpperCase()+ arr[0].slice(1)

   
   result.push(S);
   
  result =result.concat(capitalFirst(arr.slice(1) ))
  return result;
  



}
 console.log( capitalFirst([ "rat","bat","cat"] ))


 


















































