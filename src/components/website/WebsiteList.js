import { Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";

export default class WebsiteList extends Component {

    state={
      uid: this.props.match.params.uid,
      websites:[]
    }

    async componentDidMount() {
      const res = await axios.get(`/api/user/${state.uid}/website`);
        this.filterWebsites(res.data);                                   
    }

    filterWebsite = (websites) => {
        const websiteNew = websites.filter(
          website => (website.developerId === this.state.uid)
        )
        this.setState({
          website: websiteNew
        })
      }

  render() {
     return (
         <div>
            <div className="container">
              <nav className="navbar navbar-dark bg-primary fixed-top">
                 <Link to={`/user/${this.state.uid}`}><i className="fas fa-chevron-left"></i></Link>
            <div className="website">
                <Link className="float-left navbar-brand" to={"/user/123/website/new"}>Websites</Link>
            </div>
            <Link to={`/user/${this.state.uid}/website/new`} className="fas fa-plus"></Link>
             </nav>   
             {/* <!-- WEBSITE LIST BODY --> */}
          <section className="container">
                 <ul className="list-group"> {
                this.state.website.map(
                        (website) => 
                          <li key={website._id} className="list-groupitem">
                    <Link to={`/user/${this.state.uid}/website/${website._id}/page`}>{website.name}</Link>
                    <Link to={`/user/${this.state.uid}/website/${website._id}`} className="float-right">
                    </Link>
                    </li>
                    )
                  }
                    <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
                    <Link className="float-right" to="..//user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                  <li className="list-group-item">
                        <Link to="/user/:uid/website/:wid/page">Blogger</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
                    <li className="list-group-item">
                        <Link href="/user/:uid/website/:wid/page">Script Testing App</Link>
                        <Link className="float-right" to="/user/:uid/website/:wid"><i className="fas fa-cog"></i></Link>
                    </li>
    </ul> }
        </section>
      </div>
      </div>
    )
  }
}
