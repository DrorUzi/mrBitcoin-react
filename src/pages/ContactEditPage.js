import React from 'react';
import '../style/global.scss'
import { loadCurrContact,saveContact } from '../stores/contacts/actions'
import {connect} from 'react-redux';

class ContactEditPage extends React.Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
        await this.props.loadCurrContact(id)
        const {contact} = this.props
         this.setState({contact})
        }
    }
    saveContact = async (ev) => {
        ev.preventDefault()
        await this.props.saveContact(this.state.contact)
        this.props.history.push('/contact')
    }

    updateContact = (ev, field) => {
        const { value } = ev.target
        this.setState(prevState => {
            return {
                contact: {
                    ...prevState.contact,
                    [field]: value
                }
            }
        })
    }
    render() {
        const { contact } = this.state
        return (<>
           {contact && <section className="contact-edit-container">
            {contact._id && <h1>Edit your profile</h1>}
            {!contact._id && <h1>New Contact</h1>}
                <form onSubmit={this.saveContact}>
                    <label> Name:
                    <input value={contact.name} onChange={(ev) => this.updateContact(ev, 'name')} type="text" />
                    </label>
                    <label> Phone:
                    <input value={contact.phone} onChange={(ev) => this.updateContact(ev, 'phone')} type="text"/>
                    </label>
                    <label> Email:
                    <input value={contact.email} onChange={(ev) => this.updateContact(ev,'email')} type="email"/>
                    </label>
                    <button>
                        Save Contact
                    </button>
                </form>
            </section>}
        </>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        contact : state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadCurrContact,
    saveContact
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactEditPage)