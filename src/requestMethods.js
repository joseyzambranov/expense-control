import axios from "axios"
import authHeader from "./authHeader"

const BASE_URL = "http://localhost:5000/api/"

//const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user);
  

const TOKEN =authHeader()//user&&user.currentUser==="undefined"?"":user.currentUser.accessToken
 
console.log(authHeader())

export const publicRequest =axios.create({
    baseURL:BASE_URL
})

export const privateRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})