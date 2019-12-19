import React from 'react';
import '../style/global.scss'

export class ContactPreview extends React.Component {

    render() {
        const { contact } = this.props
        return (
            contact && <div className="contact-preview">
                <div>
                <img src={`https://robohash.org/${contact._id}?set=set5`} alt="profile"/>
                </div>
                <h1>{contact.name}</h1>
            </div>
        )
    }
}