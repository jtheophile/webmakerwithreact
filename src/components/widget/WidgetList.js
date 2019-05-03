import React, { Component } from 'react'

export default class WidgetList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed top navbar-light bg-light">
        <a href="../page/page-list.html"><i className="fa fa-chevron-left"></i></a>
        <span className="navbar-brand mb-0 h1">Widgets</span>
        <a href="widget-chooser.html"><i className="fas fa-plus"></i></a>
    </nav>
    <div className="container-fluid">
        <div>
            <div className="float-right">
                <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
                <i className="fas fa-bars"></i>
            </div>
            <h1>GIZMODO</h1>
        </div>
        <div className="float-right">
            <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
            <i className="fas fa-bars"></i>
        </div>
        <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis!</h3>
        </div>
        <div className="float-right">
            <a href="widget-image.html"><i className="fas fa-cog"></i></a>
            <i className="fas fa-bars"></i>
        </div>   
        <div>
            <img width="100%" src="../le-beach.jpeg" alt="stone-baby">
        </div>
        <div className="float-right">
                <a href="widget-heading.html"><i className="fas fa-cog"></i></a>
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
