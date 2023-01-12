//Largest sum of contiguous sub-array
//kadane's algorithm

function maxSum(arr){
    let currentSum =0;
    let bestSum = -Infinity
    
    for(let i=0;i<arr.length;i++){
        currentSum= Math.max(arr[i],currentSum+arr[i])
        bestSum = Math.max(currentSum,bestSum)
    }
    return bestSum;
}
console.log(maxSum([1,2,3,-2,5]))


// function maxSum(arr){
//     let maxSum = -Infinity;
//     let curSum =0;
//     for(let i =0;i<arr.length;i++){
//         curSum=curSum+arr[i]
//         //console.log(curSum);
//         if(curSum>maxSum){
//             maxSum=curSum;
//         }
//            if(curSum<0){
//              curSum=0;
//            }
//         }
//         return maxSum;
//     }

//     console.log(maxSum([1,2,3,-2,5]))


