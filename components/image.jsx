const image = ({ id, value, method, disabled }) => {
    const image = value == null ? null : URL.createObjectURL(value)
    return (
        <div className="flex gap-5">
            <img src={image} alt="" className=" w-24 h-24"/>
            <input
                type="file"
                name={id}
                className="text-15 quicksand"
                onChange={method}
                disabled={disabled}
            />
        </div>
    )
}

export default image