import { Link } from 'react-router-dom'
import Logo from './assets/logo.svg'
import './assets/style.css'
import { useCartContext } from '../../contexts/CartContext'

const Header = () => {
  const { count } = useCartContext()
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
          {count}
        </span>
      </Link>
    </header>
  )
}

export default Header
