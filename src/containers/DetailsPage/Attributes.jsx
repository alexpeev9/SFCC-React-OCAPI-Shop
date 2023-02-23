import { getProductImages } from '../../services/productService'

const Attributes = ({
  attributes,
  selectedAttributes,
  setSelectedAttributes,
  variants,
  setImages
}) => {
  const selectAttribute = async (attribute, value) => {
    setSelectedAttributes({ ...selectedAttributes, [attribute]: value })
    if (attribute === 'color') {
      const productId = variants.filter((v) => {
        return v.variation_values[attribute] === value
      })[0].product_id
      const images = await getProductImages(productId)
      setImages(images)
    }
  }
  return (
    <>
      {attributes?.map((a, key) => (
        <div key={key}>
          <p className='h5'>{a.name}:</p>
          {a.values?.map((v, key) =>
            v.orderable ? (
              <button
                key={key}
                disabled={selectedAttributes[a.id] === v.value}
                className={`btn m-2 ${
                  selectedAttributes[a.id] === v.value
                    ? 'btn-warning'
                    : 'btn-dark'
                }`}
                onClick={() => selectAttribute(a.id, v.value)}
              >
                {v.name}
              </button>
            ) : (
              <></>
            )
          )}
        </div>
      ))}
    </>
  )
}

export default Attributes
