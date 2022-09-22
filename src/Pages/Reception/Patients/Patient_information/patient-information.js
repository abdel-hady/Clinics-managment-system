import React ,{useState, useEffect}from 'react';
import './patient-information.css'
import { Link ,useParams} from 'react-router-dom';
import {App} from './../../../../components/App';
import Table from './../../../../components/Table/table';
import Notifications from './../../../../images/notifications.png';
import Sidebar from '../../../../components/Sidebar/sidebar'
import NavDoctor from '../../../../components/NavDoctor/navDoctor';
import logoScroll from './../../../../images/LogoScroll.png'
import {NavFooter} from './../../../../components/NavDoctor/navDoctor';
import Contact_false from './../../../../images/session-false.png';
import Reseption from './../../../../images/Reception icon.png';
import axios from 'axios';

// import { useNavigate } from "react-router-dom"


const Patient_Information_reception = () => {
  const colNames = ['Patient Name', 'Apoint Time', 'Apoint Type', 'Status']

  const handleAppointClick=(e)=>{
    
    const links= document.querySelectorAll(".link-appoint")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeAppoint")
    })
    e.currentTarget.classList.add("activeAppoint");
    }
  
    // let search = document.querySelector(".search");
    // let clear = document.querySelector(".clear");
  
    const clear =()=>{
      document.getElementById("search").value="";
    }

  const search =()=>{
    document.querySelector(".search-container").classList.toggle("activeSearch")
}

// pagination start
let [num, setNum] = useState(1)
let [cur, setCur] = useState(1)

const pages = [
   { page: num },
   { page: num + 1 },
   { page: num + 2 },
   { page: num + 3 },
]
function Next ()
{
   setNum(++num)
}
function back ()
{
   num > 1 && setNum(--num)
}
// pagination end
const handleClinic_DeppartmentClick=(e)=>{
    
  const links= document.querySelectorAll(".link-Clinic_Deppartment")
  if(links)
  links.forEach(link =>{
    link.classList.remove("activeClinic_Deppartment")
  })
  e.currentTarget.classList.add("activeClinic_Deppartment");
  }

