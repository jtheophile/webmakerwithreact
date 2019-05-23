import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

export default class WebsiteEdit extends Component {

        state = {
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid,
            websites: [],
            name: "",
            description: ""
        };

        async componentDidMount () {
            const res = await axios.get(`/api/user/${this.state.uid}/website`);
            await this.filterWebsites(res.data);
            this.getWebsite(this.state.wid);
        }

        filterWebsites = websites => {
            const newWebites = websites.filter(
                website.developerId === this.state.uid
            );
            this.setState({
                websites: newWebsites
            });
        };

        getWebsite = wid => {
            let currentWeb;
            for (let website of this.state.websites) {
                if (website._id === wid) {
                    currentWeb = website;
                    break;
                }
            }
            this.setState({
                name: currentWeb.name,
                description: currentWeb.description
            });
        });

        onChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });            
        };

        delete = async () => {
            // website delete - server function to delete sites await axios.delete(`/api/website/${this.state.wid}`);
            await axios.delete.name(`/api/website/${this.props.mathch.params .wid}`);
            this.props.history.push(`/user/${this.state.uid}/website`);
        };

        onSubmit = async e => {
            e.preventDefault();
            const newWeb = {                ///new website
                _id: this.state.wid,
                name: this.state.name,
                description: this.state.description,
                developerId: this.state.uid
            }
            await axios.put("/api/website", newWeb);
            this.props.history.push(`/user/${this.state.uid}/website`);
        };

        render() {
            const { uid } = this.state;
            return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row">
                <div className="col-lg-4 d-none d-lg-block text-center text white">
                    <Link to={`/user/${uid}/website`}>
                        <i className="fas fa-chevron-lef float-left" />
                    </Link>

                    <span>Websites</span>

                    <Link to={`/user/${uid}/website/new`}>
                        <i className="fas fa-plus" className="float-right"/>
                    </Link>
                </div>
                
                <div className="col-lg-8 text-center text-white">
                    <Link className="d-lg-none float-left" to={`/user/${uid}/website`} >
                        <i className="fas a chevron-left" /> 
                    </Link>
                    <span>Edit Website</span>
                    <button form="editWebForm"className="float-right btn">
                         <i className="fas fa-check" />
                    </button>
                </div>
            </nav>
            {/* <!-- BODY LEFT --> */}
            <section className="row">
                <div className="col-lg-4 d-none d-sm-block">
                    <div className="container-fluid">
                        <ul className="list-group">
                                {this.state.websites.map(website => (
                                    <li 
                                        key={website._id}
                                        className="list-group-item">                                
                                        <Link to={`/user/${uid}/website/${website._id}/page`} >
                                            {website.name}
                                        </Link>
                                        <Link to={`/user/${uid}/website/${website._id}`} >
                                            <i className="fas fa-cog" className="float-right" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>           
                       
                {/* <!-- BODY RIGHT --> */}
                <div className="col-sm-8">
                    <div className="container-fluid">
                        <form id="editWebForm" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <b>Name</b>                                
                                </label>
                                <input
                                id="name"
                                name="name"
                                placeholder="Name of site"
                                className="form-control" 
                                type="text" 
                                value={this.state.name}
                                onChange={this.onChange}                                
                                />
                            </div>                            
                            <div className="form-group">
                                <label htmlFor="description">
                                    <b>Description</b>
                                </label>
                                <textarea 
                                rows="5" 
                                placeholder="What is your site about?" 
                                className="form-control"
                                type="text" 
                                id="description"
                                name="description"
                                name="name of website"
                                value={this.state.description}
                                onChange={this.onChange}
                                />                              
                            </div>
                            <Link to={`/user.${uid}/website`} className="btn btn-lg btn warning">
                                Cancel
                            </Link>
                            <button 
                                type="button"
                                onClick={this.delete}
                                className="btn btn-lg btn warning" className="float-right">
                                    Delete
                            </button>
                        </form>
                    </div>
                </div>    
            </div>

            <nav className="navbar navbar-dark bg-primary fixed-bottom">
                <div className="full-width">
                <Link className="color-white float-right" to={`/user/${uid}`} >
                    <i className="fas fa-user" />
                </Link>
                </div>
            </nav>        
            );
    }
}

        {/* <li className="list-group-item">
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
                </div> */}