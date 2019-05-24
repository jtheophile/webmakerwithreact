import React, { Component } from "react";
import { Link } from "react-router-fom";
import axios from "axios";

export default class WidgetList extends Component {

        state={
            uid: "", 
            wid: "",
            pid: "",
            widgets:[]
        }

        async componentDidMount () {
            await this.setState({
                uid: this.props.match.params.uid,
                wid: this.props.match.params.wid,
                pid: this.props.match.params.pid,
            })
            this.filterWidgets(this.state.pid);
        }

        filterWidgets = async (pid) => {
            const res = await axios.get(`/api/page/${pid}/widget`)
            this.setState({
                widgets: res.data                       //you don't want to return the array but the data from the array
            })
        }            

  render() {

      const {uid, pid, wid, widgets} = this.state      
        return (
            <div>
                <nav className="navabar navbar-light fixed-top bg-light">
                <Link 
                    to={`/user/${uid}/website/${wid}/page`}>
                    <i className="fa fa-chevron-left" 
                    className="color-black" />
                </Link>
                <span className="navbar-brand">
                    Widgets
                 </span>

                <Link to={`/user/${uid}/website{${wid}/page/${pid}/widget/new}`}>
                    <i className="fas fa-plus" />
                </Link>
            </nav>

            <div className="container-fluid">
                {
                    widgets.map(
                        (widget) => {
                            switch(widget.widgetType) {
                                case "HEADING":
                                    return (
                                        <div key={widget._id}>
                                            <div className="absolute-right">
                                                <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/$(widget._id)`}>
                                                    <i className="fas fa-cog" />
                                                </Link>
                                                <span>
                                                <i className="fas fa-bars" />
                                                </span>
                                            </div>
                                            <div>
                                                {widget.size === 1 && <h1>{widget.text}</h1>}
                                                {widget.size === 2 && <h2>{widget.text}</h2>}
                                                {widget.size === 3 && <h3>{widget.text}</h3>}
                                                {widget.size === 4 && <h4>{widget.text}</h4>}
                                                {widget.size === 5 && <h5>{widget.text}</h5>}
                                                {widget.size === 6 && <h6>{widget.text}</h6>}
                                            </div>
                                        </div>
                                    )

                            case "IMAGE"
                                return (
                                    <div key={widget.id}>
                                        <div className="absolute-right">
                                        <Link to={`/user/${uid}/website/${wid}/page/${pid}/widget/{widget._id}`}>
                                            <i className= "fas fa-cog" />
                                        </Link>
                                        <span>
                                            <i className="fas fa-bar"
                                        </span>
                                )
                            }
                        }
                    )
                }
                <div>
                    <div className="float-right">
                        <Link href="widget-heading.html"><i className="fas fa-cog"></i></Link>
                        <i className="fas fa-bars"></i>
                    </div>
                    <h1>GIZMODO</h1>
                </div>
                <div className="float-right">
                    <Link to="widget-heading.html"><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>
                <div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis!</h3>
                </div>
                <div className="float-right">
                    <a href="widget-image.html"><i className="fas fa-cog"></i></Link>
                    <i className="fas fa-bars"></i>
                </div>   
                <div>
                    <img width="100%" src="../le-beach.jpeg" alt="stone-baby">
                </div>
                <div className="float-right">
                        <a href="widget-heading.html"><i className="fas fa-cog"></i></Link>
                        <i className="fas fa-bars"></i>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, temporibus, sapiente, consequatur asperiores sit perferendis facere blanditiis maiores fugiat repudiandae dolorem nulla earum quas nesciunt neque ducimus quis? Ullam, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam quo deleniti, maiores at blanditiis incidunt nihil sed cumque molestias odio omnis voluptatibus repellendus perspiciatis accusantium dolorum magni reprehenderit consectetur.
                        </p>
                </div>
                <div className="float-right">
                    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                    <i className="fas fa-bars"></i>
                </div>
                <div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis!</h3>
                </div>
                <div className="float-right">
                    <a href="widget-youtube.html"><i className="fas fa-cog"></i></a>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/ypOpzNOVyL4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="float-right">
                    <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                    <i className="fas fa-bars"></i>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eos. Soluta dolor ullam maiores reiciendis adipisci accusantium tempore hic error quidem aperiam beatae voluptatibus sed, id voluptates vel, ipsum laborum repudiandae, vero optio ipsam dolores! Blanditiis reiciendis culpa tempora corporis? Necessitatibus unde sint totam mollitia cum commodi ullam quisquam esse!</p>
                </div>
        <footer>
            <nav className="navbar fixed bottom navbar-light bg-light">
                <div>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-eye"></i>
                </div>
                <div>
                    <a href="../user/profile.html"><i className="fas fa-user float-right"></i></a>
                </div>
            </nav>
        </footer>



            </div>  
            </div>
            )
        }
        }
