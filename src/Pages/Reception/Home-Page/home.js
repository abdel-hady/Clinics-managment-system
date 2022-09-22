import React ,{useEffect, useState}from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import {App} from './../../../components/App';
import Table from './../../../components/Table/table';
import Show from './../../../images/show.png';
import Sidebar from './../../../components/Sidebar/sidebar';
import NavDoctor from './../../../components/NavDoctor/navDoctor';
import Doubi from './../../../images/Doubi.jpg';
import Heart_Like from './../../../images/heart-like.png';
import {NavFooter} from './../../../components/NavDoctor/navDoctor';
import Contact_false from './../../../images/session-false.png';
import Doctor_gray from './../../../images/Doctor-gray.png';
import Reseption from './../../../images/Reception icon.png';
import Plus_circle from './../../../images/plus-circle.png'
import circle_plus from './../../../images/circle-around-plus.png'
import axios from 'axios';
import ReactLoading from 'react-loading';
// import { useNavigate } from "react-router-dom"

const Home = () => {
  const  [loading, setLoading]=useState(true)
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
  const colNames = ['Patient Name', 'Apoint Time',"Doctor", 'Apoint Type', 'Status']
  const colNamesWaiting = ['Patient Name', 'Age', 'Contact number', 'Action']
  const [appointButton,setAppointButton]=useState(false)
  const [home, setHome]= useState(null);
  const [attendance, setAttendance]= useState(null);
  const [getTodayAppointment, setGetTodayAppointment]= useState("");
  const [noData, setNoData]= useState("");
  const [dropPatient, setDropPatient]= useState("");
  const [dropDroctor, setDropDroctor]= useState("");
  const [selectPatient, setSelectPatient]= useState("");
  const [selectDoctor, setSelectDoctor]= useState("");
  useEffect(()=>{
    setHome("Home");
    setAttendance("Attendance");
    const t=sessionStorage.getItem('accessToken');
    const config={
      headers:{
        Authorization: 'Bearer ' + t 
      }
    }
    axios.get("appointments/paginate/get-today-appointments",config).then(
    res=>{
      setAppointButton(true)
      setGetTodayAppointment(res.data.data)
      setNoData(res.data.message)
      setLoading(false)
    }
    ).catch(err=>{
      console.log(err)
    })
    axios.get("patients/get-all-patients-reception",config).then(res=>{
      setDropPatient(res.data)
    }).catch(err=>{
      console.log(err)
    })
    axios.get("doctors/get-all-doctor-reception",config).then(res=>{
      setDropDroctor(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  const clear =()=>{
    document.getElementById("search").value="";
  }

const search =()=>{
  document.querySelector(".search-container").classList.toggle("activeSearch")
}
const handleAppointClick=(e)=>{
    
  const links= document.querySelectorAll(".link-appoint")
  if(links)
  links.forEach(link =>{
    link.classList.remove("activeAppoint")
  })
  e.currentTarget.classList.add("activeAppoint");
  if(e.currentTarget.innerHTML==="Today Appointments"){
    return setAppointButton(true);
  }
  setAppointButton(false);
  }
  const handleAddButton=()=>{
    axios.post("waitings/add-emergencie",{
      doctor_id:selectDoctor,
      patient_id:selectPatient
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  return(
    <>
      <Sidebar home={home} icon={Reseption} attendance={attendance}/>
      <div className='home-parent'>
      <div className='main-doctor'>
        <NavDoctor Appointments="Home"/>
        { !loading &&(
        <div className='home'>
          <div className='date-plus-plus'>
            <div className='date'>
              <div className='date-day'>Thursday 2022-19-07</div>
              <div className='text-num'>
                <div className='text-appointment'>Today Appointments:</div>
                <div className='num-appointment'>135</div>
              </div>
            </div>
            <div className='plus-1'>
              <div>
                <Link to="/add_patient_reception" className='plus-cricle-1'>
                <img  src={Plus_circle} alt=""/>
                </Link>
              </div>
              <div className='text'>Add Patient</div>
            </div>
            <div className='plus-2'>
            <div>
              <Link to="/add_appointment_reception" className='plus-cricle-2'>
                <img  src={Plus_circle} alt=""/>
              </Link>
              </div>
              <div className='text'>Add Appointment</div>
            </div>
          </div>
          <div className='text-drowp'>
            <div className='text-add-patient'>Add Patient to Waiting Table</div>
            <div className='drowp-patient-doctor'>
              <div className='drowp-down-patient'>
              <label for="cars">Patient</label>
                <select
                    className=" chicked-session"
                    onChange={(e)=> setSelectPatient(e.target.value)}                  >
                    {dropPatient&&(
                      dropPatient.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.patient_name}
                        </option>
                      ))
                    )}
                  </select>
              </div>
              <div className='drowp-down-patient'>
              <label for="cars">Doctor</label>
                <select
                    className=" chicked-session"
                    onChange={(e)=> setSelectDoctor(e.target.value)}
                  >
                    {dropDroctor&&(
                      dropDroctor.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.doctor_name}
                        </option>
                      ))
                    )}
                  </select>
              </div>
              <button onClick={handleAddButton}>Add</button>
            </div>
          </div>
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
                <li  className='appoint-ele'  >
                  <Link  className='activeAppoint link-appoint btn-two-appoint' to="" onClick={handleAppointClick}>Today Appointments</Link>
                </li>
                <li  className='appoint-ele' >
                  <Link className=' link-appoint btn-one-appoint' to="" onClick={handleAppointClick}>Waiting</Link>
                </li>
              </ul>
            </div>
          <div className='parent-table'>
            {appointButton&&(
              <Table list={getTodayAppointment.data} appointButton={true} colNames={colNames}/>
            )}
            {appointButton===false&&(
              <>
              <div className='Doctor-selceted'>
                <div className='doctor-child-parent'>
              <div className='doctor-child'>Doctor</div>
                <select
                    className=" chicked-home-doctor"
                    // onChange={(e)=> setSelectedSession(e.target.value)}
                  >
                    {/* {get_titles&&(
                      get_titles.map((item, index) => (
                        
                        <option key={index} value={item.id}>
                          {item.title}
                        </option>
                      ))
                    )} */}
                  </select>
                </div>
              </div>
                  <Table list={noData} appointButton={false} colNames={colNamesWaiting}/>
              </>
            )}
          </div>
        </div>
        )}
        {loading &&(
      <ReactLoading className='bubbles' type="bubbles" color="blue" height={'30%'} width={'30%'} />
    )}
      </div>
      </div>
      <NavFooter/>
    </>
  )
}

export default Home;