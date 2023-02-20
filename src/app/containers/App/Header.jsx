import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Logo from './assets/logo.svg'
import { CartCountContext } from '../../utils/Context'
import './assets/style.css'

const Header = () => {
  const [cartCount] = useContext(CartCountContext)
  return (
    <header className='d-flex justify-content-around align-items-center bg-dark text-white'>
      <Link to='/'>
        <img src={Logo} alt='logo' height='80' width='80' />
      </Link>
      <Link
        className='d-flex align-items-center position-relative px-3'
        to='/cart'
      >
        <i className='cart_icon bi bi-handbag text-white'></i>
        <span className='position-absolute top-0 end-0 bg-warning text-white rounded-circle badge p-2'>
          {cartCount}
        </span>
      </Link>
    </header>
  )
}

export default Header
