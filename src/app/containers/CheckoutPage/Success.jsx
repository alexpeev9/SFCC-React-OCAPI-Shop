import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getContentAsset } from '../../services/contentAssetService'

const Success = ({ successMessage }) => {
  const [successMsgPlaceHolder, setSuccessMsgPlaceHolder] = useState(null)
  useEffect(() => {
    const getAsset = async () => {
      const response = await getContentAsset('thanks-for-purchase-message')
      setSuccessMsgPlaceHolder(
        response.c_body.replace('${orderID}', successMessage)
      )
    }
    getAsset()
  }, [successMessage])
  return (
    <>
      <h2>Success</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <p>{successMsgPlaceHolder}</p>
        <Link to='/' className='btn btn-light my-0'>
          to Home Page
        </Link>
      </div>
    </>
  )
}

export default Success
