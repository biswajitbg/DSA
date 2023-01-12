function hcf(n1,n2){
    let hcf =0;
    for (let i=0;i<=n1 && i<=n2;i++){
        if(n1%i ==0 && n2%i==0){
            hcf =i;
        }
    }
    return hcf;
}
console.log(hcf(12,24))