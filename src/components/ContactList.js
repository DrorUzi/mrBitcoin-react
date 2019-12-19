import React from 'react';
import '../style/global.scss';
import {Link} from 'react-router-dom'
import {ContactPreview} from './ContactPreview'

export class ContactList extends React.Component {
    render() {
        const { contacts } = this.props
        return (
            contacts && <section className="contacts-list">
                
                {  
                    contacts.map(contact => <Link to={`/contact/${contact._id}`} key={contact._id}><ContactPreview  contact={contact} ></ContactPreview></Link>)
                }
            </section>
        )
    }
}