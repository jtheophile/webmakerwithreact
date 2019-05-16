import React, { Component } from 'react'

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

    register (username, password, password2) {
        // do the passwords match?
      if(password !== password2) {
        alert("The passwords do not match.");
        return;
      }

      // check if username is available
      for(let user of this.props.users) {
        if(user.username === username) {
          alert("This Username is taken, please try another one.");
          return;
        }
      }
    // adding a new user into the existing array of users (have to change back to string for the correct format to be read)
    const newUser = {
        _id: (parseInt(this.props.users[this.props.users.length -1]._id) + 1 ).tostring(),
        username,
        password,
        email: "",
        firstName: "",
        lastName: ""
    };
    this.props.addUser(newUser);
    
    //navigate to profile
    this.props.history.push(`/user/${newUser._id}`);
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
                    name="password"
                    onChange={this.onChange} 
                    value={password2}
                    />
            </div>
            <div>
                <button className="btn btn-primary btn-block">Register</button>
                <button tp="/" className="btn btn-danger btn-block">Cancel</button>
            </div>      
        </form>
    </div>
      </div>
    )
  }
}
