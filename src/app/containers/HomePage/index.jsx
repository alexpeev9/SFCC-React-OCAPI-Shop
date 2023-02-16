import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='container pt-2'>
      <Link className='btn btn-dark me-2' to='/product/25686514M'>
        Male Suit
      </Link>
      <Link className='btn btn-dark me-2' to='/product/34736758M'>
        Jacket
      </Link>
    </div>
  )
}

export default HomePage
