import React, { Component } from "react";

class Addcontact extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: ""
        }
    }

    nameOnchange = () => {

    }

    render() {
        return (

            <div className="ui main">

                <h2>Add Contact</h2>

                <form className="ui form">

                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" onChange={this.nameOnchange} />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="Email" placeholder="Email" />
                    </div>

                    <button className="ui button blue">Add</button>
                </form>

            </div>

        );
    }
}

export default Addcontact;