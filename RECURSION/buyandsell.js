function buySell(prices){
    maxProfit = 0;
    minValue = Infinity;

    for(let i =0;i<prices.length;i++){
        minValue = Math.min(minValue,prices[i])
        maxProfit = Math.max(maxProfit,prices[i]-minValue)
    }
    return maxProfit;

}
console.log(buySell([7,1,5,3,7,4]))