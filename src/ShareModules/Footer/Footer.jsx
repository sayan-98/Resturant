import React from 'react';
import styled from 'styled-components';
import FooterContact from './FooterContact';
import "./Footer.css"



const Footer = () => {
  return (
   <>


    <div className='FooterWrapper'>
      <div>
      <div className="FooterContact">
  <FooterContact/>
</div>
        <a className='nav' href="tel:+91 7584045922" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-phone"></i></a>
        <a className='nav' href="https://wa.me/7584045922" rel="noopener noreferrer" target="_blank" ><i class="fa-brands fa-whatsapp"></i></a>
        <a className='nav' href="https://www.facebook.com/share/FtNtqv3GmpShvWz3/?mibextid=qi2Omg" rel="noopener noreferrer" target="_blank" ><i class="fa-brands fa-facebook"></i></a>
        <a className='nav' href="https://pradhansayan2@gmail.com" rel="noopener noreferrer" target="_blank" ><i class="fa-solid fa-envelope-circle-check"></i></a>
      </div>
    </div>


   </>

  );
}

export default Footer;
