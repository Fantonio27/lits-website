"use client"
import { useState } from 'react'

const image = ({ id, value, method, disabled, table }) => {
    const image = value == null ? null : URL.createObjectURL(value)
    const [Image, setImage] = useState(image)

    const map = () => {
        if (method == "edit")
            getDownloadURL(ref(storage, `${table}/${data.avatar}`)).then((url) => {
                setImage(url)
            })
    }

    map()

    return (
        <div className="flex gap-5">
            <img src={Image} alt="" className=" w-24 h-24" />
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