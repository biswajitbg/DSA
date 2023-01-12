 //in descending order
 
    // function to print half of the array in
    // ascending order and the other half in
    // descending order
    function printOrder(arr)
    {
        
        arr.sort();
 
       
        for (let i = 0; i < (arr.length/ 2); i++)
            console.log(arr[i] );
 
        
        
        for (let j = arr.length - 1; j >= (arr.length / 2); j--)
            console.log(arr[j] );
 
    }
 
    // Driver code
     
        var arr = [ 5, 4, 6, 2, 1, 3, 8, 9, 7 ];
        //var n = arr.length;
        printOrder(arr);