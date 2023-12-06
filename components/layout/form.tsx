"use client"
import { Header, Input, Textarea, ComboBox, ImageFile } from '@/utils'
import { useRouter } from 'next/navigation'
import { ref, uploadBytes } from "firebase/storage"
import { storage } from "@/utils/firebase"
import { useState, useEffect } from 'react'
import { Create, Update, Fetch } from "@/utils/teams/api"
import { Amiri_Quran } from 'next/font/google'

const form = ({ table, method, data }: {
    table: string,
    method: string,
    data: any
}) => {

    const navigate = useRouter()
    const [Dataform, setDataform] = useState(data.dataform)
    const [avatar, setavatar] = useState<any>(null)

    useEffect(() => {
        async function Fetch() {
            const res = await Fetch
            setDataform(res)
        }

    }, [])

    const OnChange = (event: any) => {
        const { name, value } = event.target
        const picture = name == "avatar"

        if (picture) {
            setavatar(event.target.files[0])
        }

        setDataform((prev: any) => ({
            ...prev,
            [name]: picture ? event.target.files[0].name : value
        }))
    }

    const uploadImage = () => {
        if (table == "teams") {
            const imageRef = ref(storage, `teams/${Dataform.avatar}`)
            uploadBytes(imageRef, avatar).then(() => {
            })
        }
    }

    const Submit = async () => {
        if (method == "create") {
            await Create(Dataform)
            uploadImage()
        } else {
            await Update(Dataform)
            uploadImage()
        }

        navigate.push(`../${table}`)
    }

    const inputType = (field: any) => {
        const view = method == "view" ? true : false
        switch (field.type) {
            case 1:
                return <Input id={field.id} value={Dataform[field.id]} method={OnChange} disabled={view} />
                break;
            case 2:
                return <Textarea id={field.id} value={Dataform[field.id]} method={OnChange} disabled={view} />
                break;
            case 3:
                return <ComboBox id={field.id} value={Dataform[field.id]} method={OnChange} list={data.lists[field.id]} disabled={view} />
                break;
            case 4:
                return <ImageFile id={field.id} method={OnChange} disabled={view} value={avatar} table={table}/>
                break;
        }
    }

    return (
        <div className='m-auto w-6/12 mb-10'>
            <Header Title={data.instructions} submit={Submit} method={method} table={table} />
            <div className='bg-white rounded-lg p-10'>
                {
                    data.forms.map((field: any, index: number) => {
                        return (
                            <div className='mb-5 text-gray-700' key={index}>
                                <div>
                                    <h1 className='text-15 quicksand mb-2'>{field.title}</h1>
                                </div>
                                {inputType(field)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default form