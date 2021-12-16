import React from 'react';
import About from './Routing/About';
import Contact from './Routing/Contact';
import Footer from './Routing/Footer';
import Header from './Routing/Header';
import Home from './Routing/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import PageNotFound from './Routing/PageNotFound';


function App() {

  return (
    <Router>
      
      <Header />

        <Routes>
          <Route path='/' element={ <Navigate to='/home' /> } />
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact'element={<Contact />}/>
          <Route path='/*' element={<PageNotFound />} />
        </Routes>

      <Footer />

     </Router>
  )
}

export default App;

