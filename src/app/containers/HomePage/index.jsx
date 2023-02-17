import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='container pt-2'>
      <Link className='btn btn-dark me-2' to='/product/namco-we-ski-wiiM'>
        We Ski (for Wii)
      </Link>
      <Link className='btn btn-dark me-2' to='/product/gpx-ml838bM'>
        GPX ML838 Digital Media Player
      </Link>
      <Link className='btn btn-dark me-2' to='/product/P0150M'>
        Upright Case (33L - 3.7Kg)
      </Link>
    </div>
  )
}

export default HomePage
