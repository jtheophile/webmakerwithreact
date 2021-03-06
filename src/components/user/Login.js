import React, { Component } from "react";
import  { Link } from  "react-router-dom";
import axios from "axios";

// we create the login class (child class of react component class)...gives components default features it should have
export default class Login extends Component {

    state = {
        username: "",
        password: "",
        showAlert: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showAlert: false
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;
        const user = {
            username,
            password
        }
        this.login(user);
    }

    login = async user => {
        try {
            const res = await axios.post('/api/login', user);
            this.props.history.push(`/user/${res.data._id}`);
        } catch {
            this.setState({
                showAlert: true
            })
        }
        // show me the info if it matches
        // const res = await axios.post('/api/login', user);
        // if(res.data) {
        //     this.props.history.push(`/user/${res.data._id}`);
        // } else {
        //     alert("invalid credentials, please try again");
        //     }
        // 
    }

    render() {
        return (
            <div className="container">
            <h1>Login</h1>
                {
                    this.state.showAlert?
                    (<div className="alert alert-danger">Your credentials don't match</div>): null
                }

                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label> 
                    <input 
                        placeholder="Enter Username" 
                        className="form-control" 
                        type="text" 
                        id="username" 
                        name="username"
                        value={this.state.username}
                        onChange = {this.onChange}
                        />
                </div>    
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        className="form-control" 
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange = {this.onChange}
                        />
                </div>
                <button className="btn btn-success btn-block">
                Login
                </button>
                <Link className="btn btn-primary btn-block" to="/register">
                    Register
                </Link>
            </form>
        </div>  
        );
    }
}