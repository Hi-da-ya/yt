import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Show from './pages/Show'
import ProductMastery from './pages/ProductMastery'
import CourseDetail from './pages/CourseDetail'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path="/product-mastery" element={<ProductMastery />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
