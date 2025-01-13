var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let i =0; i<prices.length; i++){
        if(minPrice>prices[i]){
            minPrice = prices[i]
        }else{
            maxProfit = Math.max(maxProfit , prices[i]-minPrice)
        }
    }
    return maxProfit;
    };