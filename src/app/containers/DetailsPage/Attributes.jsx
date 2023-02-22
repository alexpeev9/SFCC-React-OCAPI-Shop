import { useState } from 'react'

const Attributes = ({
  attributes,
  selectedAttributes,
  setSelectedAttributes,
  variants
}) => {
  const [availableAttr, setAvailableAttr] = useState({})
  const selectAttribute = (attribute, value) => {
    const obj = {}
    setSelectedAttributes({ ...selectedAttributes, [attribute]: value })
    variants
      .filter((v) => {
        return v.variation_values[attribute] === value
      })
      .forEach((v) => {
        Object.entries(v.variation_values).forEach((c) => {
          if (!obj.hasOwnProperty(c[0])) {
            obj[c[0]] = []
            obj[c[0]].push(c[1])
          } else {
            if (!obj[c[0]].includes(c[1])) {
              obj[c[0]].push(c[1])
            }
          }
        })
      })
    setAvailableAttr(obj)
  }
  return (
    <>
      {attributes?.map((a, key) => (
        <div key={key}>
          <span className='h5'>{a.name}</span>
          {a.values?.map((v, key) =>
            v.orderable ? (
              <button
                key={key}
                disabled={selectedAttributes[a.id] === v.value}
                className={`btn m-2 ${
                  selectedAttributes[a.id] === v.value
                    ? 'btn-warning'
                    : 'btn-dark'
                } ${
                  Object.keys(availableAttr).length === 0 ||
                  availableAttr[a.id]?.includes(v.value)
                    ? 'd-inline-block'
                    : 'd-none'
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
