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
                this.showUser(res.date);
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
            const {username, email, firstName, lastName, password, oldUsername} = this.state; {      
                    }
                    if(username !== oldUsername)
                    // check id username is available
                    const res = await axios.put("/api/user", newUser);

                    if(res.data){
                        alert("Sorry this username is taken, please try something else.");
                        return;
                    }
                }                   
                const  newUser = {
                        _id: this.props.match.params.uid,
                        username,
                        password,
                        email,
                        firstName,
                        lastName,
                        }
                        const res = await axios.put("/api/user", newUser);
                        alert("Update Successful.")
                        this.showUser(res.data);
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
                <Link className="btn btn-danger btn-block" to={`/user/:uid/website`} >Websites
                </Link>
                <Link className="btn btn-danger btn-block" to={`/user/123`}>
                Logout
                </Link>
            </div>      
        </form>
    </div>
      
       )
    }
}