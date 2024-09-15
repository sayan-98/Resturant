import React from 'react'
import "./FooterContact.css"
export default function FooterContact() {
  return (
    <>
    <div className="about my-3">
    <span>
    <img src="/Images/home/header_decorator.png" alt="" />
    </span>
     <h1 className='ContactHeading' >CONTACT</h1>
     <span><img src="/Images/home/header_decorator.png" alt="" /></span><br />
     
    </div>
    <p style={{color:"#717578",fontStyle:"italic"}}>65,Belgharia,Kolkata,700056,Sayan(+91 758405922)</p>
    <div className='InputDetails'>
        <div className='ContactInput' >
            <input type="text" placeholder='Name' style={{ backgroundColor:"#2c2a2b",margin:"10px 10px",padding:"30px 30px",textAlign:"center"}} />
            <input type="text" placeholder='Email'style={{ backgroundColor:"#2c2a2b",margin:"10px 10px",padding:"30px 30px",textAlign:"center"}}/>
            <input type="text" placeholder='Message' style={{ backgroundColor:"#2c2a2b",margin:"10px 10px",padding:"30px 30px",textAlign:"center"}}/>
            
        </div>
        
        
    </div>
    <button className='ContactSubmit'>Submit</button><br />
    
    </>
    
  )
}
