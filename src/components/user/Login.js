import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isTSEntityName } from "@babel/types";

// we create the login class (child class of react component class)...gives components default features it should have
export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
    login = user => {
        for (let item of this.props.users) {
            if(item.username === user.username && item.password === user.password) {
                // will bring them to their profile page
                this.props.history.push("/user/" +item._id);
            return;
            }
        }
        alert("No records don't match our records")
    }

    render() {
        return (
            <div className="container">
            <h1>Login</h1>
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
                    <label for="password"> Password</label>
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
                <button className="btn btn-success btn-block" onClick={this.login}>Login</button>
                <button className="btn btn-primary btn-block">Register</button>
            </form>
        </div>  
        )
    }
}