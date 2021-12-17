import React from 'react';
import About from './Routing/About';
import Contact from './Routing/Contact';
import Footer from './Routing/Footer';
import Header from './Routing/Header';
import Home from './Routing/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import PageNotFound from './Routing/PageNotFound';
import Product from './Routing/Product';
import MobileList from './Routing/MobileList';
import LaptopList from './Routing/LaptopList';
import ProductDesc from './Routing/ProductDesc'


function App() {

  return (
    <Router>
      
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/products' element={<Product />}> 
            <Route path='mobile' element={<MobileList />}>
              <Route path=':mobileItem' element={<ProductDesc />} /> 
            </Route>
            <Route path='laptop' element={<LaptopList />}/>
          </Route>
          

        </Routes>


     </Router>
  )
}

export default App;


