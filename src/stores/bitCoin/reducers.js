const INITIAL_STATE = {
    rate: null,
    marketPrice: null,
    transactions:null
}

export default function bitCoinReducer(state = INITIAL_STATE,action){
    switch (action.type){
        case 'SET_RATE':
            return {
                ...state,
                rate: action.rate
            }
        case 'SET_MARKET_PRICE':
            return {
                ...state,
                marketPrice: action.marketPrice
            }
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.transactions
            }
        default: 
        return state
    }
}