const [home, setHome]= useState(null);
const [attendance, setAttendance]= useState(null);
const params = useParams();
const [appointment_count,setAppointment_count]=useState('');
const [email,setEmail]=useState('');
const [gender,setGender]=useState('');
const [birth_date,setBirth_date]=useState('');
const [first_name,setFirst_name]=useState('');
const [father_name,setFather_name]=useState('');
const [last_name,setLast_name]=useState('');
const [phone_number,setPhone_number]=useState('');
const [age,setAge]=useState('');
const [height,setHeight]=useState('');
const [weight,setWeight]=useState('');
const [blood_group,setBlood_group]=useState('');
const [allergies,setAllergies]=useState('');
const [diseases,setDiseases]=useState('');
useEffect(()=>{
  setHome("Home");
  setAttendance("Attendance");
    axios.post("patients/get-patient",{
      id:params.id
    }).then(
      res=>{
        // console.log(res)
        setAppointment_count(res.data.data.appointment_count)
        setEmail(res.data.data.email)
        setGender(res.data.data.gender)
        setBirth_date(res.data.data.birth_date)
        setFirst_name(res.data.data.first_name)
        setFather_name(res.data.data.father_name)
        setLast_name(res.data.data.last_name)
        setPhone_number(res.data.data.phone_number)
        setAge(res.data.data.age)
        setHeight(res.data.data.height)
        setWeight(res.data.data.weight)
        setBlood_group(res.data.data.blood_group)
        setAllergies(res.data.data.allergies)
        setDiseases(res.data.data.diseases)
      }
    ).catch(err=>{
      console.log(err)
    })
    const linkAppoint=document.querySelectorAll('.link-appoint');
    if(window.location.pathname=='/patient_information'){
    if(linkAppoint)
    linkAppoint.forEach(link =>{
      link.classList.remove('activeAppoint');
    })
    linkAppoint[0].classList.add('activeAppoint');
    }
    // axios.post("appointments/paginate/get-reports",{
    //   id:params.id
    // }).then(
    //   res=>{
    //     console.log(res.data.data)
    //     setAppointment_count(res.data.data.appointment_count)
    //     setEmail(res.data.data.email)
    //     setGender(res.data.data.gender)
    //     setBirth_date(res.data.data.birth_date)
    //     setFirst_name(res.data.data.first_name)
    //     setFather_name(res.data.data.father_name)
    //     setLast_name(res.data.data.last_name)
    //     setPhone_number(res.data.data.phone_number)
    //     // setAge(res.data.data.age)
    //     setHeight(res.data.data.height)
    //     setWeight(res.data.data.weight)
    //     setBlood_group(res.data.data.blood_group)
    //     setAllergies(res.data.data.allergies)
    //     setDiseases(res.data.data.diseases)
    //   }
    // ).catch(
    //   err=>{
    //     console.log(err)
    //   }
    // )

},[])
  return (
    <>
    <Sidebar home={home} icon={Reseption} attendance={attendance}/>
    <div className='patient-info-rec'>
      <div className='main-doctor'>
          <NavDoctor Appointments="Patients / Patient information"/>
          <div className='under-nav'>
            <div className='under-nav-header'>
              <ul className='link-patient-info'>
                <li>
                  <div className=''>
                    <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="/patients-reseption" onClick={handleClinic_DeppartmentClick}>
                      <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                    </Link> 
                  </div>
                </li>
                  <li  className='appoint-ele header-patient-info' >
                    <Link className='activeAppoint link-appoint btn-two-appoint' to={`/patient_info_reception/${params.id}`} onClick={handleAppointClick}>Patient information</Link>
                  </li>
                  <li  className='appoint-ele header-patient-info'  >
                    <Link  className='link-appoint btn-two-appoint' to={`/patient_appointments_reception/${params.id}`} onClick={handleAppointClick}>Patient appointments</Link>
                  </li>
                  <li  className='appoint-ele header-patient-info'  >
                    <Link  className='link-appoint btn-two-appoint' to={`/patient_report_reception/${params.id}`} onClick={handleAppointClick}>Patient reprorts</Link>
                  </li>
              </ul>
              <div>
              <Link className='check activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                <box-icon style={{"fontSize" : "40px","fill":"rgb(1, 55, 154)"}} name='check' ></box-icon>
              </Link>
            </div>
            </div>
            <div className='under-nav-body'>
              <div className='general-info'>General info</div>
              <div className='general-info-body'>
                <div className='body-row'>
                  <div className='body-row-div'>
                    <span className='body-row-div-span'>First Name</span>
                    {/* <div className='body-row-div-div'>Abdel hady</div> */}
                    <input className='body-row-div-div' placeholder={first_name}></input>
                  </div>
                  <div className='body-row-div'>
                    <span className='body-row-div-span'>Father Name</span>
                    <input className='body-row-div-div' placeholder={father_name}></input>
                  </div>
                </div>
                <div className='body-row'>
                  <div className='body-row-div'>
                    <span className='body-row-div-span'>Last Name</span>
                    <input className='body-row-div-div' placeholder={last_name}></input>

                  </div>
                  <div className='body-row-div'>
                    <span className='body-row-div-span'>Gender</span>
                    <input className='body-row-div-div' placeholder={gender}></input>
                  </div>
                </div>
                <div className='body-row'>
                  <div className='body-row-div-birth'>
                    <span className='body-row-div-span'>Birth Date</span>
                    
                    <input className='body-row-div-div date-input' placeholder={birth_date}></input>
                    <div className='body-row-div-contact'>
                      <span className='body-row-div-span contact-number'>Contact number</span>
                      <div className='plus-input-false-contact'>
                      <div className='div-plus_contact'>
                      <Link className=' plus-contact activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                              <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                            </Link>
                      </div>
                      <input className='input-number-my-profile' type="text" id="" name="" value="" placeholder={phone_number}/>
                      <Link className='contact_false' to="#">
                        <div className="">
                          <img className='' src={Contact_false} alt=''></img>
                        </div>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>            
              </div>
              <div className='healthy-info'>Healthy info</div>
              <div className='healthy-info-body'>
                <div className='body-row'>
                  <div className='body-row-div patient-info'>
                    <span className='body-row-div-span'>Height</span>
                    <input className='body-row-div-div' placeholder={height}></input>

                  </div>
                  <div className='body-row-div patient-info'>
                    <span className='body-row-div-span'>Weight</span>
                    <input className='body-row-div-div' placeholder={weight}></input>

                  </div>
                  <div className='body-row-div patient-info'>
                    <span className='body-row-div-span'>Boold Group</span>
                    <input className='body-row-div-div' placeholder={blood_group}></input>

                  </div>
                </div>
                <div className='body-row'>
                  <div className='body-row-div div-allergy'>
                  <div className='body-row-div-contact'>
                      <span className='body-row-div-span contact-number'>Allergy</span>
                      <div className='plus-input-false-contact'>
                      <div className='div-plus_contact'>
                      <Link className=' plus-contact activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                              <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                            </Link>
                      </div>
                      <input className='input-number-my-profile input-allergy' type="text" id="" name="" value="" placeholder={allergies}/>
                      <Link className='contact_false' to="#">
                        <div className="">
                          <img className='' src={Contact_false} alt=''></img>
                        </div>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='body-row'>
                  <div className='body-row-div div-allergy'>
                  <div className='body-row-div-contact'>
                      <span className='body-row-div-span contact-number'>Chronic Diseases</span>
                      <div className='plus-input-false-contact'>
                      <div className='div-plus_contact'>
                      <Link className=' plus-contact activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                              <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                            </Link>
                      </div>
                      <input className='input-number-my-profile input-allergy' type="text" id="" name="" value="" placeholder={diseases}/>
                      <Link className='contact_false' to="#">
                        <div className="">
                          <img className='' src={Contact_false} alt=''></img>
                        </div>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className='body-row '>
                  <div className='links-update-edit'>
            
                  <Link  className='update-profile-rec' to="" onClick={handleAppointClick}>Update Profile</Link>
                  <Link  className='edit-user-rec' to="/add_appointment_reception" onClick={handleAppointClick}>Edit User info</Link>
                  </div>
                </div>

            </div>
          </div>
      </div>
    </div>
      <NavFooter/>
    </>
  )
}

export default Patient_Information_reception;
