import axios from "axios"

const $host = axios.create({
    baseURL: (import.meta.env.VITE_API_URL + import.meta.env.VITE_API_VERSION) || 'http://localhost:5050'
})

export{
    $host,
}