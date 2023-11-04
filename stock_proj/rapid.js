const axios = require('axios');

const apiKey = 'AHWNG05CHF73W0IQ';
const symbol = 'RELIANCE';


const apiUrl = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=SBIN.NSE&apikey=AHWNG05CHF73W0IQ`;

axios
    .get(apiUrl)
    .then((response) => {
        const data = response.data;
        // Process the data as needed
        console.log(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });