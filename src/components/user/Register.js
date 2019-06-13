import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {

      state = {
        username:"",
        password:"",
        password2:"",
        showUsernameAlert: false, 
        showPasswordAlert: false,
        showUsernameLengthAlert: false,
        showPasswordLengthAlert: false
      }

      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
          showUsernameAlert: false, 
          showPasswordAlert: false,
        })
      }

      //function to change for hidden buttons 6.7

    onSubmit = e => {
      e.preventDefault();
      const {username, password, password2} = this.state;
      this.register(username, password, password2);
    }

    async register (username, password, password2) {
      // check username length
      if(username.length < 5) {
        this.setState({
            showUsernameLengthAlert: true
        })
        return;
      }
      // check password length
      if(username.length < 5) {
        this.setState({
            showPasswordLengthAlert: true
        })
        return;
      }

        // do the passwords match?
      if(password !== password2) {
        // alert("The passwords do not match, Please try again.");
        this.setState({
          showPasswordAlert: true
        })
        return;
      }

            //check is username is available
      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
        // alert("This username is taken, please try another one");
        this.setState({
          showUsernameAlert: true
        })
        return;
      } else {
         const newUser = {
          username,
          password,
          email: "",
          firstName: "",
          lastName: ""
      };   
      //send to server   
      const res2 = await axios.post("/api/register", newUser);
      this.props.history.push(`/user/${res2.data._id}`);
  }

 }
      
  render() {
    const {username, password, password2} = this.state
    return (
      <div>
        <div className="container">
        <h1>Register</h1> 

          {this.state.showPasswordAlert && (<div className="alert alert-danger">Your credentials don't match.</div>)}

          {this.state.showUsernameAlert && (<div className="alert alert-danger">Try another username, this one is taken.</div>)}

          {this.state.showUsernameLengthAlert && (<div className="alert alert-danger">Your Username is too short, please make at least 6 characters.</div>)}

          {this.state.showPasswordLengthAlert && (<div className="alert alert-danger">Your password is too short, please make at least 6 character.</div>)}

          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="password">Username</label>
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                onChange={this.onChange}
                value={password}                
                />
            </div> 
            <div className="form-group">
              <label htmlFor="password">Verify Password</label>
                    <input
                    className="form-control"
                    type="password"
                    id="password2"
                    name="password2"
                    onChange={this.onChange} 
                    value={password2}
                    />
            </div>

            <button 
              className="btn btn-primary btn-block">
                Register
            </button>
            <Link 
              className="btn btn-danger btn-block" 
              to="/login">
              Cancel
            </Link>
        </form>
    </div>
    </div>
    )
  }
}
