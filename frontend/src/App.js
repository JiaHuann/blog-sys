import { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
class App extends Component {

  render() {
    return (
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </div >
    )
  }


}

export default App;
