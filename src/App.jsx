import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './componets/Home'
import Navbar from './componets/Navbar'
import CardItem from './componets/CardItem'
import Employee from './componets/Employee'
import Services from './componets/Services'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/carditem' element={<CardItem />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App