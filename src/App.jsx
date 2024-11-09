import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Details from './Pages/Details';
import './App.css'

function App() {
 
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/details/:id' Component={Details}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;