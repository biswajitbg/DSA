//frequency count method

//O(n) -> time complexity
// given an array of repeated elements return the most repeated elements in the array

//we can put array,String as a input
//or. Given an array of integers A, find the Majority Element.

 let arr= [1,2,1,2,2,4,5,6,7,7,7,7,7,7,7];



let freqObj = {};
let maxOccurance = 0, maxOccuranceCharacter = null;

for(i=0;i<arr.length;i++){

    if(freqObj.hasOwnProperty(arr[i])){

        freqObj[arr[i]]+=1;


    } else{
        freqObj[arr[i]] = 1

    }
   // console.log(freqObj)



    if(maxOccurance<freqObj[arr[i]]){
        maxOccurance=freqObj[arr[i]];
        maxOccuranceCharacter = arr[i]
        
    }

}
console.log(maxOccurance ,"times occur and the number is",maxOccuranceCharacter)


// function repeatElement(arr){
//      let maxOccurance =0;
//     let maxOccuranceCharacter = null;
//     let freqObj = {};
//     for(let i=0;i<arr.length;i++){
//         if(freqObj.hasOwnProperty(arr[i])){
//             freqObj[arr[i]]+=1;
//         }else{
//             freqObj[arr[i]] = 1;
//         }
    
//       if(maxOccurance<freqObj[arr[i]]){
//         maxOccurance=freqObj[arr[i]];  
//         maxOccuranceCharacter = arr[i];
//       }
//    } 
//    return maxOccuranceCharacter;
// }
// console.log(repeatElement(arr))


// majority element 

//ex :- arr[1,2,1,2,2,2]  => output is 2


// function element(arr){
//   let obj = {};
//   for(i=0;i<arr.length;i++){
//     if(obj.hasOwnProperty(arr[i])){
//       obj[arr[i]]+=1;
//       console.log(obj)
//     }else{
//       obj[arr[i]]=1;
//     }


//   }
//   for(let key in obj){
//     if(obj[key]>Math.floor(arr.length/2)){
//       return key;
//     }

//   }

// }
// console.log(element([5,6,7,7,8,5,5,5,5,6]))






