import React, { Component } from 'react';
import './Sorter.css';

class Sorter extends Component {
  render() {
    return (
      <div className="Sorter">
        <a 
          href='# '
          onClick={(e) => this.props.onSort()}>Sort {this.props.direction === 1 ? 'ascending' : 'descending'}
          </a>
      </div>
    )
  }
}


export default Sorter;