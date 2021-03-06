import { Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";
import Footer from "../utility/Footer"
import Navbar from "../utility/Navbar"

export default class WebsiteList extends Component {

    state= {
      uid: this.props.match.params.uid,
      websites: []
    }

    async componentDidMount() {
      const res = await axios.get(`/api/user/${this.state.uid}/website`);
        this.filterWebsites(res.data);                                   
    }

    filterWebsites = (websites) => {
        const newWebsites = websites.filter(
          website => (website.developerId === this.state.uid)
        )
        this.setState({
          websites: newWebsites
        })
      }

  render() {
    const {uid} = this.state
     return (
         <div>
           <Navbar 
           backBtn={`/user/${uid}`} 
           title="Websites" 
           rightBtn="plus" 
           rightsBtn2={`/user/${uid}/website/new`}  
          />
            {/* <nav className="navbar navbar-dark bg-primary fixed-top">
                <Link to={`/user/${uid}`} >
                    <i className="fas fa-chevron-left" />
                </Link>
                <span className="navbar-brand mb-0 h1">
                  Websites
                </span>
                <Link
                   to={`/user/${uid}/website/new`} >
                   <i className="fas fa-plus" />
                </Link>
            </nav> */}

            <section className="container">
                 <ul className="list-group"> 
                    {
                      this.state.websites.map(
                        (website) => (
                          <li key={website._id} className="list-group-item">
                            <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name}
                            </Link>
                            <Link to={`/user/${uid}/website/${website._id}`} className="float-right">
                                < i className="fas fa-cog" />
                            </Link>
                          </li>
                            )
                          )
                        }
                </ul> 
             </section>

             <Footer uid={uid} />
              </div>
                );
              }
            }
