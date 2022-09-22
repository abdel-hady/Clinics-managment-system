import React ,{useState, useEffect}from 'react';
// import './notification.css'
import { Link } from 'react-router-dom';
import {App} from './../../../components/App';
import Table from './../../../components/Table/table';
import Notifications from './../../../images/notifications.png';
import Sidebar from '../../../components/Sidebar/sidebar'
import NavDoctor from '../../../components/NavDoctor/navDoctor';
import logoScroll from './../../../images/LogoScroll.png'
import {NavFooter} from './../../../components/NavDoctor/navDoctor';
import Reseption from './../../../images/Reception icon.png';

// import { useNavigate } from "react-router-dom"


const Malfunctions_reception = () => {
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
  const colNames = ['Notification Title', 'Sender Name', 'Duration', 'Content']

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
    // pagination end
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


const [home, setHome]= useState(null);
const [attendance, setAttendance]= useState(null);
useEffect(()=>{
  setHome("Home");
  setAttendance("Attendance");
},[])
  return (
    <>
    <Sidebar home={home} icon={Reseption} attendance={attendance}/>
    <div className='main-doctor'>
        <NavDoctor Appointments="Notifications"/>
        <div className='under-nav'>
            {/* <App/> */}
            <div className='table-appoint'>
                <div className='b-all-patients search-notification'>
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
                      <li  className='appoint-ele'  >
                          <div className='titlePatient'>All Notifications</div>
                      </li>
                    </ul>
                </div>
                <div className='parent-table'>
                  <Table list={list} colNames={colNames}/>
                </div>
            </div>
        </div>
    </div>
    <NavFooter/>
    </>
  )
}

export default Malfunctions_reception;
