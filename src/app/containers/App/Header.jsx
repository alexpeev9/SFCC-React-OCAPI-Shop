import { Link } from 'react-router-dom'
import Logo from './assets/logo.svg'

import './assets/style.css'

const Header = () => {
  return (
    <header class='d-flex justify-content-around align-items-center bg-dark text-white'>
      <img src={Logo} alt='logo' height='80' width='80' />
      <Link
        class='d-flex align-items-center position-relative p-2 rounded-circle'
        to='/'
      >
        <i class='bi bi-handbag text-white'></i>
        <span class='position-absolute top-0 end-0 bg-warning text-white rounded-circle badge p-2'>
          +1
        </span>
      </Link>
    </header>
  )
}

export default Header
