// find the longest substring length without repeating any character

// time complexity O(n)
//var S = "peweeww";
// var longString=function(S){

     
//     if(!S){
        
//         return 0;
//     }
    
//     let start =0;
//     let end =0;
//     let maxLength =0;
    
//     const uniqueCharacter = new Set();

//     while(end<S.length){
//         if(!uniqueCharacter.has(S[end])){
//             uniqueCharacter.add(S[end]);
//               end++;

            
         
//             maxLength= Math.max(maxLength,uniqueCharacter.size);
//         }else{
//             uniqueCharacter.delete(S[start]);
//             start++;


//         }
//     }
//      return maxLength;
// }
// console.log(longString("pexwxeeww"))


function longestChae(S){
    let start = 0;
    let end = 0;
    let maxLength =0;
    let uniqueChar = new Set()
    while(end<S.length){
        if(!uniqueChar.has(S[end])){
            uniqueChar.add(S[end])
            //console.log(uniqueChar)
            end++;
            maxLength= Math.max(maxLength,uniqueChar.size)
        }else{
            uniqueChar.delete(S[start])
            start++;
        }
    }
    return maxLength
}
console.log(longestChae("peewwxxyeeek")) 