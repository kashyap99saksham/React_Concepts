import React from 'react';
import About from './Routing/About';
import Contact from './Routing/Contact';
import Footer from './Routing/Footer';
import Header from './Routing/Header';
import Home from './Routing/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Router>
      
      {/* <Header /> */}

        <Routes>

          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact'element={<Contact />}/>

        </Routes>

      {/* <Footer /> */}

     </Router>
  )
}

export default App;

