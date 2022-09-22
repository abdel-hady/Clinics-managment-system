import React ,{useState, useEffect}from 'react';
import './patient.css'
import { Link } from 'react-router-dom';
import {App} from '../../../components/App';
import Table from '../../../components/Table/table';
import Notifications from './../../../images/notifications.png';
import Sidebar from '../../../components/Sidebar/sidebar'
import NavDoctor from '../../../components/NavDoctor/navDoctor';
import logoScroll from './../../../images/LogoScroll.png'
import {NavFooter} from '../../../components/NavDoctor/navDoctor';
import Reseption from './../../../images/Reception icon.png';
import axios from 'axios';
// import { useNavigate } from "react-router-dom"


const Patients_reseptiion = () => {
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
  const colNames = ['Patient Name', 'Age', 'Contact number', 'Action']

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
const [home, setHome]= useState(null);
const [attendance, setAttendance]= useState(null);
const [patientsDoctor, setPatientsDoctor]= useState('');
useEffect(()=>{
  setHome("Home");
  setAttendance("Attendance");
  axios.get ('patients/paginate/get-all').then(
    res=>{
      // console.log(res.data) 
      setPatientsDoctor(res.data.data)
    }
  ).catch(
    err=>{
      console.log(err)
    }
  )
},[])
  return (
    <>
    <Sidebar home={home} icon={Reseption}/>
    <div className='patient-res'>
    <div className='main-doctor'>
        <NavDoctor Appointments="Patients"/>
        <div className='under-nav'>
            {/* <App/> */}
            <div className='table-appoint'>
                <div className='b-all-patients'>
                  <div className='search-plus'>
                    <div className='search-container'>
                      <div className='search-icon'>
                        <box-icon color="#01379A" onClick={search} className="search" name='search'></box-icon>
                      </div>
                      <div className='input-search'>
                        <input type="text" placeholder="Search" id="search" />
                        <box-icon  color="#01379A" onClick={clear} className="clear" name='x' ></box-icon>
                      </div>
                    </div>
                      <div className='div-plus_contact'>
                      <Link className=' plus-contact activeClinic_Deppartment link-Clinic_Deppartment ' to="/add_patient_reception" >
                        <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                      </Link>
                  </div>
                  </div>
                    <ul className='link-appointment'>
                      <li  className='appoint-ele'  >
                          <div className='titlePatient'>Patitents list</div>
                      </li>
                    </ul>
                </div>
                <div className='parent-table'>
                { patientsDoctor &&(
                  <Table list={patientsDoctor.data} colNames={colNames}attendance={attendance}/>
                  )}
                </div>
            </div>
        </div>
    </div>
    </div>
      <NavFooter/>
    </>
  )
}

export default Patients_reseptiion;
