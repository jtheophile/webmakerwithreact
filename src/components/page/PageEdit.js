import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

export default class PageEdit extends Component {

    state = {
        uid: "",
        wid: "",
        name: "",
        title: ""
    }

    // get user page
    componentDidMount() {
            this.setState({
                uid: this.props.match.params.uid,
                wid: this.props.match.params.wid,
                pid: this.props.match.params.pid
            })
            this.getPage();
        }

        // get page by the id
        getPage = async () => {
            const res = await axios.get(`/api/page/${this.state.pid}`);
            this.setState({
                name: res.data.name,
                title: res.data.title
            })
        }

        onChange = e => {
            this.setState({
            [e.target.name]: e.target.value
        })
    }

        onDelete = async () => {
            await axios.delete(`/api/page/${this.state.pid}`);  //delete page
            this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)  //bring back to page
        }

        onSubmit = async e => {
        e.preventDefault();
        const newPage = {
            _id: this.state.pid,
            name: this.state.name,
            websiteId: this.state.name,
            title: this.state.title
        }
        await axios.put("/api/page", newPage);
        this.props.history.push(`/user/${this.state.uid}/wbsite/${this.state.wid}/page`)
    }
                                 
    render() {
        const {uid, wid, name, title} = this.state;

        return (
        <div>
            <nav className="navbar navbar-light fixed-top bg-light">
                    <Link className="color-black" 
                        to={`/user/${uid}/website/${wid}/page`}>
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <span className="navbar-brand">
                        New Page
                    </span>
                    <button className="color-black" form="newPageForm">
                        <i className="fas fa-check" />                
                    </button>
            </nav>

        <div className="container">
            <form id="editPageForm" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="name">
                    <b>Name</b>
                </label>
                <input 
                    placeholder="What's the name of your page" 
                    className="form-control" 
                    type="text" 
                    id="name" 
                    name="name"
                    // use the brackets, nonstring varibles
                    value={name}
                    onChange={this.onChange}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="title"> 
                    <b>Title</b>
                </label>
                <input 
                    placeholder="Title your page here" 
                    className="form-control" 
                    type="text" 
                    id="title" 
                    name="title" 
                    value={title}
                    onChange={this.onChange}
                    />
            </div>
            <Link to={`/user/:uid/website/${wid}/page`} className="btn btn-lg btn warning">
                Cancel
            </Link>
            <button
                type="button"
                onClick={this.onDelete}
                className="btn btn-lg btn-danger float-right">
            Delete
            </button>    
            </form>
        </div>

        <footer className="navbar navbar-light fixed-bottom bg-light">
            <div className="full-width">
                <Link
                    className="color-black float-right" 
                    to={`/user/${uid}`}>
                </Link>
            </div>
        </footer>
    </div>
       );
    }
}