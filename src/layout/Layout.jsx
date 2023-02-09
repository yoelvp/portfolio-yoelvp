import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <div className='content'>
      {children}

      <Footer />
    </div>
  )
}

export default Layout
