import axios from "axios"
const link = "http://localhost:3000/api/teams"

export const Fetch = async () => {
    return await axios.get(link).then((response) => response.data)
}

export const Create = async (dataform: any) => {
    return await axios.post(link, dataform).then((response) => response.data)
}

export const Update = async (dataform: any) => {
    return await axios.put(link, dataform).then((response) => response.data)
}

export const Delete = async (dataform: any) => {
    return await axios.delete(link, { data: dataform }).then((response) => response.data)
}