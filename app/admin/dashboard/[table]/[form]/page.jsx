"use client"
import { Form , dataset} from "@/utils";

const page = () => {
    const url = (num) => {
        return location.href.split('/').at(-num);
    }

    const data = dataset[url(2)]

    return (
        <div>
            <Form method={url(1)} table={url(2)} data={data}/>
        </div>
    )
}

export default page