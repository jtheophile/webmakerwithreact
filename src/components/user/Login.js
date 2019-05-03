import React, { Component } from "react";
import { Link } from "react-router-dom";

// we create the login class (child class of react component class)...gives components default features it should have
export default class Login extends React.Component {
    render() {
        return (
            <div className="container">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label for="username">Username</label> 
                    <input placeholder="Enter Username" className="form-control" type="text" id="username" name="username" />
                </div>
    
                <div className="form-group">
                    <label for="password"> Password</label>
                    <input placeholder="Password" type="password" className="form-control" type="text" id="password" name="password" />
                </div>
                <Link className="btn btn-success btn-block" to="/user/123">Login</Link>
                <Link className="btn btn-primary btn-block" href="register.html">Register</Link>
            </form>
        </div>  
        )
    }
}