import React ,{useState, useEffect}from 'react';
import './patient-appointment.css'
import { Link ,useParams} from 'react-router-dom';
import {App} from './../../../../components/App';
import Table from './../../../../components/Table/table';
import Notifications from './../../../../images/notifications.png';
import Sidebar from '../../../../components/Sidebar/sidebar'
import NavDoctor from '../../../../components/NavDoctor/navDoctor';
import logoScroll from './../../../../images/LogoScroll.png'
import Reseption from './../../../../images/Reception icon.png';
import {NavFooter} from './../../../../components/NavDoctor/navDoctor'
import axios from 'axios';
// import { useNavigate } from "react-router-dom"


const Patient_Appointments_reception = () => {
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
    
    const links= document.querySelectorAll(".link-paient-appoint")
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
    const linkAppoint=document.querySelectorAll('.link-appoint');
    if(window.location.pathname=='/patient_information'){
    if(linkAppoint)
    linkAppoint.forEach(link =>{
      link.classList.remove('activeAppoint');
    })
    linkAppoint[0].classList.add('activeAppoint');
    }
    axios.post("appointments/paginate/get-appointments",{
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
  },[])
  return (
    <>
      <Sidebar home={home} icon={Reseption} attendance={attendance}/>
        <div className='patient-appoint-rec'>
        <div className='main-doctor'>
        <NavDoctor Appointments="Patients / Patient Appointments"/>
        <div className='under-nav'>
        <div className='table-appoint'>
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
                    <Link className=' link-appoint btn-two-appoint' to={`/patient_info_reception/${params.id}`} onClick={handleAppointClick}>Patient information</Link>
                  </li>
                  <li  className='appoint-ele header-patient-info'  >
                    <Link  className='activeAppoint link-appoint btn-two-appoint' to={`/patient_appointments_reception/${params.id}`} onClick={handleAppointClick}>Patient appointments</Link>
                  </li>
                  <li  className='appoint-ele header-patient-info'  >
                    <Link  className=' link-appoint btn-two-appoint' to={`/patient_report_reception/${params.id}`} onClick={handleAppointClick}>Patient reprorts</Link>
                  </li>
              </ul>
            <div className='search-container'>
                      <div className='search-icon'>
                        <box-icon color="#01379A" onClick={search} className="search" name='search'></box-icon>
                      </div>
                      <div className='input-search'>
                        <input type="text" placeholder="Search" id="search" />
                        <box-icon  color="#01379A" onClick={clear} className="clear" name='x' ></box-icon>
                      </div>
            </div>
          </div>
                <div className='parent-table'>

                  <Table list={list} colNames={colNames}/>
                  
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
        </div>
      <NavFooter/>
    </>
  )
}

export default Patient_Appointments_reception;
