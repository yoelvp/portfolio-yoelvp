import { Link, useHref } from 'react-router-dom'

function Navbar() {
  const href = useHref()

  return (
    <div className='hidden md:flex justify-center items-center'>
      <Link
        to='/'
        className={`px-2 py-1 rounded-t-md border-b-[2px] hover:bg-dark-variant ${href === '/' ? 'link-active' : 'border-transparent'} link-hover`}
      >
        Inicio
      </Link>
      <Link
        to='/portfolio'
        className={`px-2 py-1 rounded-t-md border-b-[2px] hover:bg-dark-variant ${href === '/portfolio' ? 'link-active' : 'border-transparent'} link-hover`}
      >
        Portfolio
      </Link>
      {/* <Link
        to='/blog'
        className={`px-2 py-1 rounded-t-md border-b-[2px] hover:bg-dark-variant ${href === '/blog' ? 'link-active' : 'border-transparent'} link-hover`}
      >
        Blog
      </Link>
      <Link
        to='/about'
        className={`px-2 py-1 rounded-t-md border-b-[2px] hover:bg-dark-variant ${href === '/about' ? 'link-active' : 'border-transparent'} link-hover`}
      >
        Acerca de
      </Link> */}
    </div>
  )
}

export default Navbar
