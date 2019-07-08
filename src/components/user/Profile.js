import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../utility/Footer";
import Navbar from "../utility/Navbar"

export default class Profile extends Component {

    // (state can account for all data points attributed to it and be called on with this)
    state = {
        username:"",
        email:"",
        password:"",
        firstName:"", 
        lastName:"",
        oldUsername:"",
        role: ""
    }
    
    async componentDidMount (){
        const isLoggedIn = await this.props.loggedIn();
        if(isLoggedIn ===0) {         //if it is 0, navigate back to the login page
            this.props.history.push("/login"); 
            return;
        }
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
        const  {username, email, firstName, lastName, password, role} = user;
        this.setState({
            username, 
            email, 
            firstName, 
            lastName, 
            password, 
            oldUsername: username,
            role
            });
        };    

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
                    const res = await axios.get(`/api/user?username=${username}`);
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
                        lastName
                        }
                        await axios.put("/api/user", newUser);
                        alert("Update Successful!")
                    }
    //log out function
    logout = async () => {
        await axios.post("/api/logout");
        this.props.history.push("/login");
    }
        
                
    render() {
        const {username, email, firstName, lastName, role} = this.state;
        const { uid } = this.props.match.params;
        return (
        <div>
            <Navbar title="Profile" rightBtn="check" form="profileForm" />
        <div className="container">
            <div className alert="alert alert-success">Update Successful</div>
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
                <button type="button" onClick={this.logout} className="btn btn-danger btn-block" >
                Logout
                </button>
                {role ==='admin'? (
                    <Link className='btn btn-warning btn-block' to='/manage' >Manage Users
                    </Link>
                    ) : null}             
                </form>
            </div>
                <Footer uid={uid} />
            </div>
                );
            }
        }