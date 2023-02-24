import ProductList from '../../components/ProductList'
import { useCartContext } from '../../contexts/CartContext'

const Preview = ({ setStep }) => {
  const { cart } = useCartContext()
  return (
    <>
      <h2>Payment Info</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <div>
          {cart && cart?.product_items?.length > 0 ? (
            <>
              <div className='container'>
                <ProductList cart={cart} />
              </div>
            </>
          ) : (
            <div className='row py-2'>
              <p className='col-12 text-center pt-2'>No Products in Basket</p>
            </div>
          )}
        </div>
        <button className='btn btn-light me-2' onClick={() => setStep(1)}>
          Back
        </button>
        <button className='btn btn-light me-2' onClick={() => setStep(3)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Preview
