import React ,{useEffect, useState}from 'react';
import './my-reports.css'
import { Link, useParams } from 'react-router-dom';
import {App} from './../../../components/App';
import Table from './../../../components/Table/table';
import Notifications from './../../../images/notifications.png';
import Sidebar from '../../../components/Sidebar/sidebar'
import NavDoctor from '../../../components/NavDoctor/navDoctor';
import logoScroll from './../../../images/LogoScroll.png'
import {NavFooter} from './../../../components/NavDoctor/navDoctor'
import axios from 'axios';
// import { useNavigate } from "react-router-dom"


const My_Reports = () => {
  const params = useParams();
  const [patientsDoctor, setPatientsDoctor] =useState(null)
  useEffect(()=>{
    const t=sessionStorage.getItem('accessToken');
    const config={
      headers:{
        Authorization: 'Bearer ' + t 
      }
    }
    axios.get("appointments/paginate/get-reports-doctor").then(
      res =>{
        // console.log(res.data.data)
        setPatientsDoctor(res.data.data)
      },err =>{
        console.log(err)
      }
    )
  },[])

  const [get_appointments_doctor, setGet_appointments_doctor] = useState({})
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
  // let get_appointments_doctor;
  const colNames = ['Patient Name', 'Session', 'Session Type', 'Status']

  const handleAppointClick=(e)=>{
    
    const links= document.querySelectorAll(".link-appoint")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeAppoint")
    })
    e.currentTarget.classList.add("activeAppoint");
    }
    // useEffect(()=>{

    //   axios.get("appointments/get-appointments-doctor", ).then(
    //     res=>{ 
    //       setGet_appointments_doctor(res.data.data);
    //       console.log(res.data.data)
    //       // console.log(get_appointments_doctor.patient_name)
    //     },err =>{
    //       console.log(err)
    //     }
    //   )
    // })
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

  return(
    <>
    <Sidebar/>
    <div className='main-doctor'>
        <NavDoctor Appointments="My Reports"/>
        <div className='under-nav'>
          <div className='table-appoint-done'>
          <div className='b-all-today'>
              <div className='search-container'>
                <div className='search-icon'>
                  <box-icon color="#01379A" onClick={search} className="search" name='search'></box-icon>
                </div>
                <div className='input-search'>
                  <input type="text" placeholder="Search" id="search" />
                  <box-icon  color="#01379A" onClick={clear} className="clear" name='x' ></box-icon>
                </div>
              </div>
              <ul className='link-appointment'>
                <li  className='appoint-ele' >
                <Link className='activeAppoint link-appoint btn-one-appoint' to="" onClick={handleAppointClick}>All reports</Link>
                </li>
                <li  className='appoint-ele'  >
                </li>
                    <Link  className='link-appoint btn-two-appoint' to="" onClick={handleAppointClick}>Today's reports</Link>
              </ul>
          </div>
          <div className='parent-table'>
          { patientsDoctor &&(
            <Table list={patientsDoctor.data} colNames={colNames}/>
            )}
            {/* <div className='pagination'>
            <div className="child-2 flex bg-white rounded-lg font-[Poppins]">
              <button onClick={back} className="page-l h-12 border-2 border-r-0 b-radius-15 border-indigo-600
                    px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
              </button>
              {
                  pages.map((pg, i) => (
                    <button key={i} onClick={() => setCur(pg.page)} className={`h-12 border-2 border-r-0 border-indigo-600
                    w-12 ${cur === pg.page && 'bg-indigo-600 text-white activepage'}`}>{pg.page}</button>
                  ))
              }
              <button onClick={Next} className="page-r h-12 border-2  border-indigo-600
                    px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </button>
            </div>
            </div> */}
          </div>
          </div>
        </div>
      </div>
    <NavFooter/>
  </>
)

}
export default My_Reports;