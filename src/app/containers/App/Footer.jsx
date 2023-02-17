import { useEffect, useState } from 'react'

import { getContentAsset } from '../../services/contentAssetService'

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState(null)
  useEffect(() => {
    const getAsset = async () => {
      const response = await getContentAsset('ocapi-footer')
      setFooterInfo(response.c_body)
    }
    getAsset()
  }, [])
  return (
    <footer
      className='position-fixed bottom-0 w-100 d-flex flex-wrap gap-5 justify-content-center align-items-center bg-dark'
      dangerouslySetInnerHTML={{ __html: footerInfo }}
    ></footer>
  )
}

export default Footer
