import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"


  
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTdlZjE4YzRjYTI0NTViOTZkYTU1YyIsImlhdCI6MTY1NDcyNzE3NCwiZXhwIjoxNjU0OTg2Mzc0fQ.khODFn7xrW9VuBsTeGA9R0HmvgOQmUU-kczl4ur-OKQ"

export const publicRequest =axios.create({
    baseURL:BASE_URL
})

export const privateRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})