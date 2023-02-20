import Product from './Product'

const ProductList = ({ cart }) => {
  return (
    <>
      <div className='row align-items-center py-2'>
        <div className='col-7 d-xl-block d-none h5'>Products</div>
        <div className='col-1 d-xl-block d-none h5'>Quantity</div>
        <div className='col-1 d-xl-block d-none h5'>Price</div>
        <div className='col-3 d-xl-block d-none h5 text-center'>Actions</div>
      </div>
      {cart.product_items?.map((item, key) => (
        <Product item={item} key={key} currency={cart.currency} />
      ))}
    </>
  )
}

export default ProductList
