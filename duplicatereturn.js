//print the duplicate element in the array
//ex:- arr = [3,4,4,5,6,22,2,2] answer is arr =[3,4,2]
//here we using has Map()

// function duplicates(arr){
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         if(map.get (arr[i])==undefined) map.set(arr[i], 1 );
//         else map.set(arr[i]  ,   map.get(arr[i]) +1); 
//         //console.log(map);       
//     }
//     let answer = []
//     for(let pairs of map){
//         if(pairs[1]>1) answer.push(pairs[0])
//     } return answer;

// }
// console.log(duplicates([3,4,3,5,6,7,2,2,3,4,5,6]))



//filter the duplicate element and get the unique element


function uniqueElement(arr){
    let map = new Map()

    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])==undefined){
            map.set(arr[i] ,1)
        } else{
            map.set(arr[i] , map.get(arr[i]) +1)
        }
    }
    let a =[]
    for(let pairs of map){
    if(pairs[1]==1)  a.push(pairs[0])
                     
    }return a;
        
}

console.log(uniqueElement([3,4,3,5,6,7,2,2,3,4,5,0]))


// function unique(arr){
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         if(map.get(arr[i])== undefined) map.set(arr[i] , 1)
          
   

// }



// }
// console.log(unique([3,4,3,5,6,7,2,2,3,4,5,0]))
