import React, { Component } from 'react';
import { Link } from "react-router-dom";
import uuid from "uuid";
import axios from "axios";

export default class WebsiteNew extends Component {
      state = {
        uid:this.props.match.params.uid,
        websites: [],
        name:"",
        description:""
      };

      // initializes the list
      async componentDidMount() {
        const res = await axios.get(`/api/user/(${this.state.uid}/website`);
        this.filterWebsites(res.data);
      }

      filterWebsites = websites => {
        const newWebsites = websites.filter(
          website => website.developerId === this.state.uid
        );
        this.setState({
          websites: newWebsites
        });
      };

      onChange = e => {
          this.setState({
            [e.target.name]: e.target.value
          });
        };

      onSubmit = async e => {
          const { name, description, uid } = this.state;
          e.preventDefault();
          const newWeb = {
            _id: uuid(),
            name,
            developedId: uid,
            description
          };
          // call the new website from serverside 
          await axios.post("/api/website", newWeb);    // 2nd parameter is where you are sending it to
          this.props.history.push(`/user/${this.state.uid}/website`);
          };

      render() {
          const { uid } = this.state;
            return (
              <div>
              <nav className="navbar navbar-dark bg-primary fixed-top row">
              <div className="col-lg-4 d-none d-lg-block text-center text white">
                <Link className="float-left" 
                      to={`/user/${uid}/website`} >
                      <i className="fas fa-chevron-left" />
                </Link>                
                <span className=""><strong>Websites</strong></span>
                <span className="float-right">< i className="fas fa-plus" /></span>
              </div>

              <div className="col-lg-8 text-center text-white">
                 <Link className="d-lg-none float-left" to={`/user/${uid}/website`} >
                    <i className="fas fa-chevron-left" />
                 </Link>
                          
              <span><strong>New Website</strong></span>
                  <button className="float-right btn" form="newWebForm">
                      <i className="fas fa-check" />
                  </button>
              </div>
              </nav>


            <section className="row">
              <div className="col-lg-4 d-none d-lg-block">
               <div className="container-fluid">
                <ul className="list-group">
                  {this.state.websites.map(website => (
                    <li 
                      key={website._id}
                      className="list-group-item">

                     <Link to={`/user/${uid}/website/${website._id}/page`}>
                          {website.name}
                     </Link>
                     <Link to={`/user/${uid}/website/${website._id}`} className="float-right">
                          <i className="fas fa-cog" />
                     </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

              <div className="col-lg-8">
                <div className="container-fluid">
                  <form id="newWebForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">
                        <b>Name</b>
                      </label>                      
                      <input 
                      placeholder="Enter Website name here" 
                      className="form-control" 
                      type="text"
                      id="name" 
                      name="name"
                      onChange={this.onChange}
                      value={this.state.name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">
                        <b>Description</b>
                      </label>
                      <textarea 
                          rows="5" 
                          placeholder="Tell us about your website..."
                          className="form-control" 
                          id="description"
                          name="description"
                          onChange={this.onChange}
                          value={this.state.description}
                          />                          
                    </div>

                    <Link to={`/user/${uid}/website`} className="btn btn-lg btn-warning">
                      Cancel
                    </Link>
                    <button className="btn btn-lg btn-success float-right">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </section>

            <nav className="navbar navbar-dark bg-primary fixed-bottom">
                <div className="full-width">
                  <Link className="color-white float right" to={`/user/${uid}`} >
                  <i className="fas fa-user" />
                  </Link>
                    </div>
                </nav>
              </div>
                )
              }
            }





            



        //     <Link className="float-right" to="website-edit.html"><i className="fas fa-cog"></i></Link>
        //     </li>
        //     <li className="list-group-item">
        //       <Link to="/user/:uid/website/:wid/page">Blogger</Link>
        //       <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
        //     </li>
        //     <li className="list-group-item">
        //       <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
        //       <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
        //     </li>
        //     <li className="list-group-item">
        //       <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
        //       <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
        //     </li>
        //   </ul>
        // </div>
        // </div>