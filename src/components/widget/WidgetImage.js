import React, { Component } from 'react'

export default class WidgetImage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light fixed top">
        <a href="widget-list.html"><i className="fas fa-chevron-left"></i></a>
        <span className="navbar-brand mb-0 h1">Widget Edit</span>
        <a href="widget-list.html"><i className="fas fa-check"></i></a>
    </nav>
    <div className="container">
        <form>
            <label for="Name">Name</label>
        </form>
    </div>
      </div>
    )
  }
}
