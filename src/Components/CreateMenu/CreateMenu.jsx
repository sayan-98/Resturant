import React,{useState} from 'react'
import {useForm} from "react-hook-form"
import { useMutation } from '@tanstack/react-query'
import { createFood } from '../../API/crud'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function CreateMenu() {
  const navigate=useNavigate()
  const [img,setImg]=useState()
  const handleImage=(e)=>{
    setImg(e.target.files[0])
  }
  const {register,handleSubmit,formState}=useForm()
  const {errors}=formState
  const CreateMutation=useMutation({
    mutationFn:createFood,
    onSuccess:()=>{
      navigate("/showMenu")
      toast('Yummy!! Menu created succesfully', {
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
    formData.append("price",data.price)
    formData.append("description",data.description)
    formData.append("brand",data.brand)
    formData.append("image",img)
    CreateMutation.mutate(formData)
  }
  return (
    <>
    <div className="allBody">
    
    <div className="formBody">
    <form onSubmit={handleSubmit(submit)}>
    <h1 className='mainHeading'>Create Menu</h1>
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
     
    <input type="number" class="allInput"  placeholder='Price' {...register("price",{
      required:{
        value:true,
        message:"Enter the price"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.price?.message}</p>
  <div class="mb-3">
   
    <input type="text" class="allInput"  placeholder='Description' {...register("description",{
      required:{
        value:true,
        message:"Enter the description"
      }
    })}/>
  </div>
  <p style={{color:"red"}}>{errors.description?.message}</p>
  <div class="mb-3">
     
    <input type="text" class="allInput"  placeholder='Brand' {...register("brand",{
      required:{
        value:true,
        message:"Enter the brand"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.brand?.message}</p>
  <div class="mb-3">
     
    <input type="file" accept='image' class="" onChange={handleImage} style={{color:"white"}}/>
    
  </div>
 
  {
    CreateMutation.isPending?(<button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Creating...</span>
    </button>):(<button type="submit" class="btn btn-primary" onClick={handleSubmit(submit)}>Create</button>)
  }
</form>
    </div>
    </div>
    </>
  )
}
