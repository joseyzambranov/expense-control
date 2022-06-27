import axios from "axios"
import authHeader from "./authHeader"

const baseUrl  = process.env.REACT_APP_BASE_URL

//const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user);
  

const TOKEN =authHeader()//user&&user.currentUser==="undefined"?"":user.currentUser.accessToken
 
//console.log(authHeader())

export const publicRequest =axios.create({
    baseURL:baseUrl
})

export const privateRequest = axios.create({
    baseURL:baseUrl,
    headers:{token:`Bearer ${TOKEN}`}
})