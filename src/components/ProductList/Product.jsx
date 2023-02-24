import { Link } from 'react-router-dom'

import useRemoveFromCart from '../../hooks/useRemoveFromCart'

const Product = ({ item, currency }) => {
  const { removeFromCart } = useRemoveFromCart()

  const removeProduct = async (id) => {
    removeFromCart(id)
  }

  return (
    <div className='row align-items-xl-center'>
      <div className='col-12 col-xl-7 py-2'>
        <div className='d-xl-none d-inline pe-2 h6'>Product:</div>
        {item.product_name}
      </div>
      <div className='col-6 col-xl-1 py-2'>
        <div className='d-xl-none d-inline pe-2 h6'>Quantity:</div>
        {item.quantity}
      </div>
      <div className='col-6 col-xl-1 py-2'>
        <div className='d-xl-none d-inline pe-2 h6'>Price:</div>
        {item.price.toFixed(2)} {currency}
      </div>
      <div className='col-12 col-xl-3 d-flex justify-content-xl-around py-2'>
        <Link
          className='btn btn-light my-xl-0 my-2 me-xl-0 me-2'
          to={`/product/${item.product_id}`}
        >
          Details
        </Link>
        <button
          className='btn btn-danger my-xl-0 my-2'
          onClick={() => removeProduct(item.item_id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default Product
