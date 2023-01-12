

    // JavaScript Program to implement
    // the above approach
function permute(s,answer )
{  
    
    if (s.length == 0) {
        console.log(answer + " ")
    }
  
       
    for(let i = 0 ;i < s.length; i++)
    {
        let ch = s[i];
        let left_substr = s.slice(0, i);
        //console.log(left_substr)
        let right_substr = s.slice(i + 1);
        //console.log(right_substr)
        let rest = left_substr + right_substr;
     permute(rest, answer+ch);
    } 
   
}
console.log(permute(""))