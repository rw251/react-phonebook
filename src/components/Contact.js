import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <li className="Contact">
        <div className="Contact-Title">{this.props.contact.name}</div>
        <div className="Contact-Sub">Phone: {this.props.contact.phone_number}</div>
        <div className="Contact-Sub">Address: {this.props.contact.address}</div>
      </li>
    )
  }
}

export default Contact;