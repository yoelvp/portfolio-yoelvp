import { useState, useRef } from 'react'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const buttonToggleMenu = useRef()

  const handleMenu = () => {
    console.log('click')
    buttonToggleMenu.current.addEventListener('click', () => setIsOpenMenu(!isOpenMenu))
  }

  return (
    <header className='w-full py-4 fixed top-0 left-0 right-0 flex justify-center items-center header'>
      <div className='w-full flex justify-between items-center'>
        <Link to="/">
          <h3 className='text-red font-title text-3xl'>
            Yoel Valverde
          </h3>
        </Link>

        <Navbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

        <div className='hidden md:flex md:justify-center md:items-center md:gap-4'>
          <a href="https://linkedin.com/in/yoelvalverdepolo" target='_blank' rel='noreferrer noopener' className='text-white hover:text-red-variant hover:text-opacity-90'>
            <AiOutlineLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/yoelvp73" target='_blank' rel='noreferrer noopener' className='text-white hover:text-red-variant hover:text-opacity-90'>
            <AiOutlineInstagram size={24} />
          </a>
          <a href="https://www.github.com/yoelvp" target='_blank' rel='noreferrer noopener' className='text-white hover:text-red-variant hover:text-opacity-90'>
            <AiOutlineGithub size={24} />
          </a>
        </div>

        <button
          className='text-red border border-red rounded-md p-1 flex justify-center items-center hover:border-white hover:text-white transition md:hidden'
          ref={buttonToggleMenu}
          onClick={handleMenu}
        >
          <AiOutlineMenu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Header
