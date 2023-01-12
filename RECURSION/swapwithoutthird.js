//SWAP two string without using third variable
// let a = "babu";
// let b  = "ghosh";

// a = a+b;
// console.log(a)
// b = a.slice(-9,-5)
// //console.log(b)
// a = a.slice(4)
// console.log(a )
//     console.log(b)

    //reverse an array without using extra array

//     let arr =[2,4,5,9,12,4,6]
//    let left = 0;
//    let right = arr.length-1
//    let temp;

//    while(left<right){
//     temp = arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp;
//     left++;
//     right--;
//     console.log(arr)
// }
let arr = [4,6,7,5,4,65,4]  // most important question in interview


function reverse(arr){

    if(arr.length<=1) return arr[0];
    let i =0;
    let j=arr.length-1
    while(i<j){
    arr[i]=arr[i]+arr[j];
    arr[j] = arr[i]-arr[j];
    arr[i]= arr[i]-arr[j];
    i++;
    j--;

    }return arr;


}

console.log(reverse(arr))