import React ,{useEffect, useState}from 'react';
import './patient-information.css'
import { Link } from 'react-router-dom';
import {App} from './../../../../components/App';
import Table from './../../../../components/Table/table';
import Notifications from './../../../../images/notifications.png';
import Sidebar from '../../../../components/Sidebar/sidebar'
import NavDoctor from '../../../../components/NavDoctor/navDoctor';
import logoScroll from './../../../../images/LogoScroll.png'
import {NavFooter} from './../../../../components/NavDoctor/navDoctor'
import axios from 'axios';
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom"

const Patient_Information = () => {
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
    const linkAppoint=document.querySelectorAll('.link-appoint');
    if(window.location.pathname=='/patient_information'){
    if(linkAppoint)
    linkAppoint.forEach(link =>{
      link.classList.remove('activeAppoint');
    })
    linkAppoint[0].classList.add('activeAppoint');
    }
    axios.post("patients/get-patient",{
      id:params.id
    }).then(
      res=>{
        console.log(res.data.data)
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
    ).catch(
      err=>{
        console.log(err)
      }
    )
  })
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
  return (
    <>
    <Sidebar/>
    {
      params.id&&(
        // Object.values(list).map((obj, index)=>
        // {
        //     return(
            <div className='main-doctor'>
            <NavDoctor Appointments="Patients / Patient information"/>
            <div className='under-nav'>
              <div className='under-nav-header'>
                <ul className='link-patient-info'>
                  <li>
                    <div className=''>
                      <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="/patients" onClick={handleClinic_DeppartmentClick}>
                        <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                      </Link> 
                    </div>
                  </li>
                    <li  className='appoint-ele header-patient-info' >
                      <Link className='activeAppoint link-appoint btn-two-appoint' to={`/patient_information/${params.id}`} onClick={handleAppointClick}>Patient information</Link>
                    </li>
                    <li  className='appoint-ele header-patient-info'  >
                      <Link  className='link-appoint btn-two-appoint' to={`/patient_appointments/${params.id}`} onClick={handleAppointClick}>Patient appointments</Link>
                    </li>
                    <li  className='appoint-ele header-patient-info'  >
                      <Link  className='link-appoint btn-two-appoint' to={`/patient_reports/${params.id}`}  onClick={handleAppointClick}>Patient reprorts</Link>
                    </li>
                </ul>
              </div>
              <div className='under-nav-body'>
                <div className='general-info'>General info</div>
                <div className='general-info-body'>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>First Name</span>
                      <div className='body-row-div-div'>{first_name}</div>
                    </div>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Father Name</span>
                      <div className='body-row-div-div'>{father_name}</div>
                    </div>
                  </div>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Last Name</span>
                      <div className='body-row-div-div'>{last_name}</div>
                    </div>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Gender</span>
                      <div className='body-row-div-div'>{gender}</div>
                    </div>
                  </div>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Birth Date</span>
                      <div className='body-row-div-div'>{birth_date}</div>
                    </div>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Age</span>
                      <div className='body-row-div-div'>{age}</div>
                    </div>
                  </div>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Mail Adress</span>
                      <div className='body-row-div-div'>{email}</div>
                    </div>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Contact Number</span>
                      <div className='body-row-div-div'>{phone_number}</div>
                    </div>
                  </div>
    
                  
                </div>
                <div className='healthy-info'>Healthy info</div>
                <div className='healthy-info-body'>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Height</span>
                      <div className='body-row-div-div'>{height}</div>
                    </div>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Weight</span>
                      <div className='body-row-div-div'>{weight}</div>
                    </div>
                  </div>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Blood Group</span>
                      <div className='body-row-div-div'>{blood_group}</div>
                    </div>
                    <div className='body-row-div'>
                      <span className='body-row-div-span'>Allergy</span>
                      <div className='body-row-div-div'>{allergies}</div>
                    </div>
                  </div>
                  <div className='body-row'>
                    <div className='body-row-div-final'>
                      <span className='body-row-div-span'>Chronic Diseases</span>
                      <div className='body-row-div-div'>{diseases}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      //   )
      // }
      // )
      )
    }
      <NavFooter/>
    </>
  )
}

export default Patient_Information;
