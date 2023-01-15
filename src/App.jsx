import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </Router>
      </>

    </div>

  )
}

export default App
