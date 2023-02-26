import useGetContentAsset from '../../hooks/useGetContentAsset'

const Footer = () => {
  const { data, error } = useGetContentAsset('ocapi-footer')

  return (
    <>
      {!error ? (
        <footer
          className='position-fixed bottom-0 w-100 d-flex flex-wrap gap-5 justify-content-center align-items-center bg-dark'
          dangerouslySetInnerHTML={{ __html: data }}
        ></footer>
      ) : (
        <></>
      )}
    </>
  )
}

export default Footer
