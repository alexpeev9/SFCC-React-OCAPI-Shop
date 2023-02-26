import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import useGetPaymentMethods from '../../hooks/useGetPaymentMethods'
import useAddPayment from '../../hooks/useAddPayment'
import useCreateOrder from '../../hooks/useCreateOrder'

import Dropdown from '../../components/Dropdown'
import InputField from '../../components/InputField'

const Payment = ({ setStep }) => {
  const { data: paymentMethods } = useGetPaymentMethods()
  const { addPayment, isPayed } = useAddPayment()
  const { createOrder, orderNumber } = useCreateOrder()

  const [requirements, setRequirements] = useState({
    number_lengths: [13, 16],
    security_code_length: 3
  })

  const [cardInfo, setCardInfo] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    securityCode: '',
    cardType: paymentMethods ? paymentMethods[0].card_type : 'Visa',
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
    await addPayment(cardInfo)
    setStep(5)
  }

  const makeOrder = async () => {
    if (isPayed) {
      await createOrder()
    }
  }

  return !orderNumber ? (
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
          <div className='row d-flex justify-content-center'>
            <button
              className='col-md-2 col-6 btn btn-light px-4 my-0 mt-2 mb-1 align-items-center'
              type='submit'
            >
              <i className='bi bi-credit-card'></i> Make Payment
            </button>
            {isPayed ? (
              <>
                <p className='col-12 text-success text-center h3'>
                  Payment is Successfull
                </p>
                <button
                  className='col-md-2 col-6 btn btn-light px-4 my-0 mt-2 mb-1 align-items-stretch'
                  onClick={makeOrder}
                >
                  <i className='bi bi-cash-coin'></i> Create Order
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </form>
        <button className='btn btn-light me-2' onClick={() => setStep(3)}>
          Back
        </button>
      </div>
    </>
  ) : (
    <Navigate to={`/order/${orderNumber}`} />
  )
}

export default Payment
