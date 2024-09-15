import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <>
    <div className="about my-3">
   <span>
   <img src="/Images/home/header_decorator.png" alt="" />
   </span>
    <h1 className='.AboutHistory h1' >RESERVATION</h1>
    <span><img src="/Images/home/header_decorator.png" alt="" /></span><br />
   
   </div>
   <p  style={{color:"#797979",textAlign:"center",fontSize:"18px"}}>Booking a table has never been so easy with free & instant online
   restaurant reservations, booking now!!</p>
   <span><img src="/Images/reservation/reservation.png" alt="" style={{margin:"20px 0"}}/></span>
   <div className="about my-3">
   <span>
   <img src="/Images/home/ornament.png" alt="" />
   </span>
    <h1 className='styleFont'  >Welcome to elixir</h1>
    <span><img src="/Images/home/ornament.png" alt="" /></span><br />
   
   </div>
   <h1 className='reservationH'>MAKE A RESERVATION</h1>
   <div className="about my-3">
   <span>
   <img src="/Images/home/ornament.png" alt="" />
   </span>
    <h1 className='styleFont'  >open hours</h1>
    <span><img src="/Images/home/ornament.png" alt="" /></span><br />
   
   </div>
   <p style={{color:"#7f7d7c"}}>Sunday to Tuesday 09:00 - 24:00Friday and Sunday 08:00 - 03: 00</p>
   <h1 className='contactNumber'>+91 7584045922</h1>
   <img src="/Images/home/side-separator.png" alt="" />
   <h5>Contact Details</h5>
  
   <input type="text" placeholder='Name' style={{ backgroundColor:"transparent",margin:"4px 10px",padding:"4px 3px",textAlign:"center",borderRadius:"10px"}}/><br/>
   <input type="text" placeholder='Email' style={{ backgroundColor:"transparent",margin:"4px 10px",padding:"4px 3px",textAlign:"center",borderRadius:"10px"}}/><br/>
   <input type="text" placeholder='Mobile' style={{ backgroundColor:"transparent",margin:"4px 10px",padding:"4px 3px",textAlign:"center",borderRadius:"10px"}}/><br/>

   <input type="text" placeholder='Adress' style={{ backgroundColor:"transparent",margin:"4px 10px",padding:"40px 3px",textAlign:"center",borderRadius:"10px"}}/>
   <br />
   <label htmlFor="">Date:</label>
   <input type="date"/><br />
   <button className='my-2' style={{backgroundColor:"",border:"2px solid #bfa75f", color:'#bfa75f',borderRadius:"10px",padding:"10px"}}>Submit</button><br />
   <img src="/Images/home/side-separator.png" alt="" className='mb-3'/>
    </>
  )
}
