//MERGE SORT 
//T.C => O(nlogn)
//S.C => O(n)
// const merge = function(arr1,arr2){
//     let result =[];
//     let i=0;
//     let j=0;

//      while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<=arr2[j]){
//             result.push(arr1[i]);
//             i++;
//         }else{
//             result.push(arr2[j])
//             j++;
//         }

//     } 
//     while(i<arr1.length){
//         result.push(arr1[i])
//         i++;
//     }
//     while(j<arr2.length){
//         result.push(arr2[j])
//         j++;
//     }
//     return result;    
// }


//  var mergeSort=function(arr){
//     if(arr.length<=1) return arr; // base case
// //divide
// let mid = Math.floor(arr.length/2)//fid middle
// let right = mergeSort(arr.slice(mid));//find right
// let left = mergeSort(arr.slice(0,mid)); //find left
// return merge(left,right);

// }
// console.log(mergeSort([7,4,5,6,3,36,9,8,]))



function conquer(arr1,arr2){
    let result = [];
    let i =0;
    let j =0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i])
            i++;
        }else{
            result.push(arr2[j])
            j++;
        }
    }

    while(i<arr1.length){
        result.push(arr1[i])
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++;
    }
    return result;
}

function divide(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = divide(arr.slice(0,mid));
    let right = divide(arr.slice(mid));
    return conquer(left,right)

}

console.log(divide([7,4,5,6,3,36,9,8]))

















