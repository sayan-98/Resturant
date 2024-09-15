import React from 'react'
import './Home.css'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Blog from '../Blog/Blog'
export default function Home() {
  return (
    <>
   <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Images/homecarousel/home1.jpg" className="d-block w-100" alt="First slide" />
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="carouselText mt-3">Welcome to Restaurant</h1>
        <img src="/Images/home/side-separator.png" alt="" />
        <p className='carousalP'>The Chef creates divine combinations
</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/Images/homecarousel/hom2.jpg" className="d-block w-100" alt="Second slide" />
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="carouselText mt-3">Elixir Exclusively Food</h1>
        <img src="/Images/home/side-separator.png" alt="" />
        <p className='carousalP'>The Chef creates divine combinations

</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/Images/homecarousel/hom3.jpg" className="d-block w-100" alt="Third slide" />
      <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="carouselText mt-3">The Soul Food & Bistro</h1>
        <img src="/Images/home/side-separator.png" alt="" />
        <p className='carousalP'>The Chef creates divine combinations

</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<About/>
<img src="/Images/reservation/ornament.png" alt="" />
<div className="about m-2">
   <span>
   <img src="/Images/home/header_decorator.png" alt="" />
   </span>
    <h1 className='aboutHeading mt-5' >SPECIAL MENU</h1>
    <span><img src="/Images/home/header_decorator.png" alt="" /></span><br />
    
   </div>
<Blog/>
<Contact/>
    </>
  )
}
