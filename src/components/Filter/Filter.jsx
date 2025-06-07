import { Component } from "react";
import './Filter.scss'

export class Filter extends Component {
    state = {
        filter: ''
    }
    findContact = () => {
        this.props.filteredContact(this.state.filter)
    }

    render() {
        return <>
            <h3 className="find-contacts-title">find contacts by name</h3>
            <div className="input-wrapper">
                <input
                    type="text"
                    className="styled-input"
                    placeholder=" "
                    onChange={(e) => this.setState({ filter: e.target.value }, () => this.findContact())}
                />
                <label className="input-label">find contacts by name</label>
            </div>

        </>
    }
}