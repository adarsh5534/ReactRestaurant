
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restuarantlist from './components/Restuarantlist';
import ViewRest from './components/ViewRest'
// since all components lay on here we import routing here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Router>
<Header />
      <Routes>
        {/* path setting for restaurant list */}
        <Route path='/' element={ <Restuarantlist />}/>
       {/* path setting for newrest */}
       <Route path='/view-restaurant/:id' element={ <ViewRest />}/>

      
      </Routes>
      <Footer />
</Router>
 
    </div>
  );
}

export default App;
