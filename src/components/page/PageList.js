import React, { Component } from 'react'

export default class PageList extends Component {
  render() {
    return (
      <div>
        <div class="container">
            <ul class="list-group">
                <li class="list-group-item">
                    <a href="../page/page-list.html">Blog Post</a>
                    <a class="float-right" href="../page/page-new.html"><i class="fas fa-cog"></i></a>
                </li>

                <li class="list-group-item">
                    <a href="../page/page-list.html">Blogs</a>
                    <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                </li>

                <li class="list-group-item">
                    <a href="../page/page-list.html">Home</a>
                    <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                </li>

                <li class="list-group-item">
                    <a href="../page/page-list.html">About</a>
                    <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                </li>

                <li class="list-group-item">
                    <a href="../page/page-list.html">Contact Us</a>
                    <a class="float-right" href="website-edit.html"><i class="fas fa-cog"></i></a>
                </li>
            </ul>
        </div>

<nav class="navbar navbar-dark bg-primary fixed-bottom">
    <a class="navbar-brand"></a>
    <a href="../user/profile.html" class="fas fa-user"></a>
</nav>
      </div>
    )
  }
}
