import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"


  
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTdlZjE4YzRjYTI0NTViOTZkYTU1YyIsImlhdCI6MTY1NDk4NjY5OSwiZXhwIjoxNjU1MjQ1ODk5fQ.jRRc4MM_yodQemobVkDfakqnOSOSpQMwOYOml25Z25s"

export const publicRequest =axios.create({
    baseURL:BASE_URL
})

export const privateRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})