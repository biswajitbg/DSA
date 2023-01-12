function Sort(array) {
    var done ;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
      return array;
  }
  
  var numbers = [0,1,0];
  Sort(numbers);
  console.log(numbers);


// All negative number in one side


  function reArrange(arr){
     let j =0;
     for (let i =0;i<arr.length;i++){
        if(arr[i] <0){
          if(i !=j){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j]=temp;

          }
          j++;
        }
     }
     return arr;
  }

  console.log(reArrange([-1, 2, -3, 4, 5, 6, -7, -8, 9]))
  