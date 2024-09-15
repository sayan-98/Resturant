import React,{useState} from 'react'
import {useForm} from "react-hook-form"
import { editFood } from '../../API/crud'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { updateFood } from '../../API/crud'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DNA } from 'react-loader-spinner'
export default function EditMenu() {
    const navigate=useNavigate()
  const {register,handleSubmit,formState}=useForm()
  const {id}=useParams()
  const {errors}=formState
  const [img,setImg]=useState()
  const handleImage=(e)=>{
    setImg(e.target.files[0])
  }
  const UpdateMutation=useMutation({
    mutationFn:updateFood,

    
    onSuccess:(data)=>{
        console.log(data);
        navigate("/showMenu")
        toast('Menu updated succesfully!!', {
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
  const {isLoading,isFetching,isError,data,error}=useQuery({
    queryKey:["Edit",id],
    queryFn:()=>editFood(id)
  })
  if(isLoading || isFetching){
    return(
        <>
           <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
        </>
    )
  }
  if(isError){
    return(
        <>
        <h1>{error.message}</h1>
        </>
    )
  }
  
  const submit=(data)=>{
    console.log(data);
    const formData=new FormData()
    formData.append("name",data.name)
    formData.append("price",data.price)
    formData.append("description",data.description)
    formData.append("brand",data.brand)
    formData.append("image",img)
    UpdateMutation.mutate({id,formData})
  }
  
  return (
    <>
    <div className="allBody">
   
    <div className="formBody">
    <form onSubmit={handleSubmit(submit)}>
    <h1 className='mainHeading'>Edit Your Menu</h1>
    <div class="mb-3">
     
    <input type="text" class="allInput" defaultValue={data.data.data.name} placeholder='Name' {...register("name",{
      required:{
        value:true,
        message:"Enter the name"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.name?.message}</p>
  <div class="mb-3">
     
    <input type="number" class="allInput" defaultValue={data.data.data.price}  placeholder='Price' {...register("price",{
      required:{
        value:true,
        message:"Enter the price"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.price?.message}</p>
  <div class="mb-3">
   
    <input type="text" class="allInput" defaultValue={data.data.data.description} placeholder='Description' {...register("description",{
      required:{
        value:true,
        message:"Enter the description"
      }
    })}/>
  </div>
  <p style={{color:"red"}}>{errors.description?.message}</p>
  <div class="mb-3">
     
    <input type="text" class="allInput" defaultValue={data.data.data.brand}  placeholder='Brand' {...register("brand",{
      required:{
        value:true,
        message:"Enter the brand"
      }
    })}/>
    
  </div>
  <p style={{color:"red"}}>{errors.brand?.message}</p>
  <div className="mb-3">
    <img src={data.data.data.image} alt="image" style={{width:"100px"}}/>
  </div>
  <div class="mb-3">
     
    <input type="file" accept='image' class="px-3 " onChange={handleImage} style={{color:"white"}} />
    
  </div>
 
  <button type="submit" class="btn btn-primary">Update</button>
</form>
    </div>
    </div>
    </>
  )
}
