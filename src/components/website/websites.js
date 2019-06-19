import React, { Component } from 'react'

export default class websites extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.websites.map(
                        (website) => (
                            <li key={website._id} className="list-group-item">
                                <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name} />
                                <Link to={`/user/${uid}/website/${website._id}`} className="float-right"
                                i className="fas fa-cog" />
                                </Link>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}
