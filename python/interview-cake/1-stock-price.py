# https://www.interviewcake.com/question/python/stock-price
# Opening time 9:30 AM
stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

get_max_profit(stock_prices_yeterday) #returns 6, buy for 5 and sell for 11

# Pseudocode
# for each price, get difference between current price and max of remaining prices, if value is greater than past difference, replace value

def get_max_profit(stock_prices):
    if len(stock_prices) < 2:
        raise IndexError('Getting a profit requires at least 2 prices.')
    min_price = stock_prices[0]
    max_profit = stock_prices[1] - stock_prices[0]
    maxProfit = 0

    for index, current_price in enumerate(stock_prices_yesterday):
        if index == 0:
            continue
        potential_profit = current_price - min_price
        max_profit = max(max_profit, potential_profit)
        min_price = min(min_price, current_price)
    return max_profit
