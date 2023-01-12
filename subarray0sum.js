function subArrayExists(arr){
    const map = new Map();
    let preSum = 0;
    for (let i=0;i<arr.length;i++){
        
        map.set(preSum);
        preSum = preSum+arr[i];
        //console.log(preSum)
        
        
        if(map.get(preSum)){
            
            return "yes";
        }
        
       
          
    
    
}
  return "no";

}

console.log(subArrayExists([4, 2, -3, 1, 6]))