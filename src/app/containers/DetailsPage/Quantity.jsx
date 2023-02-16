const Quantity = ({ quantity, setQuantity }) => {
  const changeQuantity = (command) => {
    if (command === 'increase' && quantity !== 10) {
      setQuantity(quantity + 1)
    } else if (command === 'decrease' && quantity !== 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <div className='pb-2'>
      <button
        onClick={() => changeQuantity('increase')}
        className='btn btn-dark me-2'
      >
        +
      </button>
      {quantity}
      <button
        onClick={() => changeQuantity('decrease')}
        className='btn btn-dark ms-2'
      >
        -
      </button>
    </div>
  )
}

export default Quantity
