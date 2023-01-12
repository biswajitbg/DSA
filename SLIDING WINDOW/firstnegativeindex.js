// function printFirstNegativeInteger(arr, k) {
//     let firstNegativeIndex = 0;
//     let firstNegativeElement;


//     for (let i = k - 1; i < arr.length; i++) {

//         // skip out of window and positive elements
//         while ((firstNegativeIndex < i) &&
//             (firstNegativeIndex <= i - k ||
//                 arr[firstNegativeIndex] >= 0)) {
//             firstNegativeIndex++;
//         }

//         // check if a negative element is found, otherwise use 0
//         if (arr[firstNegativeIndex] < 0) {
//             firstNegativeElement = arr[firstNegativeIndex];
//         }
//         else {
//             firstNegativeElement = 0;
//         }
//           console.log(firstNegativeElement ) 
//     }

// }

// console.log(printFirstNegativeInteger([12, -1, -7, 8, -15, 30, 16, 28] , 3) )


// First negative element in given window 

// time complexity = O(n)


function negative(arr,k){
   let  firstNegativeElement ;
     let firstNegativeIndex =0;

     for(let i = k-1 ;i<arr.length;i++){

        while((firstNegativeIndex<i) && (firstNegativeIndex<=i-k || arr[firstNegativeIndex]>= 0)){

            firstNegativeIndex++;

        }
        //if negative found otherwise 0
        if(arr[firstNegativeIndex]<0){
            firstNegativeElement = arr[firstNegativeIndex];

        }else{

            firstNegativeElement =0

        }
        console.log(firstNegativeElement)
       
       
     }
     
}

console.log(negative([12, -1, -7, 8, -15, 30, 16, 28] , 3))