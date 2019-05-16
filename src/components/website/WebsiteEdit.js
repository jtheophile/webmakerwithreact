import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class WebsiteEdit extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
        <div className="col-lg-4 d-none d-lg-block">
            <Link to="website-list.html"><i className="fas fa-chevron-left"></i></Link>
            <span className="navbar-brand mb-0 h1">Websites</span>
            <Link className="float-right pt-2" href="website-new.html"><i className="fas fa-plus"></i></Link>
        </div>
        <div className="col-lg-8">
            <span className="navbar-brand mb-0 h1">Edit Website</span>
            <Link className="float-right pt-2" to="/user/:uid/website"><i className="fas fa-check"></i></Link>
        </div>
    </nav>
    {/* <!-- BODY LEFT --> */}
    <section className="row">
        <div className="col-lg-4 d-none d-lg-block">
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
                        <Link className="float-right" href="website-edit.html"><i className="fas fa-cog"></i></Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/user/:uid/website/:wid/page">Blogger</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="../page/page-list.html">Blogging App</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>

                    <li className="list-group-item">
                        <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* <!-- BODY RIGHT --> */}
        <div className="col-lg-8">
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="website name">Website Name</label>
                        <input placeholder="Blogger" className="form-control" type="text" id="name" name="name of website" />
                    </div>
                    <div>
                        <label for="website name">Website Description</label>
                        <textarea rows="5" placeholder="Blah blah" className="form-control" type="text" id="name"
                        name="name of website"></textarea>
                    </div>
                    <div className="delete">
                        <Link to="/user/:uid/website" className="btn btn-danger form-control">Delete</Link>
                    </div>
                </form>
            </div>    
        </div>
    </section>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
            <Link className="navbar-brand"></Link>
            <Link to="/user/:uid" className="fas fa-user"></Link>
        </nav>
    </div>
    )
  }
}
