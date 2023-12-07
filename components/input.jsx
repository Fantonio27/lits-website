
const input = ({ id, value, method, disabled }) => {
  return (
    <div>
      <input
        type="text"
        className="input-style"
        name={id}
        value={value || ""}
        onChange={method}
        disabled={disabled} />
    </div>
  )
}

export default input