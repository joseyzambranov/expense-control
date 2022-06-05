import axios from "axios"

const BASE_URL = "localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTdlZjE4YzRjYTI0NTViOTZkYTU1YyIsImlhdCI6MTY1NDM2NzcyOCwiZXhwIjoxNjU0NjI2OTI4fQ.MJvYDp2_K3joaPChO01LpvKkHrY4XbEO-QXXSNVptV0"

export const privateRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})