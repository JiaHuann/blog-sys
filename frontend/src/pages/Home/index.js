import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="service-item">
                <Link to="/blog" />
                <div className="first-service-icon service-icon"></div>
                <Link to="/blog" ><h1>博客系统</h1></Link>
                <h3>
                    前端使用React,后端使用NodeJS。独立全栈开发。
                </h3>
            </div>
        )
    }
}

export default Home;