// reverse array in a group
//time complexity O(n)




    arr = [1,2,3,4,5,6,7,8,9]

    let k =3;


    for(let i=0;i<arr.length;i=i+k){
       
        left =i;
        right = Math.min(i+k-1, arr.length-1);
        let temp;

        while(left<right){
            temp = arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
            left++;
            right--;
        }

        for(i=0;i<arr.length;i++){
            console.log(arr[i])
        }


    }
      
    
        






