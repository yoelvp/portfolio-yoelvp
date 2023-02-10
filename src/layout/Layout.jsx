import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <div className="content pt-20">
      {children}
      <Footer />
    </div>
  )
}

export default Layout
