import React, { Component } from 'react';
import './App.css';
import api from './api';
import Header from './components/Header';
import SearchBox from './components/Search';
import AddContact from './components/AddContact';
import Sorter from './components/Sorter';
import PhoneBook from './components/PhoneBook';

class App extends Component {
  state = {
    searchString: '',
    sortDirection: -1,
    contacts: null,
  }

  componentDidMount() {
    this._asyncRequest = api.phonebook().then(
      data => {
        this._asyncRequest = null;
        this.setState(data);
      }
    ); 
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest = null;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <div style={{display: 'flex'}}>
            <SearchBox 
              onTextChange={text => this.setState({searchString: text.toLowerCase()})}/>
            <AddContact />
            <Sorter 
              direction={this.state.sortDirection} 
              onSort={() => this.setState({sortDirection: -1 * this.state.sortDirection})} />
          </div>
          {
            this.state.contacts 
            ? <PhoneBook contacts={this.state.contacts
                .filter((contact)=>contact.name.toLowerCase().indexOf(this.state.searchString)>-1)
                .sort((a,b)=>{
                  if(a.name > b.name) return this.state.sortDirection * -1
                  if(a.name < b.name) return this.state.sortDirection * 1
                  return 0;
                })} />
            : <div>Loading...</div>
          }
        </div>
      </div>
    );
  }
}

export default App;
