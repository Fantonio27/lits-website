"use client"
import { useEffect, useState } from 'react'
import { Header, Table, dataset } from '@/utils'
import { Fetch } from '@/utils/teams/api'
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebase";

const page = () => {

    const [Dataform, setDataform] = useState([])
    const [ImageList, setImageList] = useState({})

    useEffect(() => {
        async function get() {
            const fetch = await Fetch()
            map(fetch)
            setDataform(fetch)
        }

        get()

    }, [])

    const map = (dataform) => {
        dataform.map(data => {
            getDownloadURL(ref(storage, `teams/${data.avatar}`)).then((url) => {
                setImageList((prev) => ({ ...prev, [data.id]: url }))
            })
        })
    }

    const url = () => {
        return location.href.split('/').at(-1);
    }

    const data = dataset[url(1)]

    return (

        <div className=''>
            <Header Title={data.instructions} table={url(1)}/>
            <Table
                column={data.fields}
                row={Dataform}
                image={ImageList}
            />
        </div>
    )
}

export default page