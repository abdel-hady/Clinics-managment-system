import React ,{useState, useEffect}from 'react';
import './add-appointment.css'
import { Link } from 'react-router-dom';
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
const Add_appointment_reception = () => {
  const [dropPatient, setDropPatient]= useState("");
  const [dropDroctor, setDropDroctor]= useState("");
  const [dropAvailableAppoint, setDropAvailableAppoint]= useState("");
  const [dropAvailableDate, setDropAvailableDate]= useState("");
  const [selectPatient, setSelectPatient]= useState("");
  const [selectDoctor, setSelectDoctor]= useState("");
  const [selectAppoint, setSelectAppoint1]= useState("");
  const [selectDate, setSelectDate]= useState("");
  const [allDepartment, setAllDepartment]= useState("");
  const [selectDepartment, setSelectDepartment]= useState("");
  const [dropClinic, setDropClinic]= useState("");
  const [selectClinic, setSelectClinic]= useState("");
  // const [selectClinic, setSelectAppoint]= useState("");
  const [dropDoctor, setDropDoctor]= useState("");
  const colNames = ['Patient Name', 'Apoint Time', 'Apoint Type', 'Status']


  
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
useEffect(()=>{
  setHome("Home");
  setAttendance("Attendance");
  const t=sessionStorage.getItem('accessToken');
    const config={
      headers:{
        Authorization: 'Bearer ' + t 
      }
    }
  axios.get("patients/get-all-patients-reception",config).then(res=>{
    setDropPatient(res.data)
  }).catch(err=>{
    console.log(err)
  })
  // axios.get("doctors/get-all-doctor-reception",config).then(res=>{
  //   setDropDroctor(res.data)
  // }).catch(err=>{
  //   console.log(err)
  // })
  axios.get("departments/get-all",config).then(res=>{
    setAllDepartment(res.data.data)
    // console.log(res.data.data)
  }).catch(err=>{
    console.log(err)
  })
  
  // axios.post("doctors/get-available-dates",config).then(res=>{
  //   setDropAvailableDate(res.data)
  // }).catch(err=>{
  //   console.log(err)
  // })

},[])
const t=sessionStorage.getItem('accessToken');
const config={
  headers:{
    Authorization: 'Bearer ' + t 
  }
}
// if(selectDoctor){
//   console.log(selectDoctor)
//   axios.post("doctors/get-available-dates",{
//     doctor_id:selectDoctor
//   },config).then(res=>{
//     console.log(res.data)
//     setDropAvailableDate(res.data.data)
//   }).catch(err=>{
//     console.log(err)
//   })
// }


// if(selectClinic){
//   console.log(selectClinic)
//   axios.post("doctors/get-doctors",{
//     id:selectClinic
//   },config).then(res=>{
//     console.log(res.data)
//     setDropDoctor(res.data.data)
//   }).catch(err=>{
//     console.log(err)
//   })
// }
// const handleDoctor=(e)=>{
//   setSelectDoctor(e.target.value)
// }
const handledepartment=(e)=>{
  setSelectDepartment(e.target.value)
  // const 
  if(selectDepartment){
    // console.log(selectDepartment)
    axios.post("clinics/get-clinics",{
      id:e.target.value
    },config).then(res=>{
      // console.log(res.data)
      setDropClinic(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }
}


const handleClinic=(e)=>{
  // if(selectClinic){
    // console.log(selectClinic)
    axios.post("doctors/get-doctors",{
      id:e.target.value
    },config).then(res=>{
      // console.log(res.data.data)
      setDropDoctor(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  // }
}
// const handleDoctor=(e)=>{
//   setSelectDoctor(e.target.value)
// }
  // (e)=> setSelectClinic(e.target.value)
// }
const handleDoctor=(e)=>{
  setSelectDoctor(e.target.value)
  axios.post("doctors/get-available-dates",{
    doctor_id:e.target.value
  },config).then(res=>{
    // console.log(res.data)
    setDropAvailableDate(res.data.data)
  }).catch(err=>{
    console.log(err)
  })
  // (e)=> setSelectDoctor(e.target.value)
}
const handleDate=(e)=>{
  setSelectDate(e.target.value)
axios.post("doctors/get-available-apps",{
  date:e.target.value,
  doctor_id:selectDoctor
},config).then(res=>{
  // console.log(res.data)
  setDropAvailableAppoint(res.data.data)
}).catch(err=>{
  console.log(err)
})
}
const handleAppointClick=(e)=>{
  console.log(selectDate)
  console.log(selectDate)
  // console.log(selectAppoint)
  axios.post("appointments/book",{
    doctor_id:selectDoctor,
    appointment_date:"2022-08-15",
    appointment_time:"12:30",
    is_review:0,
    patient_id:selectPatient
  },config).then(
    res=>{
      console.log(res)
    }
  )
  }
  const handleAppoint=(e)=>{
    // setSelectAppoint1(e.target.value)
    console.log(e.target.value)
  }
  return (
    <>
        <Sidebar home={home} icon={Reseption} attendance={attendance}/>
        <div className='user-info-patient-account'>
          <div className='patient-info-rec'>
            
            <div className='main-doctor'>
                <NavDoctor Appointments="Patients / Add Appointment"/>
                <div className='under-nav'>
                <div className='b-all-new-post update-profile-div'>
                  <div className='chevron-title'>
                    <div>
                      <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="/patients-reseption" onClick={handleClinic_DeppartmentClick}>
                        <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                      </Link>
                    </div>
                    <div className='title-nav'>
                    Book New Appointment
                    </div>
                  </div>
                  <div>
                    <Link className='check activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                      <box-icon style={{"fontSize" : "40px","fill":"rgb(1, 55, 154)"}} name='check' ></box-icon>
                    </Link>
                  </div>
                </div>
                <div className='user-info add-appointment'>
                  <form>
                  <div className='work-info-body'>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <label className='body-row-div-span' for="cars">Patient</label>
                      <select
                    className="body-row-div-div"
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
                    <div className='body-row-div'>
                      <label className='body-row-div-span' for="cars">Department</label>
                      <select
                        className="body-row-div-div"
                        onChange={handledepartment}    
                        >
                        {allDepartment&&(
                          allDepartment.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          ))
                        )}
                    </select>
                    </div>
                  </div>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <label className='body-row-div-span' for="cars">Clinic</label>
                      
                      <select
                        className="body-row-div-div"
                        onChange={handleClinic}    
                        >
                        {dropClinic&&(
                          dropClinic.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          ))
                        )}
                    </select>
                    </div>
                    <div className='body-row-div'>
                      <label className='body-row-div-span' for="cars">Doctor</label>
                      <select
                    className=" body-row-div-div"
                    onChange={handleDoctor}
                  >
                    { dropDoctor&&(
                      dropDoctor.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      ))
                    )}
                  </select>
                    </div>
                  </div>
                  <div className='body-row'>
                    <div className='body-row-div'>
                      <label className='body-row-div-span' for="cars">Appointment Date</label>
                      <select
                    className=" body-row-div-div"
                    onChange={handleDate}
                  >
                    {dropAvailableDate&&(
                      dropAvailableDate.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))
                    )}
                  </select>
                      
                    </div>
                    <div className='body-row-div'>
                      <label className='body-row-div-span' for="cars">Time Date</label>
                      <select
                    className=" body-row-div-div"
                    onChange={handleAppoint }
                  >
                    {dropAvailableAppoint&&(
                      dropAvailableAppoint.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))
                    )}
                  </select>
                    </div>
                  </div>
                  <div className='check-label'>
                    <label for="vehicle1">Review Appointment</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                  </div>
                </div>
                <div className='body-row '>
                  <div className='links-update-edit'>
                  <Link  className='crente-patient'onClick={handleAppointClick}  to="">Book Appointment</Link>
                  </div>
                </div>
                {/* onClick={handleAppointClick} */}
                </form>
                </div>
                </div>
            </div>
          </div>
        </div>
      <NavFooter/>
    </>
  )
}

export default Add_appointment_reception;
