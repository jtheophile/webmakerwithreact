import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class WebsiteNew extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-dark bg-primary fixed-top row">
            <div className="col-lg-4 d-none d-lg-block">
              <Link i className="fas fa-chevron-left" to="/user/:uid/website"></Link>
              <span className="navbar-brand mb-0 h1">Websites</span>
              <Link className="float-right pt-2" to="./user/:uid/website/new"><i className="fas fa-plus"></i></Link>
            </div>
            <div className="col-lg-8">
              <span className="navbar-brand mb-0 h1">New Website></span>
              <button>
              <Link className="float-right pt-2" to="/user/:uid/website"><i className="fas fa-check"></i></Link>
              </button>
            </div>
          </nav>
            <section className="row">
              <div className="col-lg-4 d-none d-lg-block">
               <div className="container">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="../page/page-list.html">Address Book App</Link>
                    <Link className="float-right" to="website-edit.html"><i className="fas fa-cog"></i></Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/user/:uid/website/:wid/page">Blogger</Link>
                    <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
                    <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
                    <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                  </li>
                </ul>
              </div>
              </div>
              <div className="col-lg-8">
                <div className="container">
                  <form>
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input placeholder="Enter Website name here" className="form-control" type="text" id="name" name="Name" />
                    </div>
                    <div className="form-group">
                      <label for="description">Description</label>
                      <textarea rows="5" placeholder="Tell us about your website..."
                        className="form-control" id="description"
                        name="description"></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            
                <nav className="navbar navbar-dark bg-primary fixed-bottom">
                <div className="full-width">
                  <Link to="/user/:uid" className="fas fa-user"></Link>
                    </div>
                </nav>
              </div>
                )
              }
            }