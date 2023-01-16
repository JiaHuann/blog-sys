import { Link } from 'react-router-dom'
import SelfInfo from './self';
import ReminderBoard from './remind';
import Nav from './nav'
import SocialIcons from './social'
const LeftMenu = ({ currentUser }) => {
    return (
        <div id="menu" class="menu">
            <i class="fa fa-times" id="menu-close"></i>
            <div class="container">
                <SelfInfo currentUser={currentUser} />
                <ReminderBoard currentUser={currentUser} />
                <Nav/>
                <SocialIcons/>
                <div class="copyright-text">
                    <p>Copyright 2022 Jiahuan Liu & Reflux</p>
                </div>
            </div>
        </div>
    )
}
export default LeftMenu;