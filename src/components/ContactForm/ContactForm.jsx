import { Component } from "react";
import './ContactForm.scss'

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    addContact = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.name, this.state.number);
        this.setState({ name: '', number: '' });
    };

    render() {
        return <form onSubmit={this.addContact} className="form">
            <h2 className="Phonebook">Phonebook</h2>
            <div className="form-box">
                <div>
                    <label htmlFor="name-input" className="input-wrapper">
                        <input
                            className="styled-input"
                            onChange={(e) => this.setState({ name: e.target.value })}
                            type="text"
                            name="name"
                            id="name-input"
                            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                            placeholder=" " 
                        />
                        <span className="input-label">Імʼя контакту</span>
                    </label>

                </div>
                <div>
                    <label htmlFor="num-input" className="input-wrapper">
                        <input
                            className="styled-input"
                            onChange={(e) => this.setState({ number: e.target.value })}
                            type="tel"
                            name="number"
                            id="num-input"
                            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            value={this.state.number}
                            required
                            placeholder=" " 
                        />
                        <span className="input-label">Номер телефону</span>
                    </label>

                </div>
            </div>
            <button className="button" role="button" type='submit'>add contact</button>
        </form >
    }
}