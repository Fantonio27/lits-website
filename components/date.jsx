

const date = ({id, value, disabled, method}) => {
  return (
    <div>
      <input
        type="date"
        name={id}
        value={value}
        onChange={method}
        className="input-style" />
    </div>
  )
}

export default date