import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Profile extends Component {

    // (state can account for all data points attributed to it and be called on with this)
    state = {
        username:"",
        email:"",
        password:"",
        firstName:"", 
        lastName:"",
        oldUsername:""
    }
    //login
    async componentDidMount (){
            const uid = this.props.match.params.uid;
            const res = await axios.get(`/api/user/${uid}`);         
            if(res.data){
                this.showUser(res.data);
            } else {
            alert("No user found with these credentials.");
            }
        }
    
    // display
    showUser = (user) => {
        const  {username, email, firstName, lastName, password} = user;
        this.setState({
            username, 
            email, 
            firstName, 
            lastName, 
            password, 
            oldUsername: username
            });
        }    

        onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        onSubmit =  async e => {
            e.preventDefault();
            const {username, email, firstName, lastName, password, oldUsername} = this.state;      
                    if(username !== oldUsername) {
                    // check if username is available
                    const res = await axios.get(`/apt/user?username=${username}`);
                    if(res.data){
                        alert("This username is taken, please try something else.");
                        return;
                    }
                }                   
                const newUser = {
                        _id: this.props.match.params.uid,
                        username,
                        password,
                        email,
                        firstName,
                        lastName,
                        }
                        await axios.put("/api/user", newUser);
                        alert("Update Successful!")
                    } 
                
    render() {
        const {username, email, firstName, lastName} = this.state;
        return (
        <div>
            <nav className="navbar navbar-dark bg-primary fixed-top">
            <span className="navbar-brand mb-0 h1">Profile</span>
                <button className="btn" form="profileform" href="profile.html">
                    <i className="fas fa-check"></i>
                </button>
        </nav>
        <div className="container">
        <form id="profileForm" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="username">Username</label> 
                <input 
                placeholder="Enter Username" 
                className="form-control" 
                type="text" 
                id="username" 
                name="username"
                // use the brackets, nonstring varibles
                value={username}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label> 
                <input 
                placeholder="What's Your Email Address" 
                className="form-control" 
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
                placeholder="Enter Your First Name" 
                className="form-control" 
                type="text" 
                id="firstName" 
                name="firstName" 
                value= {firstName}
                onChange={this.onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="LastName">Last Name</label>
                <input 
                placeholder="Enter Your Last Name" 
                className="form-control" 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={lastName}
                onChange={this.onChange}
                />
            </div>

            
                <Link 
                    className="btn btn-primary btn-block" 
                    to={`/user/${this.props.match.params.uid}/website`} >
                        Websites
                </Link>
                <Link 
                    className="btn btn-danger btn-block" 
                    to="/login">
                Logout
                </Link>                  
        </form>
    </div>
    <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <Link to="/user/123">
            <i className="fas fa-user" />
        </Link>
    </nav>
    </div>
        );
    }
}