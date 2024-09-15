import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { editFood } from '../../API/crud';
import { useParams } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';

export default function AddtoCart() {
  const { id } = useParams();

  // Fetching data using react-query
  const { isLoading, isFetching, isError, data, error } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => editFood(id),
  });

  // Simplify cartPod assignment
  const cartPod = data?.data?.data || {}; // Default to empty object if data is not ready

  // State to manage form data or other inputs
  const [formData, setFormData] = useState({});

  // Function to handle form data change
  const handleCart = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Show loader when fetching data
  if (isFetching || isLoading) {
    return (
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
    );
  }

  // Handle error state
  if (isError) {
    return (
      <>
        <p>{error.message}</p>
      </>
    );
  }

  // Display data
  return (
    <>
      
<div className="allBody">
<div className="formBody">
  
  {/* Ensure data is available before trying to access properties */}
  {cartPod ? (
    <>
    <h1 className='mainHeading'>Details</h1>
     <div class="card" style={{boxShadow:"0  0 10px 0 white"}}>
<img src={cartPod.image} class="card-img-top" alt="..."/>
<div class="card-body" style={{backgroundColor:"transparent !important"}}>
<h5 class="card-title" >{cartPod.name}</h5>
<p class="card-text">{cartPod.description}</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">{cartPod.brand}</li>
<li class="list-group-item">{cartPod.price}</li>
<li class="list-group-item">{cartPod._id}</li>
</ul>

</div>
    </>
  ) : (
    <p>No data available</p>
  )}
</div>
  <button style={{background:"transparent",boxShadow:"0 0 20px 0 white"}}>
    <Link to="/showMenu" style={{color:'white',textDecoration:"none",fontSize:"20px"}} >Go back to All Menu</Link>
  </button>
</div>
    </>
  );
}

