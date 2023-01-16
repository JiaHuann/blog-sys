import { Component, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'

const Login = lazy(() => import('./pages/Login'))
const BlogHeader = lazy(() => import('./components/BlogHeader'))


const appName = 'blog'
const currentUser = {
  username: 'test',
  avatar: 'http://jiahuan.tech:8000/static/default_avatar.jpg',
  bio: 'user info'
}
class App extends Component {

  render() {
    return (
      <div>
        <Suspense fallback={<h1>loading...</h1>}>
          <Routes>
            <Route path="/blog" element={<BlogHeader currentUser={currentUser} />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog/login" element={<Login />} />
          </Routes>
        </Suspense>
      </div >
    )
  }


}

export default App;
