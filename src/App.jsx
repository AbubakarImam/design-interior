import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Hompage'
import About from './Pages/About'
import Services from './Pages/Services'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
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
          <Footer />
        </Router>
      </>

    </div>

  )
}

export default App
