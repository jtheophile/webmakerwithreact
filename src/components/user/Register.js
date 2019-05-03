import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <h1>Register</h1>
        <form>
            <div className="form-group">
                <input placeholder="Enter Username" className="form-control" type="text" id="username" name="username" />
            </div>
            <div className="form-group">
                <input placeholder="Enter Password" className="form-control" type="password" id="Password" name="password" />
            </div>
            <div className="form-group">
                    <input placeholder="Verify Password" className="form-control" type="password" id="Password" name="password" />
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
