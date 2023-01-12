// let arr = [21, 2, 3, 4,6,7,8,9, 11, 2, 97,  11, 20];

// function minMax(arr){
//    // arr=arr.sort((a,b)=>a-b)

//     let min = arr[0];
//     let max = arr[0];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//         else if(arr[i]>max){
//             max = arr[i];
//         }
//     }
    
//     let result = {
//         "minimum" : min,
//         "maximum": max
//     }
//     return result;
// }

// console.log(minMax(arr))



let arr = [2,3,7,0,-1,6,89]

function minAndMax(arr){
    let min = arr[0];
    let max = arr[0];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]

        }
        else if(arr[i]>max){
            max = arr[i]
        }

        
    }

    let result ={
        "minimum" : min,
        "maximum" : max
    
    }
    return result;

}
console.log(minAndMax(arr))