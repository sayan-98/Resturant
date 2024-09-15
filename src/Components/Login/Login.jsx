import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { login } from '../../API/auth'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function Login() {
  const navigate=useNavigate()
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const LogMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("Token", data.data.token)
      localStorage.setItem("LogName", data.data.user.name)
      localStorage.setItem("ProfilePic", data.data.user.image)
      const LogName=localStorage.getItem("LogName")
      const ProfilePic=localStorage.getItem("ProfilePic")
      let Token = localStorage.getItem("Token")

      if(Token!==null && Token !==undefined && Token!==""){
        navigate("/")
      }
      toast('Congratulations!Login Succesfully', {
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
      toast.error('Opps! Login is not done', {
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
  const submit = (data) => {

    const formData = {
      email: data.email,
      password: data.password
    }
    LogMutation.mutate(formData)

  }
  return (
    <>
    <div className="allBody">
    
     <div className="formBody">
     <form onSubmit={handleSubmit(submit)}>
     <h1 className='mainHeading'>Login</h1>
        <div class="mb-3">
          
          <input type="text" class="allInput" id="exampleInputEmail1" placeholder='Email' {...register("email", {
            required: {
              value: true,
              message: "Enter the email"
            }
          })} />

        </div>
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <div class="mb-3">

          <input type="text" class="allInput" id="exampleInputPassword1" placeholder='Password' {...register("password", {
            required: {
              value: true,
              message: "Enter the password"
            }
          })} />
        </div>
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        {
    LogMutation.isPending?(<div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>):(<button type="submit" class="btn btn-primary">Login</button>)
  }
        
        <br /><br />
        <p style={{color:"white"}}>If you aren't Register <Link to="/register"><button style={{ backgroundColor: "#42b72a", color: "white" }}>Create new account</button></Link> </p>
      </form>

     </div>
    </div>
    </>
  )
}
