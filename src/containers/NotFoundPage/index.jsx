import useAuth from '../../hooks/useAuth'

const NotFoundPage = () => {
  const { token, customerId, authError } = useAuth()
  return (
    <main className='d-flex flex-column align-items-center justify-content-center pt-2 text-dark'>
      <h1 className='display-1 fw-bold'>404</h1>
      <h2>Page not found</h2>
      <p className='bg-warning'>{token}</p>
      <p className='bg-danger'>{customerId}</p>
      <p className='text-secondary'>{authError}</p>
    </main>
  )
}

export default NotFoundPage
