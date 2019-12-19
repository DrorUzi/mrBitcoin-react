import BitcoinService from '../../services/BitcoinService'


const setRate = (rate) => {
    return {type:'SET_RATE', rate}
}

export const loadRate = () => {
    return async (dispatch) => {
        const rate = await BitcoinService.getRate()
        return dispatch(setRate(rate))
    }
}

const setMarketPrice = (marketPrice) => {
    return {type: 'SET_MARKET_PRICE', marketPrice}
}
export const loadMarketPrice = () => {
    return async (dispatch) => {
        const marketPrice = await BitcoinService.getMarketPrice()
        return dispatch(setMarketPrice(marketPrice))
    }
}

const setTransactions= (transactions) => {
    return {type : 'SET_TRANSACTIONS',transactions}
}

export const loadTransactions = () => {
    return async (dispatch) => {
        const transactions = await BitcoinService.getConfirmedTransactions()
        return dispatch(setTransactions(transactions))
    }
}