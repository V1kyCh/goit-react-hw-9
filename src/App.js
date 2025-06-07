import { Component } from 'react';
import './App.css';

import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

import { customAlphabet } from 'nanoid';
const hexId = customAlphabet('0123456789abcdef', 6);

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    if(contacts) {
      this.setState({contacts: JSON.parse(contacts)})
    }
  }

    componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, num) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert('Це імʼя вже додано')
      return
    }
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