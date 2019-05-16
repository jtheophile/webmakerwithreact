import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Profile extends Component {

    state = {
        username:"",
        email:"",
        password:"",
        firstName:"", 
        lastName:""
    }

    componentDidMount (){
        const uid = this.props.match.params.uid;
        // looking for user with given uid
        for (let user of this.props.users) {
            if(user._id === uid) {
                this.showUser(user);
                return;
            }

            alert("No user found with these credentials.")
        }
    }

        showUser = (user) => {
            const  {username, email, firstName, lastName, password} = user;
            this.setState({
                username, email, firstName, lastName, password
            });
        }
    

        onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        onSubmit = e => {
            e.preventDefault();
            const {username, email, firstName, lastName, password} = this.state;
            const newUser = {
                _id: this.props.match.params.uid,
                username,
                password,
                email,
                firstName,
                lastName
            }
            this.props.updateUser(newUser)

        }

    render() {
        const {username, email, firstName, lastName} = this.state;
        return (
        <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <span className="navbar-brand mb-0 h1">Profile</span>
                <button className="btn" form="profileform" href="profile.html">
                    <i className="fas fa-check"></i><span>Save Update</span>
                </button>
        </nav> 
        <form id="profileForm" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label> 
                <input 
                placeholder="Enter Username" 
                className="form-control" 
                type="text" id="username" 
                name="username"
                // use the brackets, nonstring varibles
                value={username}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label> 
                <input 
                placeholder="What's Your Email Address" className="form-control" 
                type="text" 
                id="email" 
                name="email" 
                value={email}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label> 
                <input 
                placeholder="Enter Your First Name" className="form-control" 
                type="text" 
                id="firstName" 
                name="FirstName" 
                value= {firstName}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="LastName">Last Name</label> 
                <input 
                placeholder="Enter Your Last Name" className="form-control" 
                type="text" 
                id="Lastname" 
                name="lastname" 
                value={lastName}
                onChange={this.onChange}
                />
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