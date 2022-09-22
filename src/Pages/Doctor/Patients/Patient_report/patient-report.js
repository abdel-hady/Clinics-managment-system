import React ,{useState}from 'react';
import './patient-report.css';
import { Link } from 'react-router-dom';
import {App} from './../../../../components/App';
import Table from './../../../../components/Table/table';
import Show from './../../../../images/show.png';
import Sidebar from '../../../../components/Sidebar/sidebar'
import NavDoctor from './../../../../components/NavDoctor/navDoctor';
import Doubi from './../../../../images/Doubi.jpg'
import Heart_Like from './../../../../images/heart-like.png'
import {NavFooter} from './../../../../components/NavDoctor/navDoctor'
import Logo_transparent from './../../../../images/Logo-transparent.png'
import Message from './../../../../images/message.png'
import Print_Report from './../../../../images/print-report.png'
import { maxWidth } from '@mui/system';
// import { useNavigate } from "react-router-dom"


const Patient_Report = () => {
  const handleClinic_DeppartmentClick=(e)=>{
    
    const links= document.querySelectorAll(".link-Clinic_Deppartment")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeClinic_Deppartment")
    })
    e.currentTarget.classList.add("activeClinic_Deppartment");
    }

  return(
    <>
      <Sidebar/>
      <div className='main-doctor'>
        <NavDoctor Appointments="Reports / Patient report"/>
        <div className='under-nav'>
          <div className='b-all-new-post'>
            <div className='chevron-title'>
              <div>
                <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                  <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                </Link>
              </div>
              <div className='title-nav'>
              Patient Report
              </div>
            </div>
            <div className='message-print'>
              <Link className='message activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                {/* <box-icon style={{"fontSize" : "40px","fill":"rgb(1, 55, 154)"}} name='check' ></box-icon> */}
                <img src={Message} alt=""/>
              </Link>
              <Link className='print-report activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                {/* <box-icon style={{"fontSize" : "40px","fill":"rgb(1, 55, 154)"}} name='check' ></box-icon> */}
                <img src={Print_Report} alt=""/>
              </Link>
            </div>
          </div>
          <div className='info-new-sission'>
            <div className='session-number'>
              <div className='session-type'>
                <div className='label-type-session'>Session Type</div>
                <div className='review-new-session'>
                  <div></div>
                  Review Session
                </div>
              </div>
              <div>#75</div>
            </div>
            <div className='header-new-sission'>
              <div className='header-left-right'>
              <div className='header-left'>
                <div className='info-name-data'>
                  <div className='info-name'>Patient Name</div>
                  <div className='info-data'>abdelhady</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Contact Nubmer</div>
                  <div className='info-data'>099810089</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Gender</div>
                  <div className='info-data'>male</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Age</div>
                  <div className='info-data'>22</div>
                </div>
              </div>
              <div className='header-right'>
                <div className='info-name-data'>
                  <div className='info-name'>Appointment Date</div>
                  <div className='info-data'>Thursday 2022-07-15</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Appointment Time</div>
                  <div className='info-data'>04:45 PM</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Doctor Name</div>
                  <div className='info-data'>abdelhady alrajab</div>
                </div>
                <div className='info-name-data'>
                  <div className='info-name'>Clinic Name</div>
                  <div className='info-data'>Teeth clinic</div>
                </div>
              </div>
              </div>
              <div className='Prescription_Details'>Prescription Details</div>
              <div className='sission-description'>
                <div className='sission-description-title'>
                  <label className='' forHtml="html">Session Title</label>
                  {/* <input className='' type="text" id="html" name="" value="" placeholder='Remove one teeth'/> */}
                  <div className='session-title'>one teeth</div>
                </div>

                <div className='sission-description-title'>
                  <label className='' forHtml="html">Description</label>
                  {/* <input className='' type="text" id="html" name="" value="" placeholder='Lorem ipsum lorem ipsum lorem ipsum'/> */}
                  <div className='details-description'>Lorem ipsum lorem ipsum lorem ipsum</div>
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
                <div className='div-2 div-number'> </div>
                <div className='div-3 div-number'> </div>
                <div className='div-4 div-number'> </div>
                <div className='div-5 div-number'> </div>
                <div className='div-6 div-number'> </div>

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
                <div className='div-2'></div>
                <div className='div-3'></div>
                </div>
              </div>

              <div className='Prescription_Details'>Invoice Details</div>
              <div className='sission-description final-patient-report'>
                <div className='Invoice_header'>
                <div className='div-1'>No.</div>
                <div className='div-2'>Title</div>
                <div className='div-3'>Item price</div>
                <div className='div-4'>Treatment price</div>
                <div className='div-5'>Treatment Description</div>
                </div>
                <hr/>
                <div className='Invoice_body'>
                <div className='div-1'>1</div>
                <div className='div-2'></div>
                <div className='div-3'></div>
                <div className='div-4'></div>
                <div className='div-5'></div>
                </div>

                <div className='Invoice_body'>
                <div className='div-1'>2</div>
                <div className='div-2'></div>
                <div className='div-3'></div>
                <div className='div-4'></div>
                <div className='div-5'></div>
                </div>
                <div className='price-payment'>
                  <div className='price-answear'>
                    <div className='price'>Total price:</div>
                    <div className='answear'>6000 s.p</div>
                  </div>
                  <div className='payment-answear'>
                    <div className='payment'>Payment Status: </div>
                    <div className='answear'> Unpaid</div>
                  </div>
                </div>
                <div className='img-transparent'>
                  <img className='' src={Logo_transparent} alt=""/>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <NavFooter/>
    </>
  )
}

export default Patient_Report;