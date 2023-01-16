import { Component } from "react";
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'

const appName='blog'
const currentUser={
  username:'test',
  avatar:'http://localhost:8000/static/default_avatar.jpg',
  bio:'user info'
}
class App extends Component {

  render() {
    return (
      <div>
        <Header currentUser={currentUser} appName={appName} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div >
    )
  }


}

export default App;
