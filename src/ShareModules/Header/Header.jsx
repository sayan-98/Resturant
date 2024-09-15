import React from 'react'
import { Link } from 'react-router-dom'
import { baseURL } from '../../API/endPoints'
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import "./Header.css"
export default function Header() {
  const navigate=useNavigate()
  const LogName=localStorage.getItem("LogName")
  const ProfilePic=localStorage.getItem("ProfilePic")
  const Token =localStorage.getItem("Token")
  const handleLogOut=()=>{
    localStorage.removeItem("Token")
    localStorage.removeItem("LogName")
    localStorage.removeItem("RegName")
    localStorage.removeItem("ProfilePic")
    navigate("/login")
  }
  return (
   <>

<nav class="navbar navbar-expand-lg color">
  <div class="container-fluid">
  
    <img src="/Images/reservation/reservation.png" alt="" className='logoNav mx-3' />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <div className=' LogName'>{Token?(`Welcome Mr.${LogName}`):(null)}</div>
      <div className=''>{Token?(<img src={`${baseURL}/${ProfilePic}`} style={{width:"50px",borderRadius:"180%"}}/>):(null)}</div>
        <Link class="nav-link headerText " aria-current="page" to="/" style={{color:"",}}>Home</Link>
        <Link class="nav-link  headerText" to="/about">About</Link>
        <Link class="nav-link  headerText" to="/specialMenu">Special Menu</Link>
        <Link class="nav-link headerText" to="/reservation">Reservations</Link>
        <div class="dropdown">
  <a class="btn btn-warning dropdown-toggle me-5 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Food Menu
  </a>

  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/createMenu">Create Menu</Link></li>
    <li><Link class="dropdown-item" to="/showMenu">Show All Foods</Link></li>
    
  </ul>
</div>
     
        {
          Token?(<button onClick={handleLogOut} className='ms-5 nav-link' style={{backgroundColor:"#c63101",color:"white",fontFamily:"initial", borderRadius:"20px",fontSize:"15px"}}>Log Out</button>):(<Link class="nav-link ms-5 headerText loginButton" to="/login" style={{backgroundColor:"#217041",borderRadius:"5px",color:"white",boxShadow:"0 0 10px 0 black"}}>{<BiLogIn />
          }</Link>)
        }
       
        
      </div>
    </div>
  </div>
</nav>
   </>
  )
}
