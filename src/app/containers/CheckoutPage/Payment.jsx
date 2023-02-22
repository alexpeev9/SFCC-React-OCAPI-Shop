import { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown'
import InputField from '../../components/InputField'
import {
  addPaymentMethod,
  createOrder,
  getPaymentMethods
} from '../../services/paymentService'

const Payment = ({ setStep, setSuccessMessage }) => {
  const [paymentMethods, setPaymentMethods] = useState(null)
  useEffect(() => {
    const getCart = async () => {
      const response = await getPaymentMethods()
      setPaymentMethods(response)
    }
    getCart()
  }, [])

  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    securityCode: '',
    holder: '',
    cardType: '',
    expirationMonth: '',
    expirationYear: ''
  })

  const onInputChange = (e) => {
    const { name, value } = e.target
    setCardInfo({ ...cardInfo, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    setCardInfo(data)
    const payment = await addPaymentMethod(data)
    if (payment) {
      const order = await createOrder()
      if (order) {
        setSuccessMessage(order.order_no)
      }
    }
    setStep(4)
  }

  return (
    <>
      <h2>Payment Info</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <form
          className='row d-flex justify-content-center'
          onSubmit={handleSubmit}
        >
          <Dropdown
            name={'cardType'}
            label={'Card Type'}
            action={onInputChange}
            body={
              paymentMethods ? (
                paymentMethods.map((method, key) => (
                  <option value={method.card_type} key={key}>
                    {method.name}
                  </option>
                ))
              ) : (
                <option value='error'>Currently, no shipping methods</option>
              )
            }
          />
          <hr className='my-3' />
          <InputField
            name={'cardNumber'}
            label={'Card Number'}
            type={'text'}
            value={cardInfo.cardNumber}
            action={onInputChange}
          />
          <InputField
            name={'securityCode'}
            label={'Security Code'}
            type={'text'}
            value={cardInfo.securityCode}
            action={onInputChange}
          />
          <InputField
            name={'holder'}
            label={'Card Owner'}
            type={'text'}
            value={cardInfo.holder}
            action={onInputChange}
          />
          <InputField
            name={'expirationMonth'}
            label={'Expiration Month'}
            type={'number'}
            value={cardInfo.expirationMonth}
            action={onInputChange}
          />
          <InputField
            name={'expirationYear'}
            label={'Expiration Year'}
            type={'number'}
            value={cardInfo.expirationYear}
            action={onInputChange}
          />
          <div className='col-12 d-flex justify-content-center'>
            <button className='btn btn-light px-4 my-0 mt-2 mb-1' type='submit'>
              <i className='bi bi-credit-card'></i> Make Order
            </button>
          </div>
        </form>
        <button className='btn btn-light me-2' onClick={() => setStep(2)}>
          Back
        </button>
      </div>
    </>
  )
}

export default Payment