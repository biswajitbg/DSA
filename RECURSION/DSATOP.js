//merge sort


function mergeSort(arr1,arr2){
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
    let right = divide(arr.slice(mid))
    let left = divide(arr.slice(0,mid))
    return mergeSort(left,right)
}

console.log(divide([2,4,5,9,6,0,7]))

//check a palindrom 
//a string is plaindrom or not
function isPalindrom(str){
    if(str.length<=1) return true;

    if(str[0]!==str.slice(-1)) return false;
    return isPalindrom(str.slice(1,-1))
}
console.log(isPalindrom("babu"))


// a number is palindrom or not.

function isPrl(num){
    if(num==0) return 0;
    
    let revNum = 0;
    while(num > 0){
    revNum = revNum*10 + num%10;
    num = Math.floor(num/10)
      
    }
    return revNum;
}   

console.log(isPrl(121))



// decimal to binary

// function decimalToBinary(N)
// {
 
//     // To store the binary number
//     var B_Number = 0;
//     var cnt = 0;
//     while (N != 0)
//     {
//         var rem = N % 2;
//         var c = Math.pow(10, cnt);
        
//         B_Number += rem * c;
//         console.log(B_Number)
//         N = parseInt(N/2);
 
//         // Count used to store exponent value
//         cnt++;
//     }
//     return B_Number;
// }
// console.log(decimalToBinary(10))






// function print(n){
//     if(n==0){
//         return
//     }
//       print(n-1)
//       console.log(n + " ")
    
// }
// console.log(print(5))

//find  common greatest GCD or HCF

function gcd(n1,n2){
    let hcf =0;
    for(let i =1; i<=n1 && i<=n2; i++){
        if(n1%i==0 && n2%i==0)
        hcf = i;
    }
    return hcf;
}
console.log(gcd(21,98))

