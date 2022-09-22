import React, {useState, useEffect, useLocation, useHistory} from 'react';
import './header.css';
import Navbar from '../../../components/Navbar/navo';
import LandingPhoto from '../../../images/Header.png';
import { Link , Navigate} from 'react-router-dom';
import doctor from '../../../images/Doctors service.png';
import Health from '../../../images/healty service.png';
import  Heart  from '../../../images/Illustration.png';
import Dental from '../../../images/Dental_clinic.png';
import Footer from '../../../components/Footer/footer';
import BagIcon from '../../../images/bag_icon.png';
import Doctor_icon from './../../../images/Doctor_icon.png';
import axios from "axios";

const Header = () => {
  const [navigate, setNavigate] = useState(false);
  const logout = async (e) => {
    e.preventDefault()
    await axios.post('logout', {}, {withCredentials:true});
    setNavigate(true);
}

if (navigate) {
    return <Navigate to="/login"/>;
}
  return (
    <div>
      <Navbar/>
      {/* Landing   */}
        <div className='landingHeader' id="landingHeader">
          <div className='parentHead'>
            <div className='tex'>
            <h1>We Take Care Of Your Health</h1>
            <p className='paraLanding'>Whether you are a doctor or a patient
            log in with your account to be able to benefit 
            from our services</p>
            <div className='buttons'>
              <Link type='' className='btn-one' to="/login">Sign in</Link>
              <Link  type='' className='btn-two' to="#">New Appointment</Link>
            </div>
            </div>
            <div className='landingPh'>
            <Link  className='parentPh' to='#'>
              <img  className='logo-defaul' src={LandingPhoto} alt="logo"/>
            </Link>
            </div>
          </div>
        </div>
      {/* Services */}
      <div className='service' >
          <p className='paraService'>SERVICES</p>
        <div className='serv'>
          <div className='service-one'>
            <div className='phServ'>
              <Link  className='parentServ' to='#'>
                <img style={{"width":"100%", "height":"80%"}} className='logoServ' src={Health} alt=""/>
              </Link>
            </div>
            <p> 
                We provide health care in a variety of medical
                specialties and multiple services that make it
                easier for patients to reach their goals quickly
                and easily
            </p>
          </div>
          <div className='service-two'>
            <div className='phServ'>
              <Link  className='parentServ' to='#'>
                <img style={{"width":"100%", "height":"80%"}} className='logoServ' src={doctor} alt=""/>
              </Link>
            </div>
            <p> 
              We have a distinguished staff of experienced
              doctors and an integrated service staff
              we strive to achieve comfort and happiness
              for all patients
            </p>
          </div>
          <div className='service-three'>
            <div className='phServ'>
              <Link  className='parentServ' to='#'>
                <img style={{"width":"100%", "height":"80%"}} className='logoServ' src={Health} alt=""/>
              </Link>
            </div>
            <p> 
              We provide health care in a variety of medical
              specialties and multiple services that make it
              easier for patients to reach their goals quickly
              and easily
            </p>
          </div>
        </div>
      </div>
      {/* Department */}
      <div className='Department'>
          <p className='paraDepartment'>Department</p>
        <div className='parentDep'>
          <div className='child-1 child'>
            <div className='phDep'>
              <Link  className='parentPhDep' to='#'>
                <img  className='photoDep' src={Heart} alt=""/>
              </Link>
            </div>
            <div className='description'>
              <h2>Heart Clinics</h2>
              <p> 
                The Department of Cardiology is a center for integrated cardiac imaging
                with the latest echocardiography equipment (performs from 700 to 800
                echocardiograms annually, as well as transesophageal ECG with 3D
                technology and contrast), cardiac CT, and magnetic resonance
                imaging services.
              </p>
              <button  type='' className='seeAllBtn' to="#">See All</button>
            </div>
          </div>
          <div className='child-2 child'>
          <div className='phDep'>
              <Link  className='parentPhDep' to='#'>
                <img  className='photoDep' src={Dental} alt=""/>
              </Link>
            </div>
            <div className='description'>
              <h2>Heart Clinics</h2>
              <p> 
                The Department of Cardiology is a center for integrated cardiac imaging
                with the latest echocardiography equipment (performs from 700 to 800
                echocardiograms annually, as well as transesophageal ECG with 3D
                technology and contrast), cardiac CT, and magnetic resonance
                imaging services.
              </p>
              <button  type='' className='seeAllBtn' to="#">See All</button>
            </div>
          </div>
          <div className='child-3 child'>
          <div className='phDep'>
              <Link  className='parentPhDep' to='#'>
                <img  className='photoDep' src={Heart} alt=""/>
              </Link>
            </div>
            <div className='description'>
              <h2>Heart Clinics</h2>
              <p> 
                The Department of Cardiology is a center for integrated cardiac imaging
                with the latest echocardiography equipment (performs from 700 to 800
                echocardiograms annually, as well as transesophageal ECG with 3D
                technology and contrast), cardiac CT, and magnetic resonance
                imaging services.
              </p>
              <button  type='' className='seeAllBtn' to="#">See All</button>
            </div>
          </div>
          <div className='child-4 child'>
          <div className='phDep'>
              <Link  className='parentPhDep' to='#'>
                <img  className='photoDep' src={Dental} alt=""/>
              </Link>
            </div>
            <div className='description'>
              <h2>Heart Clinics</h2>
              <p> 
                The Department of Cardiology is a center for integrated cardiac imaging
                with the latest echocardiography equipment (performs from 700 to 800
                echocardiograms annually, as well as transesophageal ECG with 3D
                technology and contrast), cardiac CT, and magnetic resonance
                imaging services.
              </p>
              <button  type='' className='seeAllBtn' to="#">See All</button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='AllDoctors'>
          <p className='paraAllDoctors'>All Doctors</p>
          <div className='middel'>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                    
                </div>
                <div className='card'>
                    <div className='div_clinic_icon'>
                <img className='clinic_icon' src={Doctor_icon} alt=""/>
                </div>
                    <div className='text-card'>
                      <div className='titlePrice'>
                        <h3>Abdel hady</h3>
                        <span>heart clinic</span>
                      </div>
                      <div className='div-link'>
                        <div>
                          <img src={BagIcon} alt=""/>
                          <p>3 years</p>
                        </div>
                        <Link  type='' className='btn-appoint' to="#">Add Appoint</Link>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Header;
