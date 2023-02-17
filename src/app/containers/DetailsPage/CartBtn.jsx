import useCustomerIdHook from '../../hooks/useCustomerIdHook'
import { createCart, getCart } from '../../services/cartService'

const CartBtn = ({ quantity }) => {
  const customerId = useCustomerIdHook()

  const addToCart = async () => {
    const basketId = localStorage.getItem('basket_id')
    const basketCustomer = localStorage.getItem('basket_customer')

    if (basketCustomer === customerId) {
      console.log('Existing')
      const cart = await getCart(basketId)
      console.log(cart)
    } else {
      console.log('New')
      const response = await createCart(customerId)
      localStorage.setItem('basket_id', response.basket_id)
      localStorage.setItem(
        'basket_customer',
        response.customer_info.customer_id
      )
    }
  }
  return (
    <button className='btn btn-dark' onClick={addToCart}>
      Add to Cart
    </button>
  )
}

export default CartBtn
