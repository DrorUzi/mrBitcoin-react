import axios from 'axios';

export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getMarketPrice(){

    const priceChart = await axios.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true')
    return priceChart.data
}

async function getConfirmedTransactions(){
    const transChart = await axios.get('https://api.blockchain.info/charts/median-confirmation-time?timespan=1months&format=json&cors=true')
    return transChart
}
async function getRate(){
   const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1&cors=true`);
   return rate.data;
}