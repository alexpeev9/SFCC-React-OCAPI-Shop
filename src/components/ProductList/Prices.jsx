import PriceRow from './PriceRow'

const Prices = ({ cart }) => {
  return cart ? (
    <>
      <hr />
      <div className='container p-3 my-2'>
        <PriceRow
          label={'Product Total'}
          value={cart.product_total}
          currency={cart.currency}
        />
        <PriceRow
          label={'Shipping Method'}
          value={cart.shipments[0].shipping_method?.price}
          currency={cart.currency}
        />
        <PriceRow
          label={'Taxes'}
          value={cart.tax_total}
          currency={cart.currency}
        />
        <PriceRow
          label={'Final Price'}
          value={cart.order_total}
          currency={cart.currency}
        />
      </div>
    </>
  ) : (
    <></>
  )
}

export default Prices
