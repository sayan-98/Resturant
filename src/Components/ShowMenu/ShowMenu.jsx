import React,{useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import { showFood } from '../../API/crud'
import { Link } from 'react-router-dom'
import { deleteFood } from '../../API/crud'
import { useMutation } from '@tanstack/react-query'
import SweetAlertComponent from '../SweetAlertComponent/SweetAlert'
import {DNA} from "react-loader-spinner"
import { FaCartPlus } from "react-icons/fa";
import "./ShowMenu.css"
export default function ShowMenu() {
  const [deleted,setDeleted]=useState(false)
  const [deleteId,setDeleteId]=useState("")
  
  const DeleteMutation=useMutation({
    mutationFn:deleteFood,
    onSuccess:(data)=>{
      console.log(data);
      refetch()
    }
  })
  const handleDelete=()=>{
    const formData={
      id:deleteId
    }
    if(deleteId!==""){
      DeleteMutation.mutate(formData)
    }
    setDeleteId("")
    setDeleted(false)
  }
  const {isLoading,isFetching,isSuccess,isError,data,error,refetch}=useQuery({
    queryKey:"Show Foods",
    queryFn:showFood
  })
  
  if(isFetching || isLoading){
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
      <p>{error.message}</p>
      </>
    )
  }
  

return (
  <div className="container mt-4 showMenu" >
    <div className="row">
      <h1 className='mainHeading'>Show Menu</h1>
      {isSuccess && data.data.data.map((x) => (
        <div key={x.id} className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card mt-3" style={{ width: "18rem" }}>
            <img src={x.image} className="card-img-top" alt={x.name} />
            <div className="card-body">
              <h5 className="card-title">{x.name}</h5>
              <p className="card-text">{x.description}</p>
              <Link to={`/editMenu/${x._id}`} className="btn btn-primary">Edit</Link>
               <button className="btn btn-danger ms-5" onClick={()=>{setDeleteId(x._id);setDeleted(true)}}>Delete</button>
               <button className='ms-2' style={{padding:"4px",borderRadius:"20px",backgroundColor:"#88c60b"}}><Link to={`/addToCart/${x._id}`} style={{color:"white",textDecoration:"none"}}>Details</Link></button>
            </div>
          </div>
        </div>
      ))}
     {
      deleted && <SweetAlertComponent confirm={handleDelete} cancel={()=>{setDeleted(false)}} title={"Are you sure?"} subtitle={"data can't be recover,once deleted"}/>
     } 
    </div>
  </div>
);

}

