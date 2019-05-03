import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class WebsiteNew extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar navbar-dark bg-primary fixed-top row">
            <div className="col-lg-4 d-none d-lg-block">
              <a href="website-list.html"><i className="fas fa-chevron-left"></i></a>
              <span className="navbar-brand mb-0 h1">Websites</span>
              <a className="float-right pt-2" href="website-new.html"><i className="fas fa-plus"></i></a>
            </div>
            <div className="col-lg-8">
              <span className="navbar-brand mb-0 h1">New Website></span>
              <a className="float-right pt-2" href="website-list.html"><i className="fas fa-check"></i></a>
            </div>
          </nav>

          <section className="row">
            <div className="col-lg-4 d-none d-lg-block">
              <div className="container">
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="../page/page-list.html">Address Book App</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                  </li>
                  <li className="list-group-item">
                    <a href="../page/page-list.html">Blogger</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                  </li>
                  <li className="list-group-item">
                    <a href="../page/page-list.html">Blogging App</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                  </li>
                  <li className="list-group-item">
                    <a href="../page/page-list.html">Script Testing App</a>
                    <a className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></a>
                  </li>
                </ul>
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

                  <nav className="navbar navbar-dark bg-primary fixed-bottom">
                    <Link className="navbar-brand"></Link>
                    <Link href="../user/profile.html" className="fas fa-user"></Link>
                  </nav>
                </div>              
              )
            }
          }
