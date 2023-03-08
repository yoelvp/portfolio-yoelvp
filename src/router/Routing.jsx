import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Portfolio from '../pages/portfolio/Portfolio'
import ProjectDetails from '../pages/portfolio/ProjectDetails'
import Curriculum from '../pages/curriculum/Curriculum'

import Header from '../components/Header'

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/personal/:slug' element={<ProjectDetails />} />
        <Route path='/portfolio/works/:slug' element={<ProjectDetails />} />
        <Route path='/curriculum' element={<Curriculum />} />
      </Routes>
    </>
  )
}

export default Routing
