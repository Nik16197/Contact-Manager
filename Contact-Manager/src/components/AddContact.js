import React, { Component } from "react";

class Addcontact extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: ""
        }
    }

    nameOnchange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    emailOnchange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are mandatory");
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({
            name: "",
            email: ""
        })
    };

    render() {
        return (

            <div className="ui main">

                <h2>Add Contact</h2>

                <form className="ui form" onSubmit={this.add}>

                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.nameOnchange} />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email"
                            name="Email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.emailOnchange} />
                    </div>

                    <button className="ui button blue">Add</button>
                </form>

            </div>

        );
    }
}

export default Addcontact;