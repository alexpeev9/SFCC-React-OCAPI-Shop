import Dropdown from '../../components/Dropdown'
import useAddShippingMethodToCart from '../../hooks/useAddShippingMethodToCart'
import useGetShippingMethods from '../../hooks/useGetShippingMethods'

const ShippingMethod = ({ shippingInfo, setShippingInfo, setStep }) => {
  const { addShippingMethodToCart } = useAddShippingMethodToCart()
  const { data: methods } = useGetShippingMethods()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (shippingInfo.shippingMethod === '') {
      await addShippingMethodToCart(methods[0].id)
    }
    await addShippingMethodToCart(shippingInfo.shippingMethod)
    setStep(3)
  }

  const onInputChange = (e) => {
    const { name, value } = e.target
    setShippingInfo({ ...shippingInfo, [name]: value })
  }
  return (
    <>
      <h2>Shipping Method</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <form
          className='row d-flex justify-content-center'
          onSubmit={handleSubmit}
        >
          <Dropdown
            name={'shippingMethod'}
            label={'Shipping Method'}
            action={onInputChange}
            body={
              methods ? (
                methods.map((method, key) => (
                  <option value={method.id} key={key}>
                    {method.name} - {method.price} USD
                  </option>
                ))
              ) : (
                <option value='error'>Currently, no shipping methods</option>
              )
            }
          />
          <div className='col-12 d-flex justify-content-center'>
            <button className='btn btn-light px-4 my-0 mt-2 mb-1' type='submit'>
              <i className='bi bi-truck'></i> Add Shipping Method
            </button>
          </div>
        </form>
        <button
          className='btn btn-light me-2'
          type='button'
          onClick={() => setStep(1)}
        >
          Back
        </button>
      </div>
    </>
  )
}

export default ShippingMethod
