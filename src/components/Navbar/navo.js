// import React, {useState, useEffect} from 'react';
import './navo.css';
import {Link} from 'react-scroll';
import logo from "../../images/Logo.png";
import logoScroll from "../../images/LogoScroll.png";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCoffee,faBars, faL, faLinesLeaning} from '@fortawesome/free-solid-svg-icons';
import Button , {Doctors} from '../Button/button';
// import Doctors from '../Doctors/doctors'
const Navo = () => {
  // const [widthPage, setWidthPage]=useState(logo)
  const colorNav = {
    on_focus: "#069AD3",
    white: 'white',
    borderRadius:'0px',
    defualt:"#707070",
  };
  // const[navbar,setNavbar]=useState(false);
  // const[toggl,setToggl]=useState(false);
  
  // const [ backgroundColor, setbackgroundColor ] = useState(colorNav.white);
  // const [ bgColor, setbgColor ] = useState('');
  // const [ color, setColor ] = useState(colorNav.defualt);
  // const [ bRadius, setBRaduis ] = useState(colorNav.borderRadius);
  // const [ logos, setLogo] = useState(logo);
  // const links=document.querySelectorAll("li a");
  // const navScroll=document.querySelector("nav");
  // // console.log(dd)
  // const styles={
  //   "backgroundColor":backgroundColor,
  //   "color": color,
  //   "borderRadius": bRadius,
  //   "padding": "10px 6px"
  // }
  // let valueScroll=0;
  // const changeBackgroud =()=>{
  //   console.log("scroling")
  //   if(window.scrollY <=40){
  //     setBRaduis(colorNav.borderRadius);
  //     setColor(colorNav.defualt);
  //       setNavbar(true);
  //       setbackgroundColor(colorNav.white)
  //       if(window.innerWidth<=767){
  //         setLogo(logoScroll)
  //       }else{
  //         setLogo(logo)
  //       }
  //       valueScroll=0;
  //       const mainButton=document.querySelector(".main-btn")
  //       mainButton.style.color=colorNav.white;
  //         mainButton.style.backgroundColor=colorNav.on_focus;
  //       }else{
  //           valueScroll=window.scrollY;
  //           links.forEach(link =>{
              
  //             link.addEventListener("click",(e)=>{
  //               links.forEach((link)=>{
  //             link.classList.remove("active")
  //             });
  //             e.currentTarget.classList.add("active");
  //           })
  //         })
  //         const mainButton=document.querySelector(".main-btn")
  //         mainButton.style.color="white";
  //         mainButton.style.backgroundColor="#006E98";
  //         setBRaduis("20px");
  //         setColor(colorNav.white);
  //         setNavbar(false)
  //         setbackgroundColor(colorNav.on_focus)
  //         setLogo(logoScroll)
  //       }
  //   }
    window.onresize=()=>{
      const nav=document.querySelector("nav");
    if(window.scrollY===0 && window.innerWidth>767){
      if(nav){
        nav.classList.remove("scrolling")
        nav.classList.add("noScrolling")
      }
    }
    if(window.scrollY >=40 || window.innerWidth<=767){
      if(nav){
        nav.classList.add("scrolling")
        nav.classList.remove("noScrolling")
      }
    }else{
      if(nav){
        nav.classList.remove("scrolling")
        nav.classList.add("noScrolling")
      }
    }
    }

    window.onscroll=()=>{
    const nav=document.querySelector("nav");
    if(window.scrollY===0 && window.innerWidth>767){
      if(nav){
        nav.classList.remove("scrolling")
        nav.classList.add("noScrolling")
      }
    }
    if(window.scrollY >=40 || window.innerWidth<=767){
      if(nav){
        nav.classList.add("scrolling")
        nav.classList.remove("noScrolling")
      }
    }else{
      if(nav){
        nav.classList.remove("scrolling")
        nav.classList.add("noScrolling")
      }
    }
  }
  const handleUlClick=(e)=>{
    
      // document.getElementById('service').scrollIntoView(true);
      
    const links= document.querySelectorAll(".link")
    
    if(links)
    links.forEach(link =>{
      link.classList.remove("active")
    })
    if(window.location.pathname === "/Doctors")
    window.location.pathname="/"
    e.currentTarget.classList.add("active");
    handleClick();
    }
  const handleClick=()=>{
    // const toggleBar = document.querySelector(".toggleBar");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  }
  return (
    <>
      <nav className="noScrolling">
        <div className="toggleBar" onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <Link  className='logo' to='#'>
          <img className='logo-defualt' src={logo} alt='styleSheets'></img>
          <img className='logoScroll' src={logoScroll} alt='styleSheets'></img>
        </Link>
        <ul className='nav-links' >
          <li  className='nav-ele' >
            <Link className='active link' to="landingHeader" onClick={handleUlClick}>Home</Link>
          </li>
          <li  className='nav-ele'  >
            <Link  className='link' to="service" onClick={handleUlClick}>Services</Link>
          </li>
          <li className='nav-ele'>
            <Link  className='link' to="Department" onClick={handleUlClick}>department</Link>
          </li>
          <li className='nav-ele'>
          <Link  className='link' to="AllDoctors" onClick={handleUlClick}>Doctors</Link>
          </li>
          <li className='nav-ele'>
            <Link  className='link' to="Footer" onClick={handleUlClick}>Contact us</Link>
          </li>
            {/* <Link  className='link' to="Footer" onClick={handleUlClick}>Contact us</Link> */}
          <li className=''>
            <Button/>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navo;