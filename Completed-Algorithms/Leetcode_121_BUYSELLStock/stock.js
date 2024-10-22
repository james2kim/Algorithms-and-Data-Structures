/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0;
    prices.slice(1).forEach(price => {
            const profit = price - minPrice
            if(profit > 0 &&  profit > maxProfit) {
                maxProfit = profit
            }
            if(price < minPrice) {
                minPrice = price
            }
    })
    return maxProfit
};
