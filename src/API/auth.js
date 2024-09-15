import axiosInstance from "./helper";
import { RegisterAPI,LoginAPI } from "./endPoints";
export const registerr=async(formData)=>{
    let res=await axiosInstance.post(RegisterAPI,formData)
    return res
}
export const login=async(formData)=>{
    let res=await axiosInstance.post(LoginAPI,formData)
    return res
}