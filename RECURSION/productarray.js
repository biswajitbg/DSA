function productArr(arr){
    if(arr.length===0) return 1;
    return arr[0]*productArr(arr.splice(1))
}
console.log(productArr([2,3,4]))

//sum of an array element

function sumArr(arr){
    if(arr.length===0) return 0;
    return arr[0]+sumArr(arr.splice(1))
}
console.log(sumArr([1,2,4,3]))

