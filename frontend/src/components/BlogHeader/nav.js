import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <nav class="main-nav" role="navigation">
            <ul class="main-menu">
                <li class="active"><Link to='/blog/register'>注 册</Link></li>
                <li class=""><Link to='/blog/login'>登 录</Link></li>
                <li><Link to='/blog/profile'>个 人 信 息</Link></li>
                <li><Link>Tags</Link></li>
            </ul>
        </nav>
    )
}
export default Nav