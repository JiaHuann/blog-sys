import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div id="page-wraper">
                <div id="menu" class="menu">
                    <i class="fa fa-times" id="menu-close"></i>
                    <div class="container">
                        <div class="image">
                            <a href="#"><img src="//localhost:8000/static/default_avatar.jpg" alt="" /></a>
                        </div>
                        <div class="author-content">
                            <a href="111"><h4>O F F L I N E</h4></a>
                            <span>Please <a href="111">Login.</a> </span>
                        </div>
                        <nav class="main-nav" role="navigation">
                            <ul class="main-menu">
                                <li class="active"><a href="#section1">注册/登录</a></li>
                                <li class=""><a href="#section2">所有Blog</a></li>
                                <li><a href="#section3">查看所有用户</a></li>
                                <li><a href="#section4">Tags</a></li>
                            </ul>
                        </nav>
                        <div class="social-network">
                            <ul class="soial-icons">
                                <li>
                                    <a href="https://fb.com/templatemo"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-rss"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="copyright-text">
                            <p>Copyright 2022 Jiahuan Liu & Reflux</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;