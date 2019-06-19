import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render() {
        const {backBtn, title, rightBtn, form, rightBtn2} = this.props
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top">
                    {backBtn? 
                        <Link to={backBtn} >
                        <i className="fas fa-chevron-left" />
                        </Link> :
                        null
                    } 
                    <span className="navbar-brand mb-0 h1">{title}</span>
                    {
                        rightBtn === "check"?
                        <button className="btn" form={form} >
                            <i className="fas fa-check" />
                        </button> :
                        <Link to={rightBtn2} >
                            <i className="fas fa-plus" />
                        </Link>
                    }     
                </nav>
            </div>
            )
        }
    }
