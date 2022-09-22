import React ,{useEffect, useState}from 'react';
import './new-sission.css';
import { Link, useParams } from 'react-router-dom';
import {App} from './../../../../components/App';
import Table from './../../../../components/Table/table';
import Show from './../../../../images/show.png';
import Sidebar from '../../../../components/Sidebar/sidebar'
import NavDoctor from './../../../../components/NavDoctor/navDoctor';
import Heart_Like from './../../../../images/heart-like.png';
import {NavFooter} from './../../../../components/NavDoctor/navDoctor'
import Session_false from './../../../../images/session-false.png'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useNavigate } from "react-router-dom"


const New_Sission = () => {
  const params = useParams();
  const [open,setOpen]=useState("");
  const [selectedSession,setSelectedSession]=useState("");
  const [get_titles,setget_titles]=useState();
  // console.log(get_titles)
  const handleClinic_DeppartmentClick=(e)=>{
    const list=[]
    setget_titles(list)
    const links= document.querySelectorAll(".link-Clinic_Deppartment")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeClinic_Deppartment")
    })
    e.currentTarget.classList.add("activeClinic_Deppartment");
    }
    const [chicked,isChicked]=useState(false)
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const handleChicked=(e)=>{
      isChicked( e.target.checked)
      if(e.target.checked){
        document.getElementsByClassName("chicked-session")[0].removeAttribute("disabled")
        document.getElementsByClassName("lable-chicked-session")[0].style.color="#707070"
      }else{
        document.getElementsByClassName("chicked-session")[0].setAttribute("disabled",'')
        document.getElementsByClassName("lable-chicked-session")[0].style.color="#c1bebe";
      }
      console.log(e.target.checked)
    }
    useEffect(()=>{
      axios.post("sessions/open",{
        id: params.id
      }).then(
        res=>{
          setOpen(res.data.data)
        }
      ).catch(
        err=>{
        }
      )
      axios.post("sessions/get-titles",{
        waiting_id: params.id
      }).then(
        res=>{
          setget_titles(res.data.data)
        }
      ).catch(
        err=>{
          console.log(err)
        }
      )
    },[])
    const handleNewsession=()=>{
      axios.post("sessions/create",{
        waiting_id:params.id,
        title,
        description,
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
  return(
    <>
      <Sidebar/>
      <div className='main-doctor'>
        <NavDoctor Appointments="Appointments / New session"/>
        <div className='under-nav'>
          <div className='b-all-new-post new-sission-header'>
            <div className='chevron-title'>
              <div>
                <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="/appointments" onClick={handleClinic_DeppartmentClick}>
                  <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                </Link>
              </div>
              <div className='title-nav'>
              Create New Session
              </div>
            </div>
            <div>
              <Link className='check activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                <box-icon style={{"fontSize" : "40px","fill":"rgb(1, 55, 154)"}} name='check' ></box-icon>
              </Link>
            </div>
          </div>
          <div className='info-new-sission'>
            <div className='header-new-sission'>
              <div className='check-drowp'>
                <div className='check-label'>
                  <label for="vehicle1"> I have a bike</label>
                  <input onChange={handleChicked} type="checkbox" id="vehicle1" name="vehicle1"/>
                </div>
                <div className='drowp-label'>
                  <label className='lable-chicked-session'  for="cars">Previous Session</label>
                  <select
                    className=" chicked-session"
                    onChange={(e)=> setSelectedSession(e.target.value)}
                  >
                    {get_titles&&(
                      get_titles.map((item, index) => (
                        
                        <option key={index} value={item.id}>
                          {item.title}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>
              <div className='header-left-right'>
              <div className='header-left'>
                <div className='info-name-data'>
                  <div className='info-name'>Patient Name</div>
                  <div className='info-data'>{open.patient_name}</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Contact Nubmer</div>
                  <div className='info-data'>{open.contact_number}</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Gender</div>
                  <div className='info-data'>{open.gender==="0"? "female": "male"}</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Age</div>
                  <div className='info-data'>{open.age}</div>
                </div>
              </div>
              <div className='header-right'>
                <div className='info-name-data'>
                  <div className='info-name'>Appointment Date</div>
                  <div className='info-data'>{open.session_date}</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>{open.session_time}</div>
                  <div className='info-data'>04:45 PM</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Doctor Name</div>
                  <div className='info-data'>{open.doctor_name}</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Clinic Name</div>
                  <div className='info-data'>{open.clinic_name}</div>
                </div>
              </div>
              </div>
              <div className='Prescription_Details'>Prescription Details</div>
              <div className='sission-description'>
                <div className='sission-description-title'>
                  <label className='' forHtml="html">Session Title</label>
                  <input className='' type="text" id="html" name="" onChange={(e)=>{
                    e.target.value!="" ? document.querySelector(".Create_session").style.backgroundColor="green":
                    document.querySelector(".Create_session").style.backgroundColor="#707070"
                    setTitle(e.target.value);
                  }} placeholder='Remove one teeth'/>
                </div>

                <div className='sission-description-title'>
                  <label className='' forHtml="html">Description</label>
                  <input className='' type="text" id="html" name="" onChange={(e)=>setDescription(e.target.value)} placeholder='Lorem ipsum lorem ipsum lorem ipsum'/>
                </div>
              </div>
              <div className='Prescription_Details'>Medications</div>
              <div className='sission-description'>
                <div className='Medical_header'>
                <div className='div-1'>No.</div>
                <div className='div-2'>Name</div>
                <div className='div-3'>Type</div>
                <div className='div-4'>Num of cans</div>
                <div className='div-5'>Num of doses</div>
                <div className='div-6'>Dose description</div>
                </div>
                <hr/>
                <div className='Medical_body'>
                <div className='div-1'>1</div>
                <div className='div-2'>
                  <select cla>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="meat">Meat</option>
                  </select>
                </div>
                <div className='div-3'>
                  <select>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="meat">Meat</option>
                  </select>
                </div>
                
                <div className='div-4'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                <div className='div-5'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                <div className='div-6'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                </div>
                <div className='div-plus_Medical'>
                <Link className=' plus-Medical activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                        <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                      </Link>
                </div>
              </div>


              <div className='Prescription_Details'>Medical Analyses</div>
              <div className='sission-description'>
                <div className='Analyses_header'>
                <div className='div-1'>No.</div>
                <div className='div-2'>Name</div>
                <div className='div-3'>Description</div>
                </div>
                <hr/>
                <div className='Analyses_body'>
                <div className='div-1'>1</div>
                <div className='div-2'>
                  <select cla>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="meat">Meat</option>
                  </select>
                </div>
                
                <div className='div-3'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                </div>
                <div className='div-plus_Medical'>
                  <Link className=' plus-Medical activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                    <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                  </Link>
                </div>
              </div>

              <div className='Prescription_Details'>Invoice Details</div>
              <div className='sission-description'>
                <div className='Invoice_header'>
                <div className='div-1'>No.</div>
                <div className='div-2'>Title</div>
                <div className='div-3'>Item price</div>
                <div className='div-4'>Treatment price</div>
                <div className='div-5'>Treatment Description</div>
                </div>
                <hr/>
                <div className='Invoice_body'>
                <Link className='Invoic_false' to="#">
                  <div className="">
                    <img className='' src={Session_false} alt=''></img>
                  </div>
                </Link>
                <div className='div-1'>1</div>
                <div className='div-2'>
                <input className='' type="text" id="" name="" value="" placeholder=""/>
                </div>
                <div className='div-3'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                <div className='div-4'>
                <input className='' type="text" id="" name="" value="" placeholder={open.session_price}/>
                </div>
                <div className='div-5'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                </div>

                <div className='Invoice_body'>
                <div className='div-1'>2</div>
                <div className='div-2'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                <div className='div-3'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                <div className='div-4'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                <div className='div-5'>
                <input className='' type="text" id="" name="" value="" placeholder=''/>
                </div>
                </div>

                <div className='div-plus_Medical'>
                  <Link className=' plus-Medical activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                    <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                  </Link>
                </div>
                </div>
              
              <div className='Create_session' onClick={handleNewsession}>
                Create session
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavFooter/>

    </>
  )
}

export default New_Sission;