import { useState } from 'react'
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import './App.css'
import frame from './assets/frametwo.png'
import vector from './assets/vector.png'
import { useNavigate } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './Pages/Home'
import Cards from './Pages/Cards'

function App() {
  // const navigate = useNavigate()
  const [count, setCount] = useState(0)

  return (

    <Router>
      <Routes>
  
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
      
      </Routes>
      </Router>

  )
}

export default App
