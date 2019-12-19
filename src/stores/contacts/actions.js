import ContactService from '../../services/ContactService';

const setCurrContact = (contact) => {
    return {type :'SET_CURR_CONTACT', contact}
}
export const loadCurrContact = (id) => {
    return async (dispatch) => {
        const contact = await ContactService.getContactById(id)
        return dispatch(setCurrContact(contact))
    }
}

const setContacts = (contacts) => {
    return {type: 'SET_CONTACTS', contacts}
}

export const loadContacts = (filterBy) => {
    return async (dispatch) => {
        const contacts = await ContactService.getContacts(filterBy)
        return dispatch(setContacts(contacts))
    }
}

const saveNewContact = (contact) => {
    return {type: 'SAVE_CONTACT', contact}
}
export const saveContact = (contact) => {
    return async (dispatch) => {
        const newContact = await ContactService.saveContact(contact)
        return dispatch(saveNewContact(newContact))
    }
}