import { Component } from 'react';
import './App.css';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid';
const hexId = customAlphabet('0123456789abcdef', 6);

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (name, num) => {
    const newContact = {
      name: name,
      number: num,
      id: hexId()
    }
    console.log(name, num)
    const updatedContacts = [...this.state.contacts, newContact];
    this.setState({
      contacts: updatedContacts
    });
  }

  filteredContact = (contact) => {
    this.setState({ filter: contact })
  }

  filteredContacts = () => {
    if (!this.state.filter.toLowerCase()) {
      return this.state.contacts;
    }
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  render() {
    const filteredContacts = this.filteredContacts();

    return (
      <div className="App">
        <ContactForm addContact={this.addContact} />
        <h2 className="middle-title">Contacts</h2>
        <Filter filteredContact={this.filteredContact} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;