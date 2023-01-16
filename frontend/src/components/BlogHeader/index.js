import { PureComponent } from "react";
import LeftMenu from "./menu"

class Header extends PureComponent {
    render() {
        const {appName,currentUser} = this.props
        console.log(currentUser);
        return (
            <div id="page-wraper">
                <LeftMenu currentUser = {currentUser}/>
            </div>
        )
    }
}

export default Header;