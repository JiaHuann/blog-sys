import { Component, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom"
//懒加载
const Blog = lazy(() => import('./pages/blog/Blog'))
const Home = lazy(() => import('./pages/Home'))
//const Login = lazy(() => import('./pages/Login'))
//const Register = lazy(() => import('./pages/Register'))
const Setting = lazy(() => import('./pages/Setting'))
const Article = lazy(() => import('./pages/Article'))
const Profile = lazy(() => import('./pages/Profile'))
const Test = lazy(() => import('./pages/test'))
const SignInSide = lazy(() => import('./pages/Login/SignInSide'))
const SignUp = lazy(() => import('./pages/Register/SignUp'))

//测试数据
const appName = 'blog'
// const currentUser = {
//   username: 'test',
//   avatar: {`http://[${process.env.REACT_APP_BE_SERVER}]:8000/static/default_avatar.jpg`},
//   bio: 'user info'
// }
const currentUser = null

class App extends Component {

  render() {
    return (
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog currentUser={currentUser} appName={appName} />} />
          <Route path="/blog/login" element={<SignInSide />} />
          <Route path="/blog/register" element={<SignUp />} />
          <Route path="/blog/setting" element={<Setting />} />
          <Route path="/blog/article" element={<Article />} />
          <Route path="/blog/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Suspense>

    )
  }
}

export default App;
