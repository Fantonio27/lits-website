import axios from "axios"
const link = "http://localhost:3000/api"
// const link = "http://localhost:3000/api/teams"

export const Fetch = async (table : any) => {
    return await axios.get(`${link}/${table}`).then((response) => response.data)
}

export const Create = async (dataform: any, table : any) => {
    return await axios.post(`${link}/${table}`, dataform).then((response) => response.data)
}

export const Update = async (dataform: any , table : any) => {
    return await axios.put(`${link}/${table}`, dataform).then((response) => response.data)
}

export const Delete = async (dataform: any, table : any) => {
    return await axios.delete(`${link}/${table}`, { data: dataform }).then((response) => response.data)
}

export const Search =  async (id: any , table : any) => {
    return await axios.get(`${link}/${table}/search?id=${id}`).then((response) => response.data)
}