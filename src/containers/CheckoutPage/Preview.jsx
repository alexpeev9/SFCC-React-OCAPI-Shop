import { useContext, useEffect, useState } from 'react'
import { getCartItems } from '../../services/cartService'
import { CartCountContext } from '../../utils/Context'
import ProductList from '../../components/ProductList'

const Preview = ({ setStep }) => {
  const [cart, setCart] = useState(null)
  const cartCount = useContext(CartCountContext)[0]
  useEffect(() => {
    const getCart = async () => {
      const cartInfo = await getCartItems()
      setCart(cartInfo)
    }
    getCart()
  }, [cartCount])
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