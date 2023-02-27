const Quantity = ({ quantity, setQuantity }) => {
  const changeQuantity = (command) => {
    if (command === 'increase' && quantity !== 10) {
      setQuantity(quantity + 1)
    } else if (command === 'decrease' && quantity !== 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <>
      <p className='h5'>Quantity:</p>
      <div className='pb-2'>
        <button
          onClick={() => changeQuantity('decrease')}
          className='btn btn-dark ms-2'
        >
          <i class='bi bi-dash'></i>
        </button>
        <span className='mx-3'>{quantity}</span>
        <button
          onClick={() => changeQuantity('increase')}
          className='btn btn-dark me-2'
        >
          <i class='bi bi-plus'></i>
        </button>
      </div>
    </>
  )
}

export default Quantity
