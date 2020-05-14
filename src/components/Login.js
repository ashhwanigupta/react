import React, { Component } from 'react'

import NavBarManu from "./NavBarManu";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            password: ""
        }
    }

    login() {
        console.warn(this.state);
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp);
                if (resp.length > 0) {
                    localStorage.setItem('login', JSON.stringify(resp))
                    console.warn(this.props.history.push('list'));

                }
                else {
                    alert("Please check the Username and Password")
                }
            })
        })
    }

    render() {
        return (
            <div>
                <NavBarManu />
                <input name="user" placeholder="Enter Name" type="text" onChange={(event) => this.setState({ name: event.target.value })} /> <br /><br />
                <input name="password" placeholder="Enter Password" type="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br /><br />
                <button onClick={() => { this.login() }}>Login</button>
            </div>
        )
    }
}

export default Login;