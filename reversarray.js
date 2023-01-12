let arr = [4,6,7,5,4,65,33]  // most important question in interview

// reverse an arry without using any extra array or extra variable
// function reverse(arr){

//     if(arr.length<=1) return arr[0];
//     let i =0;
//     let j=arr.length-1
//     while(i<j){
//     arr[i]=arr[i]+arr[j];
//     arr[j] = arr[i]-arr[j];
//     arr[i]= arr[i]-arr[j];
//     i++;
//     j--;

//     }return arr;


// }

// console.log(reverse(arr))

function reverse(arr){
    if(arr.length<=1) return arr[0];
    let i =0;
    let j= arr.length-1;
    while(i<j){
        arr[i]=arr[i]+arr[j];
        arr[j]=arr[i]-arr[j];
        arr[i]=arr[i]-arr[j];
        i++;
        j--;
    }
    return arr;
}

console.log(reverse(arr))