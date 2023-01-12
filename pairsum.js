// find all pairs which sum is equal to given number(unsorted array)



// function pairSum(arr,sum){
//     let result = {}, returnResult = [];

//     for(let i=0;i<arr.length;i++){
//         if(result.hasOwnProperty(arr[i])){
//             console.log("value in object" + result[arr[i]])
//              returnResult.push({[result[arr[i]]]  : arr[i]})
//              console.log(returnResult)

//         }else{
//             result[sum-arr[i]] = arr[i]
//            // console.log(arr[i])
//         }
//     }
//     return returnResult;
// }
// console.log(pairSum([2,3,4,5,6,7,8] , 10) )


// function pair(arr,sum){
//     let result ={},pairResult = [];

//     for(let i=0;i<arr.length;i++){
//         if(result.hasOwnProperty(arr[i])){
//             pairResult.push({[result[arr[i]]] : arr[i]})

//         }else{
//             result[sum-arr[i]] = arr[i]
//         }
//     } return pairResult;
// }
// console.log(pair([1, 2, 3, 4,6,7,8,9, 11, -2, -97, 0, -11, 20] , 9))


// function pairSum(arr,sum){
//     let result = {};
//     let returnResult= [];
//     //let count = 0;

//     for(let i =0;i<arr.length;i++){
//         if(result.hasOwnProperty(arr[i])){
//             returnResult.push({[result[arr[i]]] : arr[i]})
//             //count++;
//         }else{
//             result[sum-arr[i]] = arr[i];
            
//         }
//     }
//     return returnResult;
// }

// console.log(pairSum([1, 5, 7, 1] ,6))

function countPair(arr,k){
    let obj = {};
    count = 0;

    for (let i =0;i<arr.length;i++){
        if (obj.hasOwnProperty(arr[i]-k)){
            count++;

        }else{
            i++;
        }
        
    }
    return count;

    
}

console.log(countPair([1, 5, 7, 1]  , 6))
