import { useState } from 'react'
import Dropdown from '../../components/Dropdown'
import InputField from '../../components/InputField'
import useGetPaymentMethods from '../../hooks/useGetPaymentMethods'
import useAddPayment from '../../hooks/useAddPayment'
import useCreateOrder from '../../hooks/useCreateOrder'

const Payment = ({ setStep, setSuccessMessage }) => {
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

  const makeOrder = async () => {
    await addPayment(cardInfo)
    await createOrder()
    console.log(orderNumber)
  }

  return (
    <>
      <h2>Payment Info {isPayed}</h2>
      <div className='container bg-dark rounded text-white my-1 py-4 px-5'>
        <form
          className='row d-flex justify-content-center'
          onSubmit={makeOrder}
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
      </div>
    </>
  )
}

export default Payment
