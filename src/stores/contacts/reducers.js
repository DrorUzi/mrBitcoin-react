const INITIAL_STATE = {
    currContact: null,
    contacts: []
}

export default function contactReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURR_CONTACT':
            return {
                ...state,
                currContact : action.contact
            }
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts : action.contacts
            }
        case ' SAVE_CONTACT': 
        const idx = state.contacts.findIndex(currContact => currContact._id === action.contact._id)
        return {
            ...state,
            contacts : [
                ...state.contacts.splice(idx, 1, action.contact)
            ]
        }
        default:
            return state
    }
}