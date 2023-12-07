"use client"
import { useEffect, useState } from 'react'

const image = ({ id, value, method, disabled, action, pastvalue }) => {
    let img = value == null ? null : URL.createObjectURL(value)
    const passimg = pastvalue

    return (
        <div className="flex gap-5">
            {(action == "edit" || action == "view") && <img src={passimg} alt="" className=" w-24 h-24" />}
            {action != "view" && <img src={img} alt="" className=" w-24 h-24" />}
            {
                action != "view" &&
                <input
                    type="file"
                    name={id}
                    className="text-15 quicksand"
                    onChange={method}
                    disabled={disabled}
                />
            }

        </div>
    )
}

export default image