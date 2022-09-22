import React , { createElement, useEffect, useState,  } from 'react';
import './sidebar.css'
import LogoScroll from '../../images/LogoScroll.png';
import { Link ,Navigate ,useParams} from 'react-router-dom';
import Calender from '../../images/calendar.png';
import Patient from '../../images/Patients1.png';
import Blog from '../../images/blog.png';
import Document from '../../images/document.png';
import Notifications from '../../images/notifications.png';
import Tele from '../../images/teleSide.png';
import Settings from '../../images/settings 1.png';
import SignOut from '../../images/sign-out.png';
import Check_attendance from './../../images/check attendance.png'
import Doctor_icon from './../../images/Doctor_icon_side.png';
// import Tele from './../../images/teleSide.png';
import 'boxicons';
// import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const Sidebar = ({home, icon, attendance}) => {
  // console.log(attendance)
    const [rolesRec,setRolesRec]=useState(sessionStorage.getItem('roles' )==='Reception'?"Reception": "")
    const [rolesDoctor,setRolesDoctor]=useState(sessionStorage.getItem('roles' )==='Doctor'?"Doctor": "")
    const params = useParams();
    const handleClickoo=()=>{
        const main=document.querySelector(".main-doctor")
        if(main)
        main.classList.toggle("main-big")
        const shrink_btn = document.querySelector(".shrink-btn");
        document.body.classList.toggle("shrink");
        if(document.querySelector("body.shrink")){
            document.querySelector(".myprofile-side").style.display="none";
            document.querySelector(".chevron-profile").style.display="none";
        }else{
            if(document.querySelector(".chevron-profile").style.display=="none"){
                document.querySelector(".chevron-profile").style.display="block";
            }
            
        }
        // else{
        //     document.querySelector(".myprofile-side").style.display="none";
        // }
        // // console.log(document.querySelector(".shrink"))
        // if(document.querySelector(".chevron-profile").style.display=="none"){
        //     document.querySelector(".chevron-profile").style.display="block";
        // }else{
        //     document.querySelector(".chevron-profile").style.display="none";
        // }
        setTimeout(moveActiveTab, 400);
        
        shrink_btn.classList.add("hovered");
        
    setTimeout(() => {
        shrink_btn.classList.remove("hovered");
      }, 500);
    };

    function moveActiveTab() {
        const profileSide = document.querySelector(".profileSide");
        const photoSide = document.querySelector(".profileSide img");
        const navDoctor = document.querySelector(".main-doctor");
        const navDoctorFixed = document.querySelector(".navDoctor");
        if(profileSide){
        profileSide.classList.toggle("shrick-profile")
        photoSide.classList.toggle("shrick-photo")
        }
        if(navDoctor)
        navDoctor.classList.toggle("shrink-navDoctor")
        if(navDoctorFixed)
        navDoctorFixed.classList.toggle("shrink-navDoctorFixed")
    }
    // const [activeNow, setActiveNow]=useState()
    const links= document.querySelectorAll(".linkSide")
    const handleUlSideClick=(e)=>{
//   if(links){
//       links.forEach(link =>{
//           link.classList.remove("activeSide")
//         })
//     }
//     e.currentTarget.classList.add('activeSide')
//     // setActiveNow(e.currentTarget)
//     window.localStorage.setItem("acitveSide", e.currentTarget.getAttribute('number'))
//     console.log(e.currentTarget.getAttribute('number'))
    // localStorage.setItem('acticeSide', e.currentTarget)  
    //   localStorage.getItem('activeSide').classList.add("activeSide");
}
const shrink_sidebar=()=>{
    const bodysh=document.querySelector(".shrink")
    if(bodysh)
    if(bodysh.classList.contains("shrink")){
        const main=document.querySelector(".main-doctor")
        if(main)
        main.classList.add("main-big")
        const shrink_btn = document.querySelector(".shrink-btn");
        // document.body.classList.toggle("shrink");
        const profileSide = document.querySelector(".profileSide");
        const photoSide = document.querySelector(".profileSide img");
        const navDoctor = document.querySelector(".main-doctor");
        const navDoctorFixed = document.querySelector(".navDoctor");
        if(profileSide){
        profileSide.classList.add("shrick-profile")
        photoSide.classList.add("shrick-photo")
        }
        if(navDoctor)
        navDoctor.classList.add("shrink-navDoctor")
        if(navDoctorFixed)
        navDoctorFixed.classList.add("shrink-navDoctorFixed")
        
        shrink_btn.classList.add("hovered");
        
    setTimeout(() => {
        shrink_btn.classList.remove("hovered");
      }, 500);
    }
}
// if(sessionStorage.getItem('roles')==="Doctor")
// setRolesDoctor("Doctor")
// if(sessionStorage.getItem("roles")==="Reception")
// setRolesRec("Reception")
useEffect(()=>{
  
  const titles= document.querySelectorAll('[number]')
  const link0=document.querySelector("[number='0']")
  const link1=document.querySelector("[number='1']")
  const link2=document.querySelector("[number='2']")
  const link3=document.querySelector("[number='3']")
  const link4=document.querySelector("[number='4']")
  const link5=document.querySelector("[number='5']")
  const link6=document.querySelector("[number='6']")
  const link7=document.querySelector("[number='7']")
  const link8=document.querySelector("[number='8']")
  const link9=document.querySelector("[number='9']")
    // console.log(link8)
    if(window.location.pathname=='/appointments'){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        if(link0)
        link0.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname==`/patient_information/${params.id}` || window.location.pathname=='/patients' || window.location.pathname==`/patient_appointments/${params.id}` ||  window.location.pathname==`/patient_reports/${params.id}`){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })  
        link1.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname=='/blog'){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        link2.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname=='/my-reports'){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        link3.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname==='/notification'){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        link4.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname=== '/home'){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        // console.log(link8)
        // if(link8)
        link0.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname=== '/patients-reseption'){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        console.log("hel")
        // if(link9)
        link1.classList.add('acitveSide')
        // link8.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname=== '/patients-reseption' ||window.location.pathname=== `/patient_info_reception/${params.id}` || window.location.pathname=== `/patient_appointments_reception/${params.id}`||  window.location.pathname=== `/patient_report_reception/${params.id}`|| window.location.pathname=== `/add_patient_reception`||window.location.pathname=== `/patient_account_reception/${params.id}`|| window.location.pathname=== `/add_appointment_reception`){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        link1.classList.add('acitveSide')
        // link8.classList.add('acitveSide')
        shrink_sidebar()
    }
    if(window.location.pathname=== `/notification_reception`){
        links.forEach(link =>{
            link.classList.remove("activeSide")
        })
        console.log("hel")
        // if(link9)
        link3.classList.add('acitveSide')
        // link8.classList.add('acitveSide')
        shrink_sidebar()
    }
},[])
const [navigateDoctor,setNavigateDoctor]=useState(false)
const handleLogout=async()=>{
    if(sessionStorage.getItem('accessToken')){
        const t=sessionStorage.getItem('accessToken');
        axios.post('logout').then(res =>{
        console.log(res.data.message)
        sessionStorage.clear()
        setNavigateDoctor(true)
        }
        ).catch(err =>{
        console.log("errorhhhhhhhhhhhhhhhhh")
        })
    }
}
if (navigateDoctor) {
    return <Navigate to="/"/>;
}
let rotation=0;
const handlechevron =(e)=>{
    rotation=rotation+180;
    if (rotation === 360) { 
        rotation = 0;
    }
    e.target.style.transform= `rotate(${rotation}deg)`;
    console.log(rotation)
    if(rotation ===0){
        document.querySelector(".profileSide").style.marginBottom="55px";
        document.querySelector(".myprofile-side").style.display="none";
    }else{
        document.querySelector(".profileSide").style.marginBottom="0px";
        document.querySelector(".myprofile-side").style.display="block";
    }
}
    return (
    <div>
    <section>
        <div className="sidebar-top">
        <span className="shrink-btn" onClick={handleClickoo}>
            <div className="toggleSide">
            <div className="line-toggle"></div>
            <div className="line-toggle"></div>
            <div className="line-toggle"></div>
            </div>
            
        </span>
        
        <h3 className="hide"><img src={LogoScroll} className="logo" alt=""/></h3>
        </div>
        <div className='profileSide'>
            <div className='profilePhSide'>
                {
                    icon &&(
                        <img src={icon} alt=''></img>
                    )
                }
                {
                    icon === undefined &&(
                        <img src={Doctor_icon} alt=''></img>
                    )
                }
            </div>
                <div className='name-username hide'>
                    <h2>{sessionStorage.getItem('name')}</h2>
                    <h4>{sessionStorage.getItem('username')}</h4>
                </div>
            <button className='chevron-profile link-Clinic_Deppartment ' to="" onClick={handlechevron}>
                  <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
            </button>
            </div>
            {rolesDoctor &&(
                <Link className='myprofile-side' to='/my-profile'>My Profile</Link>
            )}
            {rolesRec &&(
                <Link className='myprofile-side' to='/my_Profile_reception'>My Profile</Link>
            )}
            
        <div className="sidebar-links">
            { rolesDoctor &&(
                <ul>
                {/* <div className="active-tab"></div> */}
                <li className="tooltip-element" >
                <Link className=" linkSide" number="0" onClick={handleUlSideClick} to="/appointments" >
                    <div className="iconSide">
                    <img className='i' src={Calender} alt=''></img>
                    </div>
                        <span className="link hide">Appointments</span>
                </Link>
                </li>

                <li className="tooltip-element" >
                <Link className='linkSide' number='1' onClick={handleUlSideClick} to="/patients" >
                    <div className="iconSide">
                    <img className='i' src={Patient} alt=''></img>
                    </div>
                    <span className="link hide">Patients</span>
                </Link>
                </li>
                <li className="tooltip-element" >
                <Link className='linkSide' number="2" onClick={handleUlSideClick} to="/blog" >
                    <div className="iconSide">
                    
                    <img className='i' src={Blog} alt=''></img>
                    </div>
                    <span className="link hide">Blog</span>
                </Link>
                </li>
                <li className="tooltip-element" >
                <Link className='linkSide' number="3" onClick={handleUlSideClick} to="/my-reports" >
                    <div className="iconSide">
                    <img className='i' src={Document} alt=''></img>
                    </div>
                    <span className="link hide">My Reports</span>
                </Link>
                </li>
                <li className="tooltip-element" >
                <Link className='linkSide' number="4" onClick={handleUlSideClick} to="/notification" >
                    <div className="iconSide">
                    <img className='i' src={Notifications} alt=''></img>
                    </div>
                    <span className="link hide">Notifications</span>
                </Link>
                </li>
                <li className="tooltip-element" >
                <Link className='linkSide' number="5" onClick={handleUlSideClick} to="#" >
                    <div className="iconSide">
                    <img className='i' src={Tele} alt=''></img>
                    </div>
                    <span className="link hide">My Complaints</span>
                </Link>
                </li>
                <hr className='hide'/>
                <li className="tooltip-element" >
                <Link className='linkSide' number="6" onClick={handleUlSideClick} to="#" >
                    <div className="iconSide">
                    <img className='i' src={Settings} alt=''></img>
                    </div>
                    <span className="link hide">Settings</span>
                </Link>
                </li>
                <li className="tooltip-element" >
                <Link className='linkSide' number="7" onClick={handleLogout} to="/" >
                    <div className="iconSide">
                    <img className='i' src={SignOut} alt=''></img>
                    </div>
                    <span className="link hide">Sign out</span>
                </Link>
                </li>
            </ul>
            )
            }
            {
                rolesRec &&(
                <ul>
                    {/* <div className="active-tab"></div> */}
                    <li className="tooltip-element" >
                    <Link number="0" onClick={handleUlSideClick} to="/home" className="linkSide" >
                        <div className="iconSide">
                        <img className='i' src={Calender} alt=''></img>
                        </div>
                          <span className="link hide">home</span>
                    </Link>
                    </li>
                    <li className="tooltip-element" >
                    <Link number="1" className='linkSide' onClick={handleUlSideClick} to="/patients-reseption" >
                        <div className="iconSide">
                        <img className='i' src={Patient} alt=''></img>
                        </div>
                        <span className="link hide">Patients</span>
                    </Link>
                    </li>
                    <li className="tooltip-element" >
                    <Link number="2" className='linkSide' onClick={handleUlSideClick} to="#" >
                        <div className="iconSide">
                        <img className='i' src={Check_attendance} alt=''></img>
                        </div>
                        <span className="link hide">attendance</span>
                    </Link>
                    </li>
                    <li className="tooltip-element" >
                    <Link number="3" className='linkSide' onClick={handleUlSideClick} to="/notification_reception" >
                        <div className="iconSide">
                        <img className='i' src={Notifications} alt=''></img>
                        </div>
                        <span className="link hide">Notifications</span>
                    </Link>
                    </li>
                    <li className="tooltip-element" >
                    <Link number="4" className='linkSide' onClick={handleUlSideClick} to="#" >
                        <div className="iconSide">
                        <img className='i' src={Tele} alt=''></img>
                        </div>
                        <span className="link hide">Malfunctions</span>
                    </Link>
                    </li>
                    <hr className='hide'/>
                    <li className="tooltip-element" >
                    <Link number="5" className='linkSide' onClick={handleUlSideClick} to="#" >
                        <div className="iconSide">
                        <img className='i' src={Settings} alt=''></img>
                        </div>
                        <span className="link hide">Settings</span>
                    </Link>
                    </li>
                    <li className="tooltip-element" >
                        <Link number="6" className='linkSide' onClick={handleLogout} to="#" >
                            <div className="iconSide">
                            <img className='i' src={SignOut} alt=''></img>
                            </div>
                            <span className="link hide">Sign out</span>
                        </Link>
                    </li>
                </ul>
                )
            }
        </div>
    </section>
            {/* <NavFooter/> */}
    </div>
  )
}

export default Sidebar;


