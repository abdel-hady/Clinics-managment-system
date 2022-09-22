// import React, {useState, useEffect} from 'react';
import './clinics.css';
// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll';
import Navo from '../Navbar/navo';
import Footer from '../Footer/footer';
import ProfileIcon from '../../images/profile_icon.png';
import Doubi from '../../images/Doubi.jpg';
import ClinicPhoto from '../../images/clinic.png';
import Clinic_icon from './../../images/Clinic_icon.png';
const Clinics = () => {
  const colorNav = {
    on_focus: "#069AD3",
    white: 'white',
    borderRadius:'0px',
    defualt:"#707070",
  };

  return (
    <>
      <div className='Clinics'>
        <Navo/>
        <div className='landingClinics'>
          {/* <img className='landingPh' src={ClinicPhoto}></img> */}
            <h1>Heart clinics</h1>
            <h5>13 type of heart clincs</h5>
        </div>
        <div className='middel'>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
            <div className='card'>
                <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Clinic_icon}/>
                </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Clinic</h3>
                    <span>D.C 5000 S.P</span>
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
            </div>
 

        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Clinics;