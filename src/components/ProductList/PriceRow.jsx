const PriceRow = ({ label, value, currency }) => {
  return value ? (
    <div className='row justify-content-end'>
      <div className='col-lg-2 col-4 border-light py-2'>{label}:</div>
      <div className='col-lg-2 col-4 border-light py-2'>
        {value.toFixed(2)} {currency}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default PriceRow
