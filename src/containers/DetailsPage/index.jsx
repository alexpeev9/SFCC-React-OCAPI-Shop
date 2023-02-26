import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import useGetProductDetails from '../../hooks/useGetProductDetails'
import useGetProductImages from '../../hooks/useGetProductImages'

import Attributes from './Attributes'
import CartBtn from './CartBtn'
import Quantity from './Quantity'

import './assets/style.css'

const DetailsPage = () => {
  const { productID } = useParams()
  const {
    product,
    error: productError,
    attributes,
    variants,
    selectedAttributes,
    setSelectedAttributes
  } = useGetProductDetails(productID)
  const { data: images, setProductId } = useGetProductImages(productID)
  const [quantity, setQuantity] = useState(1)

  return !productError ? (
    product ? (
      <div className='container pt-4'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <div
              id='carouselExampleControls'
              className='carousel slide'
              data-bs-ride='carousel'
            >
              <div className='carousel-inner'>
                {images?.image_groups[0].images.map((i, key) => (
                  <div
                    className={`carousel-item ${key === 0 ? 'active' : ''}`}
                    key={key}
                  >
                    <img
                      src={i.link}
                      alt={i.title}
                      loading='lazy'
                      className='d-block w-100'
                    />
                  </div>
                ))}
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleControls'
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleControls'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
          <div className='col-12 col-md-8'>
            <div className='row'>
              <h1>{product.name}</h1>
              <h4>
                {product.price} {product.currency}
              </h4>
              <p>{product.page_description}</p>
            </div>
            <Attributes
              attributes={attributes}
              selectedAttributes={selectedAttributes}
              setSelectedAttributes={setSelectedAttributes}
              variants={variants}
              setProductId={setProductId}
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
  ) : (
    <Navigate to='/not-found' />
  )
}

export default DetailsPage
