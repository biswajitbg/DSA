




const merge = function(arr1,arr2){
    let result = [];
    let i=0;
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
    }
    return result;
}

 var mergeSort = function(arr){

    if(arr.length<=1) return arr;
    //divide
let mid = Math.floor(arr.length/2);
let right = mergeSort(arr.slice(mid));
let left = mergeSort(arr.slice(0,mid));
return merge(left,right);
}
console.log(mergeSort([3,4,1,2,0,7,6,5]))