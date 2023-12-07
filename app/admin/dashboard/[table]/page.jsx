"use client"
import { useEffect, useState } from 'react'
import { Header, Table, dataset } from '@/utils'
import { Fetch } from '@/utils/teams/api'
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebase";

const page = () => {

    const url = () => {
        return location.href.split('/').at(-1);
    }

    const [Dataform, setDataform] = useState([])
    const [ImageList, setImageList] = useState({})

    useEffect(() => {
        async function get() {
            const fetch = await Fetch(url(1))
            map(fetch)
            setDataform(fetch)
        }

        get()

    }, [])


    const map = (dataform) => {
        dataform.map(data => {
            getDownloadURL(ref(storage, `${url(1)}/${data.avatar}`)).then((url) => {
                setImageList((prev) => ({ ...prev, [data.id]: url }))
            })
        })
    }

    const data = dataset[url(1)]

    return (
        <div className=''>
            <Header Title={data ? data.instructions : ''} table={url(1)} />
            <div className='flex gap-3 mb-5'>
                <a href={`teams`} className='bg-white blue text-15 px-5 py-2 rounded-md quicksand'>
                    List of Teams
                </a>
                <a href="events" className='bg-white blue text-15 px-5 py-2 rounded-md quicksand'>
                    List of Events
                </a>
            </div>
            <Table
                column={data ? data.fields : []}
                row={Dataform}
                image={ImageList}
                table={url(1)}
            />
        </div>
    )
}

export default page