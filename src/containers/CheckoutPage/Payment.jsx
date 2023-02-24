import { useContext, useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown'
import InputField from '../../components/InputField'
import {
  addPaymentMethod,
  createOrder,
  getPaymentMethods
} from '../../services/paymentService'
import { CartCountContext } from '../../utils/Context'

const Payment = ({ setStep, setSuccessMessage }) => {
  const setCartCount = useContext(CartCountContext)[1]
  const [paymentMethods, setPaymentMethods] = useState(null)
  const [requirements, setRequirements] = useState({
    number_lengths: [13, 16],
    security_code_length: 3
  })
  useEffect(() => {
    const getCart = async () => {
      const response = await getPaymentMethods()
      setPaymentMethods(response)
      setRequirements(response[0]) // get first method requirements
    }
    getCart()
  }, [])
  const [cardInfo, setCardInfo] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    securityCode: '',
    cardType: '',
    expirationMonth: '',
    expirationYear: ''
  })

  const onPaymentChange = (e) => {
    const { name, value } = e.target
    const paymentMethod = paymentMethods.find((p) => p.card_type === value)
    setRequirements(paymentMethod)
    setCardInfo({ ...cardInfo, [name]: value })
  }

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
      setCartCount(0)
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
            action={onPaymentChange}
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
            pattern={`\\d{${requirements.number_lengths[0]},${
              requirements.number_lengths[1] || requirements.number_lengths[0]
            }}`}
            title={`Card Number must be ${
              requirements.number_lengths[1]
                ? `${requirements.number_lengths[0]} - ${requirements.number_lengths[1]}`
                : requirements.number_lengths[0]
            } characters long`}
          />
          <InputField
            name={'securityCode'}
            label={'Security Code'}
            type={'text'}
            value={cardInfo.securityCode}
            action={onInputChange}
            pattern={`\\d{${requirements.security_code_length},${requirements.security_code_length}}`}
            title={`Security Code must be ${requirements.security_code_length} numbers long`}
          />
          <InputField
            name={'expirationMonth'}
            label={'Expiration Month'}
            type={'number'}
            value={cardInfo.expirationMonth}
            min={1}
            max={12}
            action={onInputChange}
          />
          <InputField
            name={'expirationYear'}
            label={'Expiration Year'}
            type={'number'}
            value={cardInfo.expirationYear}
            min={2023}
            max={2033}
            action={onInputChange}
          />
          <InputField
            name={'firstName'}
            label={'First Name'}
            type={'text'}
            value={cardInfo.firstName}
            action={onInputChange}
          />
          <InputField
            name={'lastName'}
            label={'Last Name'}
            type={'text'}
            value={cardInfo.lastName}
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
