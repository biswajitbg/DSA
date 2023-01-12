//Q . Given a array of elements and a positive number k, find the maximum sum of any contiguous subarray of size k

// time complexity = O(n)



//  function maxiMumSum(arr,k){
//      //arr = [2,3,5,3,4,-2,8,9,-8,-6,-7,4]
//     //let k= 2;
//     if(k>arr.length){
//         return "invalid";
//     }
   
    
//    let winDowSum = 0;
   

//    for(let i=0;i<k;i++){
//     winDowSum+=arr[i];

//    }
//    let maxiMumSum =0;
//    maxiMumSum = winDowSum;
//    for(let i=k; i<arr.length; i++){

//     winDowSum += arr[i]  - arr[i-k];                     
//     maxiMumSum = Math.max(maxiMumSum,winDowSum);  
      


//     } 
//     return maxiMumSum;


//  }


// console.log (maxiMumSum([6,2,3,4,5],4));




function maxSum(arr,k){
    if(k>arr.length){
        return "invalid"
    }

    let windowSum = 0;
    for(let i=0;i<k ; i++){
        windowSum+=arr[i]
    }

    let maxSum =0;
    maxSum = windowSum;
    for( let end =k; end<arr.length;end++){
        windowSum= windowSum+arr[end] - arr[end-k]

        maxSum = Math.max(windowSum,maxSum)
    }
    return maxSum;
}

console.log(maxSum([2,4.-2,8,-1,7,-3,5,6,9,-9], 4))