import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import uuid from "uuid";

export default class Register extends Component {

      state = {
        username:"",
        password:"",
        password2:""
      }

      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    onSubmit = e => {
      e.preventDefault();
      const {username, password, password2} = this.state;
      this.register(username, password, password2);
    }

    async register (username, password, password2) {
        // do the passwords match?
      if(password !== password2) {
        alert("The passwords do not match, Please try again.");
        return;
      }

      //check is username is available
      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
        alert("This username is taken, please try another one");
        return;
      } else {
         const newUser = {
          _id: uuid(),
          username,
          password,
          password2,
          email: "",
          firstName: "",
          lastName: ""
      };   
      //send to server   
      const res2 = await axios.post("/api/user", newUser);
      this.props.histroy.push(`/user/${res2.data._id}`);
  }

 }
      
  render() {
    const {username, password, password2} = this.state
    return (
      <div>
        <div className="container">
        <h1>Register</h1> 
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <input 
                  placeholder="Enter Username"
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  />
            </div>
            <div className="form-group">
                <input
                placeholder="Enter Password"
                className="form-control"
                type="password"
                id="Password"
                name="password"
                onChange={this.onChange}
                value={password}
                
                />
            </div> 
            <div className="form-group">
                    <input 
                    placeholder="Verify Password"
                    className="form-control"
                    type="password"
                    id="Password"
                    name="password2"
                    onChange={this.onChange} 
                    value={password2}
                    />
            </div>
            <div>
                <button className="btn btn-primary btn-block">Register</button>
                <Link to="/login" className="btn btn-danger btn-block">Cancel</Link>
            </div>      
        </form>
    </div>
    </div>
    )
  }
}
