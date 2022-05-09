import { useState } from 'react'
import './App.css'
import Nav from '../views/nav/Nav'
import About from '../views/about/About'
import Home from '../views/init/Home'
import Format from '../views/format/Format'
import Club from '../views/clubs/Club'
import User from '../views/users/User'
import Contact from '../views/contact/Contact'
import Footer from '../views/footer/Footer'
function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Format/>
      <Club/>
      <User/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
