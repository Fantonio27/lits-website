"use client"
import { Form } from "@/utils";
const page = () => {
    const url = (num) => {
        return location.href.split('/').at(-num);
    }

    return (
        <div>
            <Form method={url(1)} table={url(2)}/>
        </div>
    )
}

export default page