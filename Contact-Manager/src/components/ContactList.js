import React, { Component } from "react";
import ContactCard from "./Contactcard";

const ContactList = (props) => {

    const renderedContactList = props.contacts.map((con) => {
        return <ContactCard contactcard={con} />
    });

    return (
        <div className="ui celled list">
            {renderedContactList}
        </div>
    );
}

export default ContactList;