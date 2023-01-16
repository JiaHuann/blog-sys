import { PureComponent, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"

//懒加载
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Setting = lazy(() => import('./pages/Setting'))
const Article = lazy(() => import('./pages/Article'))
const Profile = lazy(() => import('./pages/Profile'))

const BlogHeader = lazy(() => import('./components/BlogHeader'))


//测试数据
const appName = 'blog'
const currentUser = {
  username: 'test',
  avatar: 'http://jiahuan.tech:8000/static/default_avatar.jpg',
  bio: 'user info'
}

class App extends PureComponent {

  render() {
    return (
      <div>
        <Suspense fallback={<h1>loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogHeader currentUser={currentUser} appName={appName} />} />
            <Route path="/blog/login" element={<Login />} />
            <Route path="/blog/register" element={<Register/>} />
            <Route path="/blog/setting" element={<Setting/>} />
            <Route path="/blog/article" element={<Article/>} />
            <Route path="/blog/profile" element={<Profile/>} />
          </Routes>
        </Suspense>
      </div >
    )
  }
}

export default App;
