
//flat an array in a single array

let arr = [1, [2, 3], 2, [55, 2, [0, 3],3], [2, 3, [4, 5], 6, 1], 4, 5]

let flatternArray = function(arr){
   let resultArr= []
   for(let i=0;i<arr.length;i++){
     
      if(Array.isArray(arr[i])==false){
      resultArr.push(arr[i])
       
      }

       else{
          resultArr=resultArr.concat(flatternArray(arr[i]))
          

       }
   }
   return resultArr;
}
 console.log(flatternArray(arr))