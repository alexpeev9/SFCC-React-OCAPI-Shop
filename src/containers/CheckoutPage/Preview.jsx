import ProductList from '../../components/ProductList'
import { useCartContext } from '../../contexts/CartContext'

const Preview = ({ setStep }) => {
  const { cart } = useCartContext()
  return (
    <>
      <h2>Payment Info</h2>
      <div className='container justify-content-center bg-dark rounded text-white my-1 py-4 px-5'>
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
        <div className='d-flex justify-content-center'>
          <button className='btn btn-light me-3' onClick={() => setStep(3)}>
            <i className='bi bi-arrow-left'></i> Back
          </button>
          <button className='btn btn-light me-3' onClick={() => setStep(5)}>
            Next <i className='bi bi-arrow-right'></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Preview
