import { Link } from 'react-router-dom'

function LinkShapeButton({ children, to, variant, color }) {
  return (
    <Link to={to} className='bg-gradient-to-r from-red to-red-variant inline-block rounded-md p-[2px] selection:bg-white selection:text-red'>
      <div className={`${variant === 'filled' ? 'bg-transparent' : 'bg-dark text-' + color} inline-block rounded-md px-6 py-2`}>
        {children}
      </div>
    </Link>
  )
}

export default LinkShapeButton
