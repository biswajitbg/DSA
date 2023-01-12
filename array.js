// let arrays =["mango","jackfruit","itchii","apple",1,78,2.67]
// arrays[4]="banana"
// console.log(arrays);
// console.log(typeof arrays);
// console.log(Array.isArray(arrays));







var arr = [1,4,5,6,3]
function findTarget (arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1
   
}
console.log(findTarget(arr,3))

// function compareTriplets(a,b){
//     let aPoints =0;
//     let bPoints =0;
//     for (let i=0;i<3;i++){
//         if (a[i]>b[i]){
//             aPoints++;

//         }else if(b[i]>a[i]){
//             bPoints++;
//         }
            
        
//     }
//     let result = [aPoints,bPoints];
//    return result;
// }
// console.log(compareTriplets(1,2))


// let arr = [4,6,7,5,4,65,4];
// function revArray(arr){
//     let i =0;
//     let j= arr.length-1;
//     while(i<j){
//     arr[i]= arr[i]+arr[j];
//     arr[j]=arr[i]-arr[j];
//     arr[i]=arr[i]-arr[j]
//     i++;
//     j--;
//     }
//     return arr;
// }
// console.log(revArray(arr))

// let str = "babughosh"
// str=str.slice(1,-1)
// console.log(str) 

//find kth largest and smallest element in an array

// function largest(arr,k){
//     arr = arr.sort(function(a,b){
//         return a-b
//     });
//       return largest[k-1];

// }

// console.log(largest([7,10,4,3,20,15],3))



// Simple Javascript program to find K'th smallest element
 
// Function to return K'th smallest element in a given array




// function kthSmallest(arr,  K)
// {
    
//   arr.sort((a,b) => a-b);
 
//     return arr[K - 1];
// }
 
//  console.log( kthSmallest(arr, K));



