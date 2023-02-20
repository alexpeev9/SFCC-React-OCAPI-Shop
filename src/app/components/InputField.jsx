const InputField = ({ name, label, type, value, action }) => {
  return (
    <>
      <label htmlFor={name} className='col-5 col-xl-2 text-center my-2 py-1'>
        {label}* :
      </label>
      <input
        className='col-5 col-xl-3 me-4 my-2 py-1'
        type={type}
        placeholder={`Enter ${label}`}
        name={name}
        value={value}
        onChange={action}
        required
      />
    </>
  )
}

export default InputField
