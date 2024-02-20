import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import About from './components/About'
import Service from './components/Service'
import Expertice from './components/Expertice'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Header/>
      <Banner/>
      <About/>
      <Service/>
      <Expertice/>
      <Footer/>
    </>
  )
}

export default App
