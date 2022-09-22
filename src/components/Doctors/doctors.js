// import React, {useState, useEffect} from 'react';
import './doctors.css';
// import { Link } from 'react-router-dom';
import {Link} from 'react-scroll';
import Navo from '../Navbar/navo';
import Footer from '../Footer/footer';
import BagIcon from '../../images/bag_icon.png'
import Doubi from '../../images/Doubi.jpg'
import ClinicPhoto from '../../images/clinic.png'
const Doctors = () => {
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
            <h1>Heart clinic</h1>
            <h5>25 Specilizate doctors</h5>
        </div>
        <div className='middel'>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
            <div className='card'>
                <img src={Doubi}></img>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Abdel hady</h3>
                    <span>heart clinic</span>
                  </div>
                  <div className='div-link'>
                    <div>
                      <img src={BagIcon}></img>
                      <p>3 years</p>
                    </div>
                    <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                  </div>
                </div>
                
            </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Doctors;