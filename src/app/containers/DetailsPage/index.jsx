import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './assets/style.css'
import { getProduct } from '../../services/productService'

import CartBtn from './CartBtn'
import Quantity from './Quantity'

const DetailsPage = () => {
  const { productID } = useParams()

  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await getProduct(productID)
      setProduct(response)
    }
    getProductDetails()
  }, [productID, setQuantity])

  return product ? (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-4'>
          <div className='main-image'>
            <img
              src={product.image_groups[0].images[0].link}
              alt={product.image_groups[0].images[0].title}
              className='img-fluid rounded'
            />
          </div>
        </div>
        <div className='col-8'>
          <div className='row'>
            <h1>{product.name}</h1>
            <h4>
              {product.price} {product.currency}
            </h4>
            <p>{product.page_description}</p>
          </div>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <CartBtn quantity={quantity} productId={productID} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default DetailsPage
