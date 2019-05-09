import React, { Component } from 'react'
import {Link} from "react-router-dom"

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

  render() {
    return (
      <div>
        <div className="container">
        <h1>Register</h1>
        <form>
            <div className="form-group">
                <input 
                  placeholder="Enter Username"
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  onChange={this.onChange}
                  
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
                
                
                />
            </div>
            <div className="form-group">
                    <input 
                    placeholder="Verify Password"
                    className="form-control"
                    type="password"
                    id="Password"
                    name="password"
                    onChange={this.onChange} 
                    
                    />
            </div>
            <div>
                <Link to="/user/:uid" className="btn btn-primary btn-block">Register</Link>
                <Link tp="/" className="btn btn-danger btn-block">Cancel</Link>
            </div>      
        </form>
    </div>
      </div>
    )
  }
}
