function tripleSum(arr,target){
    arr=arr.sort((a,b)=>a-b)
    for(let i=0; i<arr.length; i++){
        let j=i+1
        let k=arr.length-1
        while(j<k){
            if(arr[i]+arr[j]+arr[k]<target){
                j++
            }else if(arr[i]+arr[k]+arr[j]>target){
                k--
            }else{
                return [arr[i],arr[j],arr[k]]
            }
        }
    }return false
}
console.log(tripleSum([4,6,7,43,9,11,14,15],27))