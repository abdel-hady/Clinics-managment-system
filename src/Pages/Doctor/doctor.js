import React from 'react';
import './doctor.css'
import { Link } from 'react-router-dom';
import {App} from '../App';
import Table from '../Table/table';
import Notifications from '../../images/notifications.png';
// import { useNavigate } from "react-router-dom"


const Doctor = () => {
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
  return (
    <div className='main-doctor'>
        <div className='navDoctor'>
            <div>Appointments</div>
            <div  className='notificate'>
            <Link className='' to="#">
                <div className="">
                <img className='' src={Notifications} alt=''></img>
                </div>
            </Link>
            </div>
        </div>
        <div className='under-nav'>
            <App/>
            <div className='table-appoint'>
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
                      <Link className='activeAppoint link-appoint btn-one-appoint' to="" onClick={handleAppointClick}>All Appiontments</Link>
                      </li>
                      <li  className='appoint-ele'  >
                        <Link  className='link-appoint btn-two-appoint' to="" onClick={handleAppointClick}>Today apoints</Link>
                      </li>
                    </ul>
                </div>
                <div className='parent-table'>
                  <Table list={list} colNames={colNames}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Doctor;
