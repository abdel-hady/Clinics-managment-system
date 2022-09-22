import React, { useState, useEffect } from 'react';
import './table.css';
import Pagination from 'react-js-pagination'
import Show from '../../images/show.png';
import axios from 'axios';
import moment from 'moment';
import Popup_Chevron from './../../images/popupvhevron.png';
import {Link, useParams, Navigate} from "react-router-dom";
import ReactLoading from 'react-loading';
import Open_Session from './../../images/open session.png'
import plus_appoint from './../../images/plus_appoint.png'
import delete_appoint from './../../images/delete_appoint.png'

const Table = ({list, colNames,waiting,appointButton, width="auto", height= "auto"}) => {
  // console.log(list)
  // console.log(colNames)
const params = useParams();
const  [loading, setLoading]=useState(false)
const [list1, setList] = useState(list)
const [all_appointment, setAllappointment] = useState(false)
const [patient_list, setPatientlist] = useState(false)
const [activePage, setActivePage] = useState(1)
const [itemsCountPerPage, setItemsCountPerPage] = useState(1)
const [totalItemsCount, setTotalItemsCount] = useState(1)
const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3)
const [patient_appointment, setPatient_appointment] = useState(false)
const [patient_reports, setPatient_reports] = useState(false)
const [my_report, setMy_report] = useState(false)
const [notifactionDoctor, setNotifactionDoctor] = useState(false)
const [idnotification, setIdnotification] = useState(5)
const [patient_reception, setPatient_reception] = useState(false)
const [home, sethome] = useState(false)
useEffect(()=>{
    if(window.location.pathname ==='/appointments'){
      setAllappointment(true);
      setPatientlist(false);
      setPatient_appointment(false)
      setPatient_reports(false)
      setMy_report(false)
      setNotifactionDoctor(false)
      
    }
    if(window.location.pathname  === '/patients'){
      setAllappointment(false);
      setPatientlist(true);
      setPatient_appointment(false)
      setPatient_reports(false)
      setMy_report(false)
      setNotifactionDoctor(false)
    }

    if(window.location.pathname === `/patient_appointments/${params.id}`){
      setPatientlist(false);
      setAllappointment(false);
      setPatient_appointment(true)
      setPatient_reports(false)
      setMy_report(false)
      setNotifactionDoctor(false)
    }

    if(window.location.pathname === `/patient_reports/${params.id}`){
      setPatientlist(false);
      setAllappointment(false);
      setPatient_appointment(false)
      setPatient_reports(true)
      setMy_report(false)
      setNotifactionDoctor(false)
    }

    if(window.location.pathname === `/my-reports`){
      setPatientlist(false);
      setAllappointment(false);
      setPatient_appointment(false)
      setPatient_reports(false)
      setMy_report(true)
      setNotifactionDoctor(false)
    }

    if(window.location.pathname === `/notification`){
      setPatientlist(false);
      setAllappointment(false);
      setPatient_appointment(false)
      setPatient_reports(false)
      setMy_report(false)
      setNotifactionDoctor(true)
    }

    if(window.location.pathname === `/patients-reseption`){
      setPatientlist(false);
      setAllappointment(false);
      setPatient_appointment(false)
      setPatient_reports(false)
      setMy_report(false)
      setNotifactionDoctor(false)
      setPatient_reception(true)
    }
    if(window.location.pathname === `/home`){
      setPatientlist(false);
      setAllappointment(false);
      setPatient_appointment(false)
      setPatient_reports(false)
      setMy_report(false)
      setNotifactionDoctor(false)
      setPatient_reception(false)
      sethome(true)
    }

    const t=sessionStorage.getItem('accessToken');
    const config={
      headers:{
        Authorization: 'Bearer ' + t 
      }
    }
// axios.get("appointments/paginate/get-appointments-doctor",config).then(
//   res =>{
//     setList(res.data.data.data)
//     setItemsCountPerPage(res.data.data.per_page)
//     setTotalItemsCount(res.data.data.total)
//     setActivePage(res.data.data.current_page)
//   }
//   ).catch(
//     err =>{
//       console.log(err)
//     }
//   )
axios.get("patients/paginate/get-all",config).then(
  res =>{
    setList(res.data.data.data)
    setItemsCountPerPage(res.data.data.per_page)
    setTotalItemsCount(res.data.data.total)
    setActivePage(res.data.data.current_page)
  }
  ).catch(
    err =>{
      console.log(err)
    }
  )
    // console.log(document.querySelector(".plus_appoint").title)
},[])
const handleAppointToWaiting=()=>{
  const appointment_id=document.querySelector(".plus_appoint").title;
  axios.post("waitings/add-appointment-to-waitings",{
    appointment_id,
  }).then(
    res =>{
      // setList(res.data.data.data)
      // setItemsCountPerPage(res.data.data.per_page)
      // setTotalItemsCount(res.data.data.total)
      // setActivePage(res.data.data.current_page)
      console.log(res)
    }
    ).catch(
      err =>{
        console.log(err)
      }
    )
}
function handlePageChange(pageNumber){
  console.log(`active page is ${pageNumber}`)
  axios.get("appointments/paginate/get-appointments-doctor/?page=" + pageNumber).then(
    res =>{
      // setUsers(res.data.data.data)
      setList(res.data.data.data)
      setItemsCountPerPage(res.data.data.per_page)
      setTotalItemsCount(res.data.data.total)
      setActivePage(res.data.data.current_page)
      console.log(res.data.data.data)
    },err =>{
      console.log(err)
    }
  )
  axios.get("patients/paginate/get-all/?page=" + pageNumber).then(
    res =>{
      // setUsers(res.data.data.data)
      setList(res.data.data.data)
      setItemsCountPerPage(res.data.data.per_page)
      setTotalItemsCount(res.data.data.total)
      setActivePage(res.data.data.current_page)
      console.log(res.data.data.data)
    },err =>{
      console.log(err)
    }
  )
}
let [num, setNum]=useState(1)
  function handleIsreview(is_review){
    if(is_review){
      return <div className='square-appointment'>
            <div className='square-1'></div>
            <div>Review appointment</div>
            </div>
    }
    else{
      return <div className='square-appointment'>
              <div className='square-2'></div>
              <div>New appointment</div>
              </div>
    }
  }
  function handleStatue(statue){
    if(statue === "Canceled"){
    return  <div className='square-appointment'>
              <div className='canceled'>{statue}</div>
            </div>
    }else if(statue === "Pending"){
      return <div className='square-appointment'>
              <div className='Pending'>{statue}</div>
              {/* <div className='square-2'></div> */}
            </div>
    }else{
      return <div className='square-appointment'>
              <div className='Done'>{statue}</div>
            </div>
    }
  }
  const overlay= document.querySelector(".opacity")
  const clicko=()=>{
    function img_click(){
      overlay.classList.remove("overlay")
      document.querySelector(".div-popup").remove();
    }
    // clickDay= moment(clickDay).format("YYYY-MM-DD")
    axios.post("notifications/get-notification",{
      id : idnotification
    }).then(
      res =>{
        get_events_doctor(res.data.data)
      },err =>{
        console.log(err)
      }
    )
    function get_events_doctor(noti){
    const dat=noti
    const section = document.querySelector(".main-doctor")
    const div= document.createElement("div");
    const img_Chevron= document.createElement("img");
    const div_header= document.createElement("div");
    const div_body= document.createElement("div");
    const body_notification= document.createElement("div");
    const body_span= document.createElement("span");
    const body_content= document.createElement("div");
    
    img_Chevron.src= Popup_Chevron
    img_Chevron.onclick=img_click;
    img_Chevron.style.cursor="pointer"
    if(section)
    section.appendChild(div)
    div.appendChild(div_header)
    div.appendChild(div_body)
    
    div_header.innerHTML= 'notification content';
    div_header.appendChild(img_Chevron);
    
    if(dat !==null)
    div.classList.add("div-popup")
    div_header.classList.add("div_header")
    div_body.classList.add("div_body")
    body_span.classList.add('body_span')
    body_content.classList.add('body_content')
    body_notification.appendChild(body_span)
    body_notification.appendChild(body_content)
    body_span.innerHTML=`notification content:`
    body_content.innerHTML=`${noti.content}`
    div_body.appendChild(body_notification)
    overlay.classList.add("overlay");
}
}
  return(
      <>    
            {
              waiting&&(
              <table className='table-allAppoint'>
                  <thead>
                    <tr>
                      {
                        colNames.map((headerItem, index)=>(
                          <th key={index}>{headerItem}</th>
                          ))
                        }
                    </tr>
                  </thead>
                  <tbody>
                        {all_appointment &&list1.length >0
                            && (
                      Object.values(list1).map((obj, index)=>
                        {
                            return(
                              <tr key={index}>
                                <td className='cell-1'>
                                  <div>
                                    {obj.patient_name}{obj.nice}
                                  </div>
                                  <Link to={`/patient_information/${obj.id}`}>
                                    <img src={Show} title={obj.id} className="show-td" alt=""/>
                                  </Link>
                                </td>
                                <td >
                                  <div>{obj.date}</div>
                                  {obj.time}
                                </td>
                                <td >
                                  {handleIsreview(obj.is_review)}
                                </td>
                                <td >
                                  {handleStatue(obj.statue)}
                                </td>
                              </tr>
                            )
                          }
                          
                          )
                          )
                        }
                        {all_appointment &&list1.length ===0 &&(
                          <ReactLoading className='bubbles' type="bubbles" color="blue" height={'40%'} width={'40%'} />
                        )
                        }
                  </tbody>
              </table>
              )
            }
            {
              waiting === false&&(
                <table className='table-allAppoint'>
                <thead>
                  <tr>
                    {
                      colNames.map((headerItem, index)=>(
                        <th key={index}>{headerItem}</th>
                        ))
                      }
                  </tr>
                </thead>
                <tbody>
                      {all_appointment && list
                          && (
                        Object.values(list).map((obj, index)=>
                      {
                          return(
                            <tr key={index}>
                              <td className='cell-1'>
                                <div>
                                  {obj.patient_name}{obj.nice}
                                </div>
                                <Link to={`/patient_information/${obj.id}`}>
                                  <img src={Show} title={obj.id} className="show-td" alt=""/>
                                </Link>
                              </td>
                              <td >
                                <div>{obj.Age}</div>
                              </td>
                              <td >
                                {obj.phone_number}
                              </td>
                              <td >
                                <Link className='link-open-session' to ={`/new-sission/${obj.waiting_id}`}>
                                  <div className='div-open-session'> 
                                    <img src={Open_Session} title={obj.waiting_id} className="show-td" alt=""/>
                                    Open Session
                                  </div>
                                </Link>
                              </td>
                            </tr>
                          )
                        }
                        
                        )
                        )
                      }
                      
                </tbody>
            </table>
              )
            }
          {patient_appointment && list.length >0
              && (
            <table className='table-allAppoint'>
                <thead>
                  <tr>
                    {
                      colNames.map((headerItem, index)=>(
                        <th key={index}>{headerItem}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.values(list).map((obj, index)=>
                      {
                          return(
                            <tr key={index}>
                              <td className='cell-1'>
                                <div>
                                  {obj.patient_name}{obj.nice}
                                </div>
                                <Link to={`/patient_information/${obj.id}`}>
                                <img src={Show} title={obj.id} className="show-td" alt=""/>
                                </Link>
                              </td>
                              <td >
                                <div>{obj.date}</div>
                                {obj.time}
                              </td>
                              <td >
                                {handleIsreview(obj.is_review)}
                              </td>
                              <td >
                                {handleStatue(obj.statue)}
                              </td>
                            </tr>
                          )
                        }
                        
                        )
                      }
                      
                </tbody>
            </table>
            )
          }
          {patient_reports && (
            <table className='table-allAppoint'>
                <thead>
                  <tr>
                    {
                      colNames.map((headerItem, index)=>(
                        <th key={index}>{headerItem}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  { list.length >0&&(
                Object.values(list).map((obj, index)=>
                {
                    return(
                      <tr key={index}>
                        <td className='cell-1'>
                          <div>
                            {obj.patient_name}{obj.nice}
                          </div>
                          <Link to={`/patient_information/${obj.id}`}>
                                <img src={Show} title={obj.id} className="show-td" alt=""/>
                          </Link>                        </td>
                        <td >
                          <div>{obj.date}</div>
                          {obj.time}
                        </td>
                        <td >
                          {handleIsreview(obj.is_review)}
                        </td>
                        <td >
                          {handleStatue(obj.statue)}
                        </td>
                      </tr>
                    )
                  }
                  )
                        )
                      }
                      {list.length==0 &&(
                        Object.values(list).map((obj, index)=>
                        {
                            return(
                            <tr >
                              <td className='cell-1'>
                                <div>
                                  {obj.patient_name}{obj.nice}
                                </div>
                                <Link to={`/patient_information/${obj.id}`}>
                                <img src={Show} title={obj.id} className="show-td" alt=""/>
                                </Link>                              
                                </td>
                            </tr>
                          )
                        }
                      )
                    )
                  }
                </tbody>
              </table>
            )
          }
          {my_report 
              && (
            <table className='table-allAppoint'>
                <thead>
                  <tr>
                    {
                      colNames.map((headerItem, index)=>(
                        <th key={index}>{headerItem}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  { list.length >0 &&(
                    Object.values(list).map((obj, index)=>
                      {
                          return(
                            <tr key={index}>
                              <td className='cell-1'>
                                <div>
                                  {obj.patient_name}{obj.nice}
                                </div>
                                <Link to={`/patient_information/${obj.id}`}>
                                <img src={Show} title={obj.id} className="show-td" alt=""/>
                                </Link>                              
                                </td>
                              <td >
                                <div>{obj.date}</div>
                                {obj.time}
                              </td>
                              <td >
                                {handleIsreview(obj.is_review)}
                              </td>
                              <td >
                                {handleStatue(obj.statue)}
                              </td>
                            </tr>
                          )
                        }
                        
                        )
                  )
                  }
                  {
                           
                    !list.length &&(
                        <tr >
                        {list.message}
                        </tr>
                    )
                    
                  }
                      
                </tbody>
              </table>
            )
          }
          {patient_list && list.length >0
              && (
            <table className='table-allAppoint'>
                <thead>
                  <tr>
                    {
                      colNames.map((headerItem, index)=>(
                        <th key={index}>{headerItem}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.values(list).map((obj, index)=>
                      {
                          return(
                            <tr key={index}>
                              <td className='cell-1'>
                                <div>
                                  {obj.name}{obj.nice}
                                </div>
                                <Link to={`/patient_information/${obj.id}`}>
                                  <img src={Show} title={obj.id} className="show-td" alt=""/>
                                </Link>
                              </td>
                              <td >
                                <div>{obj.age}</div>
                                {obj.time}
                              </td>
                              <td >
                                {obj.phone_number}
                              </td>
                              <td >
                                {obj.appointments_count}
                              </td>
                            </tr>
                          )
                        }
                        
                        )
                  //     <TablePagination
                  //   rowsPerPageOptions={[10, 25, 100]}
                  //   component="div"
                  //   count={list.length}
                  //   rowsPerPage={rowsPerPage}
                  //   page={page}
                  //   onPageChange={handleChangePage}
                  //   onRowsPerPageChange={handleChangeRowsPerPage}
                  // />
                      }
                      
                    {/* <div className='flex bg-white rounded-lg font-[Poppins]'>
                        {
                          pages.map((pg,i)=>(
                            <button key={i}
                          ))
                        }
                    </div> */}
                </tbody>
                {/* <NavFooter/> */}
              </table>
            )
          }
          {notifactionDoctor && list.length >0
              && (
            <table className='table-allAppoint'>
                <thead>
                  <tr>
                    {
                      colNames.map((headerItem, index)=>(
                        <th key={index}>{headerItem}</th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.values(list).map((obj, index)=>
                      {
                          return(
                            <tr key={index}>
                              <td className='cell-1'>
                                <div>
                                  {obj.title}{obj.nice}
                                </div>
                                <Link to={`/patient_information/${obj.id}`}>
                                  <img src={Show} title={obj.id} className="show-td" alt=""/>
                                </Link>
                              </td>
                              <td >
                                <div>{obj.sender_name}</div>
                                
                              </td>
                              <td >
                                {obj.hours_ago}
                              </td>
                              <td >
                                <Link onClick={()=>{
                                  clicko()
                                  setIdnotification(obj.id);
                                }} className='link_open_session' to="">
                                  <div className='div_open_session'>
                                    Open Session
                                  </div>
                                </Link>
                              </td>
                            </tr>
                          )
                        }
                        
                        )
                  //     <TablePagination
                  //   rowsPerPageOptions={[10, 25, 100]}
                  //   component="div"
                  //   count={list.length}
                  //   rowsPerPage={rowsPerPage}
                  //   page={page}
                  //   onPageChange={handleChangePage}
                  //   onRowsPerPageChange={handleChangeRowsPerPage}
                  // />
                      }
                      
                    {/* <div className='flex bg-white rounded-lg font-[Poppins]'>
                        {
                          pages.map((pg,i)=>(
                            <button key={i}
                          ))
                        }
                    </div> */}
                </tbody>
                {/* <NavFooter/> */}
              </table>
            )
          }
          {
             appointButton &&(
              <table className='table-allAppoint'>
              <thead>
                <tr>
                  {
                    colNames.map((headerItem, index)=>(
                      <th key={index}>{headerItem}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  Object.values(list).map((obj, index)=>
                    {
                        return(
                          <tr key={index}>
                            <td className='cell-1'>
                              <div>
                                {obj.patient_name}
                              </div>
                              <Link to={`/patient_info_reception/${obj.id}`}>
                                <img src={Show} title={obj.id} className="show-td" alt=""/>
                              </Link>
                            </td>
                            <td >
                              <div>{obj.doctor_name}
                                {obj.clinic_name}</div>
                              
                            </td>
                            <td >
                              <div>{obj.date}</div>
                              {obj.time}
                              
                            </td>
                            <td >
                            {handleIsreview(obj.is_review)}
                              
                            </td>
                            <td>
                              <Link to="" className='link_open_session'>
                                {handleStatue(obj.statue)}
                                <img src={plus_appoint} onClick={handleAppointToWaiting} title={obj.appointment_id} className="show-td plus_appoint" alt=""/>
                                <img src={delete_appoint} title={obj.id} className="show-td delete_appoint" alt=""/>
                              </Link>
                              </td>
                          </tr>
                        )
                      }
                    )
                }
              </tbody>
              
            </table>
            )
          }
          {
             appointButton===false &&(
              <table className='table-allAppoint'>
              <thead>
                <tr>
                  {
                    colNames.map((headerItem, index)=>(
                      <th key={index}>{headerItem}</th>
                    ))
                  }
                </tr>
              </thead>
              {/* <tbody>
                {
                  Object.values(list).map((obj, index)=>
                    {
                        return(
                          <tr key={index}>
                            <td className='cell-1'>
                              <div>
                                {obj.patient_name}
                              </div>
                              <Link to={`/patient_info_reception/${obj.id}`}>
                                <img src={Show} title={obj.id} className="show-td" alt=""/>
                              </Link>
                            </td>
                            <td >
                              <div>{obj.doctor_name}
                                {obj.clinic_name}</div>
                              
                            </td>
                            <td >
                              <div>{obj.date}</div>
                              {obj.time}
                              
                            </td>
                            <td >
                            {handleIsreview(obj.is_review)}
                              
                            </td>
                            <td>
                              <Link to="" className='link_open_session'>
                                {handleStatue(obj.statue)}
                                <img src={plus_appoint} onClick={handleAppointToWaiting} title={obj.appointment_id} className="show-td plus_appoint" alt=""/>
                                <img src={delete_appoint} title={obj.id} className="show-td delete_appoint" alt=""/>
                              </Link>
                              </td>
                          </tr>
                        )
                      }
                    )
                }
              </tbody> */}
              
            </table>
            )
          }
          {/* {typeof( list1)=="string"&&(
            <table className='table-allAppoint'>
            <thead>
            <tr>
              {
                colNames.map((headerItem, index)=>(
                  <th key={index}>{headerItem}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            <td colspan="5">{list1}</td>
          </tbody>
        </table>
          )} */}
          {
            patient_reception &&(
              <table className='table-allAppoint'>
              <thead>
                <tr>
                  {
                    colNames.map((headerItem, index)=>(
                      <th key={index}>{headerItem}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  Object.values(list1).map((obj, index)=>
                    {
                        return(
                          <tr key={index}>
                            <td className='cell-1'>
                              <div>
                                {obj.name}{obj.nice}
                              </div>
                              <Link to={`/patient_info_reception/${obj.id}`}>
                                <img src={Show} title={obj.id} className="show-td" alt=""/>
                              </Link>
                            </td>
                            <td >
                              <div>{obj.age}</div>
                            </td>
                            <td >
                              {obj.phone_number}
                            </td>
                            <td >
                              <Link to="/add_appointment_reception" className='link_open_session'>
                                <div className='div_open_session'>
                                  Add Appointment
                                </div>
                              </Link>
                            </td>
                          </tr>
                        )
                      }
                    )
                }
              </tbody>
              {/* <NavFooter/> */}
            </table>
            )
          }
          <div className='d-flex justify-content-center'>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={itemsCountPerPage}
            totalItemsCount={totalItemsCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={handlePageChange}
            itemClass='page-item'
            linkClass='page-link'
            // firstPageText={firstPageText}
          />
          </div>
      </>
    )
}
export default Table;