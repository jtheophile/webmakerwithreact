import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class WidgetYoutube extends Component {

      onChange = e => {
        this.props.onChange(e);      
      }

      onSubmit = e => {
        this.props.onSubmit(e)
      }

      onDelete = e => {
        this.props.onDelete();
      }

  render() {
      const {uid, wid, pid, name, width, url} = this.props
        return (
            <div>
              <nav className="navbar navbar-light bg-light fixed top">
              <Link className="color-black"
                    to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
                    <i className="fas fa-chvron-left" />
                </Link>
              <span className="navbar-brand mb-0 h1">
                Widget Edit              
              </span>
              
              <button className="color-black btn" form="youtubeForm">
                <i className="fas fa-check" />
              </button>
          </nav>
          <div className="container">
              <form id="youtubeForm" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="Name">
                      <b>Name</b>
                    </label>
                    <input
                      type="text"
                      id="name"
                      onChange={this.onChange}
                      value={name}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="url">
                      <b>URL</b>
                    </label>
                    <input
                      type="text"
                      id="url"
                      onChange={this.onChange}
                      value={url}
                      className="form-control"
                      name="url"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="width">
                      <b>Width</b>
                    </label>
                    <input
                      type="text"
                      id="width"
                      onChange={this.onChange}
                      value={width}
                      className="form-control"
                      name="width"
                    />
                  </div>

                  <button 
                    type="button"
                    onClick={this.onChange}
                    className="btn btn-danger btn-block" >
                      Delete
                  </button>

              </form>
          </div>
          <footer className="navbar navbar-light fixed-bottom bg-light">
            <div className="full-width">
              <Link className="color-black float-right"
                to={`/user/${uid}`}>
                <i className="fas fa-user" />
              </Link>
            </div>
          </footer>
        </div>
      );
    }
  }
