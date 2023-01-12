//given a sorted array return a pair of sum check whather it exist or not
// time complexity = O(n)

let arr =[2,3,4,5,6,7,8]
function twoSumPair(sum){
    let isPairExist = false;
    
    let left =0;
    let right =arr.length-1;
    

    while(left<right){
        if(arr[left]+arr[right]===sum){
            
            isPairExist =true;
            
            console.log("the sum of pair is  " +arr[left],  arr[right]);
         
            break;

        }
        else if(arr[left]+arr[right]>sum){
             
            right--;
        }else{
            left++;
        }

    } return isPairExist
        

        }

        console.log(twoSumPair(11))

        




        
    

    
  