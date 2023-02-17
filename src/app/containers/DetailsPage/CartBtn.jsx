import { useContext } from 'react'
import { addItemToCart, createCart } from '../../services/cartService'
import { CartCountContext } from '../../utils/Context'

const CartBtn = ({ quantity, productId }) => {
  const setCartCount = useContext(CartCountContext)[1]

  const addToCart = async () => {
    const cartId = await createCart()

    const response = await addItemToCart(cartId, productId, quantity)

    const cartItemsLength = response.product_items.length
    setCartCount(cartItemsLength)
  }
  return (
    <button className='btn btn-dark' onClick={addToCart}>
      Add to Cart
    </button>
  )
}

export default CartBtn
