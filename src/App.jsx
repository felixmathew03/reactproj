import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Details from './Pages/Details';
import './App.css'
import { useState } from 'react';

function App() {
 const [search,setSearch]=useState("");
  return (
    <BrowserRouter>
      <Nav setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home search={search}/>}/>
        <Route path='/details/:id' Component={Details}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;