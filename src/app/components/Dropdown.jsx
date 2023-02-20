const Dropdown = ({ name, label, options, action }) => {
  return (
    <>
      <label
        htmlFor={name}
        className='col-7 col-xl-3 text-center my-xl-2 my-1 py-xl-2 py-0'
      >
        {label}* :
      </label>
      <select
        className='col-7 col-xl-4 my-2 py-2 text-center mx-0'
        onChange={action}
        name={name}
        required
      >
        {options ? (
          options.map((option, key) => (
            <option value={option.value} key={key}>
              {option.description}
            </option>
          ))
        ) : (
          <option value='error'>Currently, no shipping methods</option>
        )}
      </select>
    </>
  )
}

export default Dropdown
