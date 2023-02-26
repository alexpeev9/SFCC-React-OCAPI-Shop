import { Link, useParams } from 'react-router-dom'

import useGetContentAsset from '../../hooks/useGetContentAsset'

const Order = () => {
  const { orderID } = useParams()
  const { data, error } = useGetContentAsset('thanks-for-purchase-message')

  return (
    <>
      <main className='container py-2'>
        <h1>Order</h1>
        <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
          {!error ? (
            <>
              <p>{data?.replace('[orderID]', orderID)}</p>
              <Link to='/' className='btn btn-light my-0'>
                to Home Page
              </Link>
            </>
          ) : (
            <p>{error}</p>
          )}
        </div>
      </main>
    </>
  )
}

export default Order
