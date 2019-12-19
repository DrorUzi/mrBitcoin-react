import UserService from '../../services/UserService'

const setCurrUser = (user) => {
    return {type: 'SET_CURR_USER', user}
}

export const loadCurrUser = () => {
    return async (dispatch) => {
        const user = await UserService.getUser()
        console.log(user,'actions');
        return dispatch(setCurrUser(user))
        
    }
}