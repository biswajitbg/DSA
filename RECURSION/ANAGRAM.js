//"hello" => "ollhe"  angram
//"bat" => "cat" not a anagram
// T.C => O(2n)


// function isAnagram(S1,S2){
//     if(S1.length!==S2.length){
//         return "length does not match";
//     }
//     let counter = {};
//     for(let letter of S1){
//         counter[letter] = (counter[letter]||0)+1
//         //console.log(counter)
//     }
//     for(let item of S2){
//         if(!counter[item]){
//             return false;
//         }
//          counter[item]-=1
//     }
//     return true;
// }
// console.log(isAnagram("bats","cat"))



function isAnagram(s1,s2){
    let counter = {};
    if(s1.length!==s2.length){
        return false;
    }
    for(let letter of s1){

        counter[letter] = (counter[letter] ||0) +1
        //console.log(counter)
    }

    for(let items of s2){
        if(!counter[items]){
            return false;

        }else{
            counter[items]-=1;
        }
    }
    return true;
}
console.log(isAnagram('bat','cat'))