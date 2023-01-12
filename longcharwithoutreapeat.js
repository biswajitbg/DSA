//find the longest character without repeating any character



var longChar= function(S){
    if(!S){
        return 0;
    }

    start =0;
    end =0;
    maxLength =0;

    let uniqChar = new Set();
    while(end<S.length){
        if(!uniqChar.has(S[end])){
            uniqChar.add(S[end])
            end++;
            maxLength = Math.max(maxLength,uniqChar.size)
        }else{
            uniqChar.delete(S[start])
            start++;
        }
    } return maxLength;
}

console.log(longChar(""))