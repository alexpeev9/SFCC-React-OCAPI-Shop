const Dropdown = ({ name, label, action, body }) => {
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
        {body}
      </select>
    </>
  )
}

export default Dropdown
