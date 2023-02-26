import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <>
      <p>Products</p>
      <Link className='btn btn-dark me-2' to='/product/namco-we-ski-wiiM'>
        We Ski (for Wii)
      </Link>
      <Link className='btn btn-dark me-2' to='/product/gpx-ml838bM'>
        GPX ML838 Digital Media Player
      </Link>
      <hr />
      <p>Master/Variants Product</p>
      <Link className='btn btn-dark me-2' to='/product/008885538410M'>
        Must Have Washable No-Iron Georgette Blouse
      </Link>
      <Link className='btn btn-dark me-2' to='/product/25686514M'>
        Suit
      </Link>
      <hr />
      <p>Bundle Products</p>
      <Link className='btn btn-dark me-2' to='/product/013742002799M'>
        Turquoise and Gold Hoop Earring
      </Link>
    </>
  )
}

export default Links
