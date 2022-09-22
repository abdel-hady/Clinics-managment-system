import React ,{useState, useEffect}from 'react';
import './patient-account.css'
import { Link, useParams } from 'react-router-dom';
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


const Patient_account_reception = () => {
  const params = useParams();
  const list= [
    { id:1 , name: "abdel hady" , Age: 22, nice:"asd"},
    { id:2, name : "alrajab", Age: 20},
    { id:1 , name: "abdel hady" , Age: 22, nice:"asd"},
    { id:2, name : "alrajab", Age: 20},
    { id:1 , name: "abdel hady" , Age: 22, nice:"asd"},
    { id:2, name : "alrajab", Age: 20},
    { id:1 , name: "abdel hady" , Age: 22, nice:"asd"},
    { id:2, name : "alrajab", Age: 20},
    { id:1 , name: "abdel hady" , Age: 22, nice:"asd"},
    { id:2, name : "alrajab", Age: 20},
  ]
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

  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [password_confirmation,setPassword_confirmation]=useState("")
  const [patient_id,setPatient_id]=useState("")
  const [email,setEmail]=useState("")
  const [home, setHome]= useState(null);
const [attendance, setAttendance]= useState(null);
useEffect(()=>{
  setHome("Home");
  setAttendance("Attendance");
  setPatient_id(params.id)
},[])
const handleSaveAccount=()=>{
  axios.post("patients/add-account",{
    username,
    password,
    password_confirmation,
    patient_id,
    email
  }).then(
    res=>{
      console.log(res)
    }
  ).catch(err=>{
    console.log(err)
  })
  
}
  return (
    <>
        <Sidebar home={home} icon={Reseption} attendance={attendance}/>
        <div className='user-info-patient-account'>
          <div className='patient-info-rec'>
            
            <div className='main-doctor'>
                <NavDoctor Appointments="Patients / Patient Account"/>
                <div className='under-nav'>
                <div className='b-all-new-post update-profile-div'>
                  <div className='chevron-title'>
                    <div>
                      <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="/home" onClick={handleClinic_DeppartmentClick}>
                        <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                      </Link>
                    </div>
                    <div className='title-nav'>
                    Patient Account
                    </div>
                  </div>
                  <div>
                    <Link className='check activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                      <box-icon style={{"fontSize" : "40px","fill":"rgb(1, 55, 154)"}} name='check' ></box-icon>
                    </Link>
                  </div>
                </div>
                <div className='user-info'>
                  <div className='healthy-info'>User info</div>
                  
                  <div className='work-info-body'>
                        <div className='body-row-div-final bodyUserName'>
                          <span className='body-row-div-span'>Username</span>
                          <input required className='body-row-div-div' onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='username'/>
                        </div>
                  <div className='body-row'>
                  <div className='body-row-div'>
                          <span className='body-row-div-span'>Password</span>
                          <input required className='body-row-div-div' onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='password'/>
                        </div>
                  <div className='body-row-div'>
                          <span className='body-row-div-span'>Confirme Password</span>
                          <input required className='body-row-div-div' onChange={(e)=>setPassword_confirmation(e.target.value)} type="text" placeholder='conf password'/>
                        </div>
                        </div>
                  <div className='body-row-div-final'>
                        <span className='body-row-div-span'>Mail Adress</span>
                        <input required className='body-row-div-div' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='example@gmail.com'/>
                  </div>
                </div>
                <div className='body-row '>
                  <div className='links-update-edit'>
            
                  <Link  className='crente-patient' to="" onClick={handleSaveAccount}>Save Account</Link>
                  </div>
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

export default Patient_account_reception;
