//Find the maximum sum of any two elements in an array    [very important ]
// find the largest and second largest value in an array and sum those value
//T.C => O(n)


function twoMaxSum(arr){
    let largest =0;
    let secondLargest =0;

    for(let i=0;i<arr.length;i++){

        if(arr[i]>largest){
            secondLargest=largest;
            //console.log( secondLargest)
            largest= arr[i];
           // console.log("the largest is  "+largest)

        }else if(arr[i]>secondLargest){
            secondLargest=arr[i];
        }
    } return secondLargest;

}

console.log(twoMaxSum([5,4,6,8,33,-1]))