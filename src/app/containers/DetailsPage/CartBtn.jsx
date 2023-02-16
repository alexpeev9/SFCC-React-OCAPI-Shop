const CartBtn = ({ quantity }) => {
  const addToCart = () => {
    console.log(quantity)
  }
  return (
    <button className='btn btn-dark' onClick={addToCart}>
      Add to Cart
    </button>
  )
}

export default CartBtn
