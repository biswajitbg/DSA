//reverse each word of a string in a given manner(HIGH CHANCES IN INTERVIEW)

//ex:- "hi to all"   => output is ====>  "ih ot lla"



let reverse= function (str){
    if(str.length<=1) return str;

 return reverse(str.slice(1))+str[0];
}

console.log(reverse("babu"))

let revSent= function(sent){
    let words = sent.split(" ");
    console.log(words)
    for(let i=0;i<words.length;i++){
        words[i]=reverse(words[i]);

    }
    return words.join(" ")
}

console.log(revSent("hi to all"));


