
// import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Read from './assets/Read'
import Update from './assets/Update'
import Create from './assets/Create'
import Home from './assets/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>

      <Routes>

          <Route path='/' element={<Home/>} ></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/read/:id' element={<Read/>}></Route>
          <Route></Route>

      </Routes>

    </Router>
    
  )
}

export default App
