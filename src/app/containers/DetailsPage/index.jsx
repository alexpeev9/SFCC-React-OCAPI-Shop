import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './assets/style.css'
import { getProduct } from '../../services/productService'

import CartBtn from './CartBtn'
import Quantity from './Quantity'
import Attributes from './Attributes'

const DetailsPage = () => {
  const { productID } = useParams()

  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedAttributes, setSelectedAttributes] = useState({})
  const [attributes, setAttributes] = useState([])
  const [variants, setVariants] = useState([])
  useEffect(() => {
    const getProductDetails = async () => {
      const response = await getProduct(productID)
      setProduct(response)
      if (response.variants && response.variation_attributes) {
        setVariants(response.variants)
        setAttributes(response.variation_attributes)
        setSelectedAttributes(
          response.variation_attributes
            .map((a) => a.id)
            .reduce((accumulator, value) => {
              return { ...accumulator, [value]: '' }
            }, {})
        )
      }
    }
    getProductDetails()
  }, [productID])
  console.log(product)
  console.log(selectedAttributes)
  return product ? (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-4'>
          <div className='main-image'>
            {product.image_groups[1].images.map((i, key) => {
              return (
                <img
                  key={key}
                  src={i.link}
                  className='d-block w-100 img-fluid my-2'
                  alt={i.title}
                />
              )
            })}
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
          <Attributes
            attributes={attributes}
            setAttributes={setAttributes}
            selectedAttributes={selectedAttributes}
            setSelectedAttributes={setSelectedAttributes}
            variants={variants}
          />
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          {product.inventory.orderable ? (
            <CartBtn
              quantity={quantity}
              selectedAttributes={selectedAttributes}
              variants={variants}
              productBaseID={productID}
            />
          ) : (
            <p className='text-danger h6'>
              Sorry, the product is out of Stock.
            </p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default DetailsPage
