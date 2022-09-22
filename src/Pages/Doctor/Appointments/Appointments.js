import React ,{useEffect, useState}from 'react';
import './Appointments.css'
import { Link } from 'react-router-dom';
import Table from './../../../components/Table/table';
import Sidebar from '../../../components/Sidebar/sidebar'
import NavDoctor from '../../../components/NavDoctor/navDoctor';
import logoScroll from './../../../images/LogoScroll.png'
import {NavFooter} from './../../../components/NavDoctor/navDoctor'
import axios from 'axios';
import moment from 'moment'
import Calendar from 'react-calendar'
import Popup_Chevron from './../../../images/popupvhevron.png';
import ReactLoading from 'react-loading';
const Appointments = () => {
  const [get_appointments_doctor, setGet_appointments_doctor] = useState({})
  const [get_calender_doctor, setGet_calender_doctor] = useState({})
  const  [loading, setLoading]=useState(true)
  const colNames = ['Patient Name', 'Apoint Time', 'Apoint Type', 'Status']
  const colNamesWaiting = ['Patient Name', 'Age', 'Contact number', 'session']
  const [appointButton,setAppointButton]=useState(false)
  const handleAppointClick=(e)=>{
    const links= document.querySelectorAll(".link-appoint")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeAppoint")
    })
    e.currentTarget.classList.add("activeAppoint");
    if(e.currentTarget.innerHTML==="All Appointments"){
      return setAppointButton(true);
    }
    setAppointButton(false);
    } 
    function hand(data){
      if(data)
      for(let i = 0; i < data.length;i++){
        const dayafter= moment(`${data[i]}`).format("DD MMMM YYYY")
        const aria=  document.querySelector(`[aria-label="${dayafter}"]`)
        if(aria)
        aria.parentElement.style.backgroundColor="#6DA1FF"
      }
    }
    const [users, setUsers] =useState(null)
    const [waiting, setWaiting] =useState("")
    const [messageWaiting, setMessageWaiting] =useState("")
    useEffect(()=>{
      if(sessionStorage.getItem('accessToken')){
        const t=sessionStorage.getItem('accessToken');
        const config={
          headers:{
            Authorization: 'Bearer ' + t 
          }
        }
          axios.get("appointments/paginate/get-appointments-doctor",config).then(
            res =>{
              setUsers(res.data.data)
              setLoading(false)
            },err =>{
              console.log(err)
            }
          )
          axios.post("waitings/paginate/get-waitings",config).then(
            res =>{
              setWaiting(res.data.data)
              console.log(res.data.data)
              // console.log(res.data.data.data[0])
              setLoading(false)
              // setMessageWaiting(res.data.message)
              // console.log(res.data.message)
            },err =>{
              console.log(err)
            }
          )
          axios.get("appointments/get-calander-doctor",config).then(
            res =>{
              setGet_calender_doctor(res.data.data)
              sessionStorage.setItem('get_calendar',JSON.stringify(res))
              hand(res.data.data)
            },err =>{
              console.log(err)
            }
          )
      }
    
    },[])
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
const [date , onChange]=useState(new Date())
const overlay= document.querySelector(".opacity")
const number_click_cell=0;
    const clicko=(clickDay)=>{
      function img_click(){
        overlay.classList.remove("overlay")
        document.querySelector(".div-popup").remove();
      }
      clickDay= moment(clickDay).format("YYYY-MM-DD")
      axios.post("appointments/get-events-doctor",{
        date : clickDay
      }).then(
        res =>{
          get_events_doctor(res.data.data)
        },err =>{
          console.log(err)
        }
      )
      function get_events_doctor(date1){
      const dat=date1
      if(dat){
      if(dat[0].date >= moment(new Date()).format("YYYY-MM-DD")){
        console.log(dat[0].date)
        console.log(new Date())
      const section = document.querySelector(".main-doctor")
      const div= document.createElement("div");
      const img_Chevron= document.createElement("img");
      const div_header= document.createElement("div");
      const div_body= document.createElement("div");
      img_Chevron.src= Popup_Chevron
      img_Chevron.onclick=img_click;
      img_Chevron.style.cursor="pointer"
      if(section)
      section.appendChild(div)
      div.appendChild(div_header)
      div.appendChild(div_body)
      div_header.innerHTML= dat[0].date;
      div_header.appendChild(img_Chevron);
      if(dat !==null)
      for(let i = 0 ; i<dat.length; i++){
      const div_element= document.createElement("div");
      const div_square_status= document.createElement("div");
      const div_square= document.createElement("div");
      const div_status= document.createElement("div");
      const div_data= document.createElement("div");
      const div_name_time_rev= document.createElement("div");
      const div_name= document.createElement("div");
      const div_time_date= document.createElement("div");
      const div_time= document.createElement("div");
      const div_date= document.createElement("div");
      const div_review= document.createElement("div");
      const review_square= document.createElement("div");
      const review_text= document.createElement("div");
      const text_link = document.createTextNode("OPEN SESSION")
      div.classList.add("div-popup")
      div_header.classList.add("div_header")
      div_body.classList.add("div_body")
      div_element.classList.add("div_element")
      div_square_status.classList.add("div_square_status")
      div_square.classList.add("div_square")
      div_status.classList.add("div_status")
      div_data.classList.add("div_data")
      div_name_time_rev.classList.add("div_name_time_rev")
      div_name.classList.add("div_name")
      div_time_date.classList.add("div_time_date")
      div_time.classList.add("div_time")
      div_review.classList.add("div_review")
      review_square.classList.add("review_square")
      div_body.appendChild(div_element)
      div_element.appendChild(div_square_status)
      div_element.appendChild(div_data)
      div_square_status.appendChild(div_square)
      div_square_status.appendChild(div_status)
      div_data.appendChild(div_name_time_rev)
      div_name_time_rev.appendChild(div_name)
      div_name_time_rev.appendChild(div_time_date)
      div_name.innerHTML= dat[i].name ;
      div_time_date.appendChild(div_time)
      div_time_date.appendChild(div_date)
      div_time.innerHTML= `${dat[i].time}`;
      div_date.innerHTML= `${dat[i].date}`;
      div_review.appendChild(review_square)
      div_review.appendChild(review_text);
      if(dat[i].statue==="Canceled"){
        div_square.style.backgroundColor="#B50000"
      }else if(dat[i].statue==="Pending"){
        div_square.style.backgroundColor="#EAD900"
      }
      div_status.innerHTML= dat[i].statue;
      if(dat[i].is_review===1){
        review_square.style.backgroundColor="blue"
        review_text.innerHTML="New appointment"
      }else {
        review_square.style.backgroundColor="green"
        review_text.innerHTML="Review appointment"
      }
      div_data.appendChild(div_review)
      overlay.classList.add("overlay");
    }
  }
}}
  }
  // const handleAppoint=(e)=>{
  //   console.log(e.currentTarget)
  // }
  // const handleWaiting=(e)=>{
  //   console.log(e.currentTarget.classList)
  // }
  return (
    <>
    <Sidebar/>
    <div className='opacity'></div>
    <div className='main-doctor'>
        <NavDoctor Appointments="Appointments"/>
    { !loading &&(
        <div className='under-nav'>
            <Calendar
        onChange={onChange}
        onClickDay={clicko}
        value= {date}
        />

        
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
                      <Link className='activeAppoint link-appoint btn-one-appoint' to="" onClick={handleAppointClick}>Waiting</Link>
                      </li>
                      <li className='appoint-ele' >
                        <Link className=' link-appoint btn-two-appoint' to="" onClick={handleAppointClick}>All Appointments</Link>
                      </li>
                    </ul>
                </div>
                <div className='parent-table'>
                  {
                    appointButton &&(
                      <Table list={users.data} waiting={true} colNames={colNames}/>
                      )
                    }
                    {
                     waiting &&(
                        <Table list={waiting.data}  waiting={false} colNames={colNamesWaiting}/>
                      )
                    }
                </div>
            </div>
        </div>
    )}
    {loading &&(
      <ReactLoading className='bubbles' type="bubbles" color="blue" height={'30%'} width={'30%'} />
    )}
    </div>
      <NavFooter/>
      
    </>
  )
}

export default Appointments;
