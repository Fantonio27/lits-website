"use client"
import { Form , dataset} from "@/utils";

const page = () => {
    const url = (num) => {
        return location.href.split('/').at(-num);
    }

    const data = dataset[url(3)]

    return (
        <div>
            <Form method={url(2)} table={url(3)} data={data}/>
        </div>
    )
}

export default page