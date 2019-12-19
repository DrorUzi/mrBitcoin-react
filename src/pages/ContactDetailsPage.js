import React from 'react';
import '../style/global.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadCurrContact } from '../stores/contacts/actions'

class ContactDetailsPage extends React.Component {

    async componentDidMount() {
        const { id } = this.props.match.params
        this.props.loadCurrContact(id)
    }

    render() {
        const { contact } = this.props
        return (
            contact && <section className="contact-details">
                <img src={`https://robohash.org/${contact._id}?set=set5`} alt="profile" />
                <h1>Name: {contact.name}</h1>
                <h1>Phone: {contact.phone}</h1>
                <h1>Email: {contact.email}</h1>
                <Link to={`/contact/edit/${contact._id}`}>Edit profile</Link>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        contact: state.contact.currContact
    }
}

const mapDispatchToProps = {
    loadCurrContact
}


export default connect(
    mapStateToProps,
    mapDispatchToProps

)(ContactDetailsPage)