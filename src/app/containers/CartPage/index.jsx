import { useContext, useEffect, useState } from 'react'
import { CartCountContext } from '../../utils/Context'
import { getCartItems } from '../../services/cartService'

import ProductList from './ProductList'

const CartPage = () => {
  const [cart, setCart] = useState(null)
  const cartCount = useContext(CartCountContext)[0]
  useEffect(() => {
    const getCart = async () => {
      const cartInfo = await getCartItems()
      console.log(cartInfo)
      setCart(cartInfo)
    }
    getCart()
  }, [cartCount])
  return (
    <div className='container pt-3'>
      <h1>Cart</h1>
      <div className='d-flex flex-column align-items-left bg-dark rounded text-white'>
        {cart && cart?.product_items?.length > 0 ? (
          <>
            <div className='container'>
              <ProductList cart={cart} />
            </div>
            <button className='btn btn-dark'>Checkout</button>
          </>
        ) : (
          <div className='row py-2'>
            <p className='col-12 text-center pt-2'>No Products in Basket</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
