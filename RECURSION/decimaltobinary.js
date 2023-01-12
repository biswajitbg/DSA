//decimal to binary


function btoc(num){
    let bNumber =0;
    let count =0;
    while(num!==0){
        let rem = num%2;
        let c = Math.pow(10 ,count)
        bNumber = bNumber+rem*c;
        num = Math.floor(num/2);
        count++;

    }
    return bNumber;
}
console.log(btoc(10))



