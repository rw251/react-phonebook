import React, { Component } from 'react';
import Contact from './Contact';
import './PhoneBook.css';

class PhoneBook extends Component {
  render() {
    return (
      this.props.contacts.length > 0
      ? <ul className="PhoneBook">
          {this.props.contacts
              .map((contact,i) => <Contact key={i} contact={contact} />)}
        </ul>
      : <div className="empty">No matching contacts</div>      
    )
  }
}

export default PhoneBook;