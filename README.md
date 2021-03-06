# Stock Simulator

Stock Simulator is a full stack project of mine, meant to introduce users to the stock market.
Users will be able to search for stocks, buy and sell stocks, add those stocks to their own portfolios, and able to see visualizations of their portfolios.

One important note is that the prices of stocks are not accurate due to IEX cloud API being used currently
is meant for testing, and not production use. Sometime in the future I will change it to production use, then values will be accurate.

## Features

1. Users will be able to login with Google, Facebook, or guest login. (More login strategies will be introduced in the future)

2. Users will be able to create portfolios where they can add stocks. 

3. Users will be able to search for stocks using the search bar located in the header.

4. Users will be able to purchase and sell searchable stocks. Users will be able to see the last year worth of prices for a stock.

5. Users will be able to see a pie chart which represents the total value of their portfolio.

6. Users will be able to logout and have their portfolios with stocks saved. 

## Technologies Used

- React
- Javascript
- PostGRE SQL
- Express Node
- NextJS
- Material UI
- Recharts (For graphs)
- Passport
- Sass

## Road map

 - Implement backend testing with Jest. 
 - Visualize user portfolio with a line chart, which will show the value of their portfolio on different days. 
 - Perhaps utilize Sequelize to improve pg sql queries. 
 - Intuitive variable naming
 - Remove all uses of Yahoo Finance API. 
 - Remove tickers that are not up to date.
 - Add custom error page.
 - Change placeholders for company logos from a white box to actual logo. 
 - Reset guest on a set interval.
 - Create a logo for the site.
 - Verify application on Google and FaceBook for sign in.
 - Fix error where selling share affects percentage