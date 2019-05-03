import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Profile extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link to="/user/:uid" className="navbar-brand mb-0 h1" 
            >Profile</Link>
            <Link to="/user/:uid" className="fas fa-check"></Link>
        </nav> 
        <form>
            <div className="form-group">
                <label for="username">Username</label> 
                <input placeholder="Enter Username" className="form-control" type="text" id="username" name="username" />
            </div>
            <div className="form-group">
                <label for="email">Email</label> 
                <input placeholder="What's Your Email Address" className="form-control" type="text" id="email" name="email" />
            </div>
            <div className="form-group">
                <label for="firstName">First Name</label> 
                <input placeholder="Enter Your First Name" className="form-control" type="text" id="firstName" name="FirstName" />
            </div>
            <div className="form-group">
                <label for="LastName">Last Name</label> 
                <input placeholder="Enter Your Last Name" className="form-control" type="text" id="Lastname" name="lastname" />
            </div>
            <div>
                <Link to="/user/:uid/website" className="btn btn-primary btn-block">Websites</Link>
                <Link to="/Login" className="btn btn-danger btn-block">Logout</Link>
            </div>      
        </form>
    </div>
    // <nav className="navbar navbar-dark bg-primary fixed-bottom">
    //         <a className= "navbar-brand"></a>
    //         {/* <i className= "fas fa-user" style=color:white></i> */}
    //   </nav>         
       )
    }
}