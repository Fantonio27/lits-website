"use client"
import { Header, Input, Textarea, ComboBox, ImageFile, Date, Time,Tab } from '@/utils'
import { useRouter } from 'next/navigation'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "@/utils/firebase"
import { useState, useEffect } from 'react'
import { Create, Update, Search} from "@/utils/teams/api"

const form = ({ table, method, data }: {
    table: string,
    method: string,
    data: any
}) => {

    const navigate = useRouter()
    const [Dataform, setDataform] = useState(data.dataform)
    const [avatar, setavatar] = useState<any>(null)
    const [pastavatar, setPastavatar] = useState<any>(null)

    const url = (num: number) => {
        return location.href.split('/').at(-num);
    }

    useEffect(() => {
        async function Get() {
            const res = await Search(url(1), table)
            setDataform(res[0])
            AvatarMap(res[0])
        }

        if (method == "edit" || method == "view") {
            Get()
        }

    }, [])

    const AvatarMap = (dataform: any) => {
        getDownloadURL(ref(storage, `${table}/${dataform.avatar}`)).then((url) => {
            setPastavatar(url)
        })
    }

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
        if (table == "teams" && avatar != null) {
            const imageRef = ref(storage, `teams/${Dataform.avatar}`)
            uploadBytes(imageRef, avatar).then(() => {
            })
        }
    }

    const Submit = async () => {
        if (method == "create") {         
            await Create(Dataform, table)
            uploadImage()
            navigate.push(`../${table}`)
        } else {
            await Update(Dataform, table)
            uploadImage()
            navigate.push(`../../${table}`)
        }
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
                return <ImageFile id={field.id} method={OnChange} disabled={view} value={avatar} action={method} pastvalue={pastavatar} />
                break;
            case 5:
                return <Date id={field.id} method={OnChange} disabled={view} value={avatar}/>
                break;
            case 6:
                return <Time id={field.id} method={OnChange} disabled={view} value={avatar}/>
                break;
            case 7: 
                return <Tab />
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