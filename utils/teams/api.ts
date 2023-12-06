import axios from "axios"
const link = "http://localhost:3000/api/teams"

export const Fetch = async() => {
    return await axios.get(link).then((response) => response.data)
}