import { useContext } from 'react'
import { addItemToCart } from '../../services/cartService'
import { CartCountContext } from '../../utils/Context'

const CartBtn = ({ quantity, selectedAttributes, variants, productBaseID }) => {
  const setCartCount = useContext(CartCountContext)[1]

  const addToCart = async () => {
    let productId
    if (Object.keys(selectedAttributes).length === 0) {
      productId = productBaseID
    } else {
      productId = variants.find((v) => {
        return (
          JSON.stringify(selectedAttributes) ===
          JSON.stringify(v.variation_values)
        )
      }).product_id
    }
    const response = await addItemToCart(productId, quantity)

    const cartItemsLength = response.product_items.length
    setCartCount(cartItemsLength)
  }

  const isDisabled =
    Object.values(selectedAttributes).includes('') &&
    Object.values(selectedAttributes).length !== 0

  return (
    <>
      <p className='h5'>Actions:</p>
      <button
        disabled={isDisabled}
        className={`btn ${isDisabled ? 'btn-dark' : 'btn-warning'}`}
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </>
  )
}

export default CartBtn
