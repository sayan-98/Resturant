import React from 'react'
import "./About.css"
export default function About() {
  return (
    <>
  <div style={{margin:"30px"}}>
  <div className="about m-3">
   <span>
   <img src="/Images/home/header_decorator.png" alt="" />
   </span>
    <h1 className='aboutHeading' >ABOUT US</h1>
    <span><img src="/Images/home/header_decorator.png" alt="" /></span><br />
    
   </div>
   <p  style={{color:"#797979",textAlign:"center",fontSize:"18px"}}>We love restaurants as much as you do. That’s why we’ve been 
    helping them fill tables since 1999. Welcome to elixir restaurant</p>
    <section className='CPart1'>
      <div className='AboutHistory' >
        <h1>The History</h1>
        <p className='historyP'>The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword

According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in Boulanger dates back to a history of food seminar in Paris in the mid-1990s</p>
      </div>
      <div className=''>
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Images/home/about01.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/Images/home/about02.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/Images/home/about03.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </section>
    <img src="/Images/home/ornament.png" alt="" />

    <section className='CPart1'>
    <div className=''>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Images/home/about04.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/Images/home/about05.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/Images/home/about06.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div className='AboutHistory m-3' >
        
        <p className='historyP'>The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword

According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in Boulanger dates back to a history of food seminar in Paris in the mid-1990s</p>
      </div>
      
    </section>
  </div>
    </>
  )
}
