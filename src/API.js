import axios from 'axios'

const url="http://localhost:8080"

export const connectToAll=async()=>{
    const t = await axios.get(`${url}/`)
    return t;
}

export const connectToOne=async(id)=>{
    const t = await axios.get(`${url}/${id}`)
    return t;
}

export const connectToUpdate=async(object)=>{
    const t = await axios.put(`${url}/`,object)
    return t;
}

export const connectToDelete=async(id)=>{
    const t = await axios.delete(`${url}/${id}`)
    return t;
}

export const connectToCreate=async(object)=>{
    const t = await axios.post(`${url}/`,object)
    return t;
}