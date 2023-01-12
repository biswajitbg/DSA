// make sure all input of secquesnc
// => Array => readLine().split(' ').map(Number); if geven array of integer
// => Array => readLine().split(' '); if geven array of string
// => Number => parseInt(readLine());
// => String => readLine();


// 1. string split by space into words


// function sentWord(str){
//    return str.split(' ').join(' \n')
// }

// console.log(sentWord("how are you"))



//another method
// function stow(str){
//     arr = str.split(' ')
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i])
//     } return ''
// }
// console.log(stow("how are you"))



//count divisible pairs in an array

// function divPairs(arr){
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]%arr[i]==0){
//                 count++;
//             }

//         }
//     } return count;
// }


// console.log(divPairs([1,2,3,4]))




function merge (arr1,arr2){
    let result =[];
    let i=0;
    let j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i]);
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


 function mergeSort(arr){
    if(arr.length<=1) return arr; // base case
//divide
let mid = Math.floor(arr.length/2)//fid middle
let right = mergeSort(arr.slice(mid));//find right


let left = mergeSort(arr.slice(0,mid)); //find left

return merge(left,right);

}
console.log(mergeSort([7,4,5,6,3,36,9,8,]))



function even(L,R){
    if(R<L) return;



if(R%2==1){
    even(L,R-2)
    


}else{
    even(L,R-1);
}
if(R%1==0){
    console.log(R + " ")

  }
}  
console.log(even(16,30))





