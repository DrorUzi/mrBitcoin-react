
import React from 'react';
import { ContactList } from '../components/ContactList'
import '../style/global.scss'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {loadContacts} from '../stores/contacts/actions'

class ContactPage extends React.Component {
    async componentDidMount() {
        this.props.loadContacts()
    }
    async handleFilter(value) {
        var filterBy = {
            term: value
        }
        this.props.loadContacts(filterBy)
       
    }

    render() {
        const { contacts } = this.props
        return (<>

            {contacts && <section className="list-container">
                <h1 className="list-header">Contact List</h1>
            <div className="filter-add">
                <Link className="add-btn" to={'/contact/edit'}>Add contact</Link>
                <input className="filter-input" placeholder="Find contact   &#128270;" type="text" onChange={(ev) => this.handleFilter(ev.target.value)} />
                </div>
                <ContactList contacts={contacts} />
            </section>}

        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts : state.contact.contacts
    }
}

const mapDispatchToProps = {
    loadContacts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactPage)