import { Link } from 'react-router-dom'
import useCreateOrder from '../../hooks/useCreateOrder'

const Success = () => {
  const { orderNumber } = useCreateOrder()
  return (
    <>
      <h2>Success</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <p>{orderNumber ? orderNumber : 'A'}</p>
        <Link to='/' className='btn btn-light my-0'>
          to Home Page
        </Link>
      </div>
    </>
  )
}

export default Success
