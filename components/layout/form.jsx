"use client"
import { Header, dataset, Input, Textarea, ComboBox, ImageFile } from '@/utils'

const form = ({ table, method }) => {
    const data = dataset[table]

    const inputType = (field) => {
        switch (field.type) {
            case 1:
                return <Input />
                break;
            case 2:
                return <Textarea />
                break;
            case 3:
                return <ComboBox />
                break;
            case 4:
                return <ImageFile />
                break;
        }
    }
    return (
        <div>
            <Header Title={data.instructions} submit={method} />
            <div>
                {
                    data.forms.map((field, index) => {
                        return (
                            <div className='bg-white w-8/12 mb-3 rounded-lg p-10 text-gray-700'>
                                <h1>{field.title}</h1>
                                <p>{field.text}</p>
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