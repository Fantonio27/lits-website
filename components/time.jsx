
const time = ({id, value, disabled, method}) => {
  return (
    <div>
      <input
        type="time"
        name={id}
        value={value}
        onChange={method}
        className="input-style" />
    </div>
  )
}

export default time