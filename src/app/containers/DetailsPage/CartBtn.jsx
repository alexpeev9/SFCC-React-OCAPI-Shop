import { createCart, addItemToCart } from '../../services/cartService'
import { getCustomerId } from '../../services/jwtService'

const CartBtn = ({ quantity, productId }) => {
  const addToCart = async () => {
    const customerId = await getCustomerId()
    const basketId = localStorage.getItem('basket_id')
    const basketCustomer = localStorage.getItem('basket_customer')

    if (basketCustomer === customerId && basketId) {
      console.log('Existing')
      const response = await addItemToCart(basketId, productId, quantity)
      console.log(response)
    } else {
      console.log('New')
      const response = await createCart(customerId)
      localStorage.setItem(
        'basket_customer',
        response.customer_info.customer_id
      )
      localStorage.setItem('basket_id', response.basket_id)
    }
  }
  return (
    <button className='btn btn-dark' onClick={addToCart}>
      Add to Cart
    </button>
  )
}

export default CartBtn
