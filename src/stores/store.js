import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import bitCoinReducer from './bitCoin/reducers'
import contactReducer from './contacts/reducers'
import userReducer from './user/reducers'

const rootReducer = combineReducers({
    contact: contactReducer,
    user: userReducer,
    bitCoin : bitCoinReducer
})



const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export default store