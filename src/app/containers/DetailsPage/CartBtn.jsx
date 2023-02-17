import useCustomerIdHook from '../../hooks/useCustomerIdHook'
import { createCart } from '../../services/cartService'

const CartBtn = ({ quantity }) => {
  const customerId = useCustomerIdHook()

  const addToCart = async () => {
    const response = await createCart(customerId)
    console.log(response)
  }
  return (
    <button className='btn btn-dark' onClick={addToCart}>
      Add to Cart
    </button>
  )
}

export default CartBtn
