import { lazy, PureComponent } from "react";
import LeftMenu from "./menu"
const BlogHome = lazy(() => import('../../pages/BlogHome'))
class Header extends PureComponent {
    render() {
        const { appName, currentUser } = this.props
        console.log(currentUser);
        return (
            <div id="page-wraper">
                <div class="responsive-nav">
                    <i class="fa fa-bars" id="menu-toggle"></i>
                    <LeftMenu currentUser={currentUser} />
                </div>
                {/* <BlogHome /> */}
            </div>
        )
    }
}

export default Header;