import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="AddContact">
        <a 
          href='# '
          onClick={(e) => this.props.onSort()}>Add
          </a>
      </div>
    )
  }
}


export default AddContact;