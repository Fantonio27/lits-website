

const textarea = ({ id, value, method, disabled }) => {
  return (
    <div>
      <textarea
        name={id}
        cols="30"
        rows="3"
        className="input-style"
        disabled={disabled}
        onChange={method}
        value={value}
      >

      </textarea>
    </div>
  )
}

export default textarea