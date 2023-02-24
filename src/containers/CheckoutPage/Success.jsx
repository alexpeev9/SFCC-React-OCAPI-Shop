import { Link } from 'react-router-dom'

const Success = ({ successMessage }) => {
  return (
    <>
      <h2>Success</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        {successMessage}
        <Link to='/' className='btn btn-light my-0'>
          to Home Page
        </Link>
      </div>
    </>
  )
}

export default Success
