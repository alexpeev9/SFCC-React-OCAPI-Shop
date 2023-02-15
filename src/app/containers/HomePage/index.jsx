import { Link } from 'react-router-dom'

const HomePage = ({ id }) => {
  return (
    <div>
      <h1>Welcome {id}</h1>
      <Link to='/product/25686514M'>Male Suit</Link>
    </div>
  )
}

export default HomePage
