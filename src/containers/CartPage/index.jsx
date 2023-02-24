import { Link } from 'react-router-dom'

import ProductList from '../../components/ProductList'
import { useCartContext } from '../../contexts/CartContext'

const CartPage = () => {
  const { cart } = useCartContext()
  return (
    <main className='container py-3'>
      <h1>Cart {cart ? `${cart.customer_info.email}` : ''}</h1>
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
