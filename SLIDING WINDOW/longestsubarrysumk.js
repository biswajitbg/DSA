// Longest subarray with sum = k 





// function longestSubarray(arr,k){
//     let map = new Map()
//     let sum = 0;
//     let length = 0;
//      for(i=0;i<arr.length;i++){
//         sum = sum+arr[i];
//         if(sum==k){
//             length = i+1;

//         }else if(map.has(sum-k)){
//             length = Math.max(length, i-map.get(sum-k));

//         }

//         if(!map.has(sum)){
//             map.set(sum,i);
//         }
        

//      }
//      return length;

// }

// console.log(longestSubarray([10,5,2,7,1,9] , 10))



function longestSubarray(arr,k){
    let map = new Map()
    let sum =0;
    let lenghm =0;
    for(let i=0;i<arr.length;i++){
        sum = sum+ arr[i];
        if(sum==k){
            length = i+1;

        } else if(map.has(sum-k)){
            length = Math.max(length, i-map.get(sum-k))

        }if(!map.has(sum)){
            map.set(sum,i)
        }
    }
    return length;
}

console.log(longestSubarray([10,5,2,7,1,9] , 10))