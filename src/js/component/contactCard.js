import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);

    return (
        <div className="contact-card">
            <h2>{contact.full_name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
            <button onClick={() => actions.deleteContact(contact.id)}>Delete</button>
            <button onClick={() => {/* Handle edit functionality */}}>Edit</button>
        </div>
    );
};

export default ContactCard;
