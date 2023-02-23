import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from '../../contexts/TokenContext'
import Router from './Router'
import Footer from './Footer'

import './assets/style.css'

const App = () => {
  return (
    <TokenProvider>
      {/* <CartCountContext.Provider value={[cartCount, setCartCount]}> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
      {/* </CartCountContext.Provider> */}
    </TokenProvider>
  )
}

export default App
