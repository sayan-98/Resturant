import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import {useMutation} from "@tanstack/react-query"
import { registerr } from '../../API/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import "./Register.css"
export default function Register() {
  const navigate=useNavigate()
  const {register,handleSubmit,formState}=useForm()
  const {errors}=formState
  const [img,setImg]=useState()
  const handleImage=(e)=>{
    setImg(e.target.files[0])
  }
  const RegMutation=useMutation({
    mutationFn:registerr,
    onSuccess:(data)=>{
      
      localStorage.setItem("RegName",data.data.data.name)
      const RegName=localStorage.getItem("RegName")
      if(RegName!==undefined && RegName !==null && RegName!==""){
          navigate("/login")
      }
      toast('Congratulations!Registerd Succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
      },
    onError:(data)=>{
      console.log(data);
      toast.error('Opps!! Registration is not done', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
      
    }
  })
  
  const submit=(data)=>{
    console.log(data);
    const formData=new FormData()
    formData.append("name",data.name)
    formData.append("email",data.email)
    formData.append("password",data.password)
    formData.append("mobile",data.mobile)
    formData.append("first_school",data.firstSchool)
    formData.append("image",img)
    RegMutation.mutate(formData)
   
  }
  return (
    <>
    <div className="allBody">
    
    <div className="formBody">

    <form onSubmit={handleSubmit(submit)}>
    <h1 className='mainHeading'>Register</h1>
    <div class="mb-3">
     
    <input type="text" class="allInput"  placeholder='Name' {...register("name",{
      required:{
        value:true,
        message:"Enter the name"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.name?.message}</p>
  <div class="mb-3">
     
    <input type="text" class="allInput"  placeholder='Email' {...register("email",{
      required:{
        value:true,
        message:"Enter the email"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.email?.message}</p>
  <div class="mb-3">
   
    <input type="text" class="allInput"  placeholder='Password' {...register("password",{
      required:{
        value:true,
        message:"Enter the password"
      }
    })}/>
  </div>
  <p style={{color:"red"}}>{errors.password?.message}</p>
  <div class="mb-3">
     
    <input type="number" class="allInput"  placeholder='Mobile' {...register("mobile",{
      required:{
        value:true,
        message:"Enter the mobile"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.mobile?.message}</p>
  <div class="mb-3">
     
    <input type="text" class="allInput"  placeholder='First School' {...register("firstSchool",{
      required:{
        value:true,
        message:"Enter the firstSchool"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.firstSchool?.message}</p>
  <div class="mb-3">
     
    <input type="file" accept='image' class="" onChange={handleImage} style={{color:"white"}}/>
    
  </div>
  {
    RegMutation.isPending?(<div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>):(<button type="submit" class="btn btn-primary">Sign Up</button>)
  }
  <br /><br />
  <p style={{color:"white"}}>If you are already Register!!Do login <Link to="/login"><button style={{ backgroundColor: "#42b72a", color: "white" }}>Login</button></Link> </p>
</form>
    </div>
    </div>
    </>
  )
}
