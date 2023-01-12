let arr = [12, 3, 5, 10,8, 19];
let K = 3;

function kthLargest(arr, K){
    arr = arr.sort((a,b) => b-a); 
    return arr[K-1];

}

console.log(kthLargest(arr,K))