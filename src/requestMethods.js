import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"

const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user);
  

const TOKEN = user.currentUser===null?"":user.currentUser.accessToken

export const publicRequest =axios.create({
    baseURL:BASE_URL
})

export const privateRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})