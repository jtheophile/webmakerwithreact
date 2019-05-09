import React, { Component } from 'react'

export default class WebsiteList extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <a href="../user/profile.html"><i className="fas fa-chevron-left"></i></a>
            <div className="website">
                <a className="float-left" className="navbar-brand" href="website-list.html">Websites</a>
            </div>
            <a href="website-new.html" className="fas fa-plus"></a>
        </nav>   
        {/* <!-- WEBSITE LIST BODY --> */}
        <section className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href="../page/page-list.html">Address Book App</a>
                        <a className="float-right" href="../website/website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>

                    <li className="list-group-item">
                        <a href="../page/page-list.html">Blogger</a>
                        <a className="float-right" href="../website/website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>

                    <li className="list-group-item">
                        <a href="../page/page-list.html">Blogging App</a>
                        <a className="float-right" href="../website/website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>

                    <li className="list-group-item">
                        <a href="../page/page-list.html">Script Testing App</a>
                        <a className="float-right" href="../website/website-edit.html"><i className="fas fa-cog"></i></a>
                    </li>
                </ul>
        </section>
      </div>
      </div>
    )
  }
}
