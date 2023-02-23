import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartCountContext } from '../../utils/Context'
import { getCartItems } from '../../services/cartService'

import ProductList from '../../components/ProductList'

const CartPage = () => {
  const [cart, setCart] = useState(null)
  const cartCount = useContext(CartCountContext)[0]
  useEffect(() => {
    const getCart = async () => {
      const cartInfo = await getCartItems()
      setCart(cartInfo)
    }
    getCart()
  }, [cartCount])
  return (
    <main className='container py-3'>
      <h1>Cart</h1>
      <div className='d-flex flex-column align-items-center bg-dark rounded text-white py-3'>
        {cart && cart?.product_items?.length > 0 ? (
          <>
            <div className='container'>
              <ProductList cart={cart} />
            </div>
            <Link
              className='btn btn-light d-flex align-items-center'
              to='/checkout'
            >
              <i className='bi bi-cart-check pe-2'></i>
              Checkout
            </Link>
          </>
        ) : (
          <div className='row py-2'>
            <p className='col-12 text-center pt-2'>No Products in Basket</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default CartPage
