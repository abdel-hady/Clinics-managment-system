// import React, {useState, useEffect} from 'react';
import './footer.css';
// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll';
import logo from "../../images/Logo.png";
import logoScroll from "../../images/LogoScroll.png";

import call from '../../images/call.png';
import messag from '../../images/envelope.png';
import Facebook from '../../images/facebook.png';
import Whatsup from '../../images/WA_Logo.png';
import Twitter from '../../images/twitter.png';
import Telegram from '../../images/Artboard.png';
import Copyright from '../../images/copyright.png';

const Footer = () => {
  const colorNav = {
    on_focus: "#069AD3",
    white: 'white',
    borderRadius:'0px',
    defualt:"#707070",
  };

  return (
    <>
      <div className='Footer'>
        <div className='parentFoo'>
          <div className='part-1 part'>
            <h2>About us</h2>
            <ul>
              <li>
                <Link  className='linkFoo' to='#'>
                  clinics
                </Link>
              </li>
              <li>
                <Link  className='linkFoo' to='#'>
                  doctors
                </Link>
              </li>
              <li>
                <Link  className='linkFoo' to='#'>
                  services
                </Link>
              </li>
              <li>
                <Link  className='linkFoo' to='#'>
                  privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div className='part-2 part'>
            <h2>contact us</h2>
            <ul>
              <li>
                <Link  className='linkFoo' to='#'>
                  <img className='icon' src={call}></img>+963 998 100 589
                </Link>
                
              </li>
              <li>
                <Link  className='linkFoo' to='#'>
                  <img className='icon' src={messag}></img>eyadtycenter@gmail.com
                </Link>
                
              </li>
              
            </ul>
          </div>
          <div className='part-3 part'>
            <h2>Social media</h2>
            <ul>
              <li>
                <Link  className='linkFoo' to='#'>
                <img className='icon' src={Facebook}></img>eyadty/facebook.com
                </Link>
              </li>
              <li>
                <Link  className='linkFoo' to='#'>
                <img className='icon' src={Twitter}></img>
                eyadty_twitter.com
                </Link>
              </li>
              <li>
                <Link  className='linkFoo' to='#'>
                <img className='icon' src={Whatsup}></img>
                +963 998 100 589
                </Link>
              </li>
              <li>
                <Link  className='linkFoo' to='#'>
                <img className='icon' src={Telegram}></img>
                @eyadty
                </Link>
              </li>
            </ul>
          </div>
        </div>
          <p>Copyright <img style={{"width":"20px" , "height":"20px"}} className='icon' src={Copyright}></img> 2022 <span>EYADTY</span></p>
      </div>
    </>
  );
};

export default Footer;