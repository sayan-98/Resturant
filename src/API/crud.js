import axiosInstance from "./helper";
import { CreateAPI,EditAPI,UpdateAPI,DeleteAPI,ShowAPI } from "./endPoints";
export const createFood=async(formData)=>{
    let res=await axiosInstance.post(CreateAPI,formData)
    return res
}
export const showFood=async()=>{
    let res =await axiosInstance.get(ShowAPI)
    return res
}
export const editFood=async(id)=>{
    let res =await axiosInstance.get(`${EditAPI}/${id}`)
    return res
}
export const updateFood=async({id,formData})=>{
    let res =await axiosInstance.post(`${UpdateAPI}/${id}`,formData)
    return res
}
export const deleteFood=async({id})=>{
    let res =await axiosInstance.delete(`${DeleteAPI}/${id}`,id)
    return res
}
