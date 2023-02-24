import { useCartContext } from '../../contexts/CartContext'
import useAddToCart from '../../hooks/useAddToCart'
import useCreateCart from '../../hooks/useCreateCart'

const CartBtn = ({ quantity, selectedAttributes, variants, productBaseID }) => {
  const { cart } = useCartContext()
  const { createCart } = useCreateCart()
  const { addToCart, isAddedToCart } = useAddToCart()

  const addItemToCart = async () => {
    let productId
    if (selectedAttributes) {
      productId = variants.find((v) => {
        return (
          JSON.stringify(selectedAttributes) ===
          JSON.stringify(v.variation_values)
        )
      }).product_id
    } else {
      productId = productBaseID
    }

    if (!cart) {
      createCart()
    }

    addToCart(quantity, productId)
  }

  const isDisabled = selectedAttributes
    ? Object.values(selectedAttributes).includes('')
    : false

  return (
    <>
      <p className='h5'>Actions:</p>
      <button
        disabled={isDisabled && !isAddedToCart}
        className={`btn ${isDisabled ? 'btn-dark' : 'btn-warning'}`}
        onClick={addItemToCart}
      >
        Add to Cart
      </button>
    </>
  )
}

export default CartBtn
