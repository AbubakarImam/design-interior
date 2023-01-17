import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Hompage'
import About from './Components/about/About'
import Pages from './Components/Pages'
import Project from './Components/projects/Project'
import Blog from './Components/blog/Blog'
import Contact from './Components/contact/Contact'
import Services from './Components/services/Services'
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
            <Route path='/pages' element={<Pages />} />
            <Route path='/project' element={<Project />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
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
