import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Portfolio from '../pages/portfolio/Portfolio'
import Blog from '../pages/blog/Blog'
import About from '../pages/about/About'

import Header from '../components/Header'

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default Routing
