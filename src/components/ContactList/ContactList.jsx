import { Component } from "react";
import './ContactList.scss'

export class ContactList extends Component {
    deleteContact = (e) =>{
        e.preventDefault()
        this.props.deleteContact(e.target.parentElement.id)
    }
    render() {
        return <ul className="contact-list">
            {this.props.contacts.map((el, indx) => {
                return <li key={indx} id={el.id} className="contact-item">
                    <span className="contact-text">{el.name}: {el.number}</span>
                    <button className="contact-delete-btn" onClick={this.deleteContact}>delete</button>
                </li>
            })}
        </ul>
    }
}