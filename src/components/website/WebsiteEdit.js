import React, { Component } from 'react'

export default class WebsiteEdit extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary fixed-top row">
        <div className="col-lg-4 d-none d-lg-block">
            <a href="website-list.html"><i className="fas fa-chevron-left"></i></a>
            <span className="navbar-brand mb-0 h1">Websites</span>
            <a className="float-right pt-2" href="website-new.html"><i className="fas fa-plus"></i></a>
        </div>
        <div className="col-lg-8">
            <span className="navbar-brand mb-0 h1">Edit Website</span>
            <a className="float-right pt-2" href="website-list.html"><i className="fas fa-check"></i></a>
        </div>
    </nav>
    {/* <!-- BODY LEFT --> */}
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
                        <a href="website-list.html" className="btn btn-danger form-control">Delete</a>
                    </div>
                </form>
            </div>    
        </div>
    </section>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
            <a className="navbar-brand"></a>
            <a href="../user/profile.html" className="fas fa-user"></a>
        </nav>
    </div>
    )
  }
}
