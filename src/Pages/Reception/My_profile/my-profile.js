import React ,{useEffect, useState}from 'react';
import './my-profile.css';
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
import Clock from './../../../images/clock.png';
import Reseption from './../../../images/Reception icon.png';
import axios from 'axios';
import { set } from 'date-fns';
// import { useNavigate } from "react-router-dom"


const My_Profile_reception = () => {
  const [profile, setProfile]=useState('')
  const [profileDoctor, setProfileDoctor]=useState('')
  const [workingTimes, setWorkingTimes]=useState('')
  const [phoneNumber, setPhoneNumber]=useState('')
  // const [editProfile, setEditProfile]=useState('')
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
    const [nocertificate, setNocertificate]= useState('');
    const [certifiacte, setCertifiacte]= useState('');
    const [errorWorking, setErrorWorking]= useState('');
    useEffect(()=>{
      setHome("Home");
      setAttendance("Attendance");
      axios.get('profile').then(
        res=>{
          setProfile(res.data.data)
        }
    ).catch(
      err=>{
        console.log(err)
      }
    )
      axios.get('profile/reception').then(
        res=>{
          setProfileDoctor(res.data.data)
        }
    ).catch(
      err=>{
        console.log(err)
      }
    )
      axios.post('certificates/get-all').then(
        res=>{
          setNocertificate(res.data.message)
          setCertifiacte(res.data.data)
        }
    ).catch(
      err=>{
        console.log(err.response.data.message)
      }
    )
    axios.post('employees/get-working-times').then(
      res=>{
        setWorkingTimes(res.data.data)
      }
  ).catch(
    err=>{
      setErrorWorking(err.response.data.message)
    }
  )
    },[])
  return(
    <>
      <Sidebar home={home} icon={Reseption} attendance={attendance}/>
      <div className='main-doctor'>
        <NavDoctor Appointments="My profile"/>
        <div className='under-nav under-div-update-profile'>
          <div className='b-all-new-post update-profile-div'>
            <div className='chevron-title'>
              <div>
                <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                  <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                </Link>
              </div>
              <div className='title-nav'>
              Edit My Profile
              </div>
            </div>
            <div>
              <Link className='check activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                <box-icon style={{"fontSize" : "40px","fill":"rgb(1, 55, 154)"}} name='check' ></box-icon>
              </Link>
            </div>
          </div>
          <div className='my-profile'>
            <div className='div-photo-my-profile'>
              <img className='main-photo-profile'  src={Reseption} alt='' />
            </div>
            <div className='body-my-profile'>
            <div className='general-info'>General info</div>
            <div className='general-info-body'>
              <div className='body-row'>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>First Name</span>
                  <div className='body-row-div-div'>{profile.first_name}</div>
                </div>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Father Name</span>
                  <div className='body-row-div-div'>{profile.father_name}</div>
                </div>
              </div>
              <div className='body-row'>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Last Name</span>
                  <div className='body-row-div-div'>{profile.last_name}</div>
                </div>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Gender</span>
                  <div className='body-row-div-div'>{profile.gender}</div>
                </div>
              </div>
              <div className='body-row'>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Birth Date</span>
                  <div className='body-row-div-div'>{profile.birth_date}</div>
                </div>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Age</span>
                  <div className='body-row-div-div'>{profile.age}</div>
                </div>
              </div>
              </div>
            <div className='healthy-info'>Contact info</div>
            
            <div className='contact-info'>
              <div className='body-row-div-contact'>
                {/* <span className='body-row-div-span mail'>Mail</span> */}
                <div className='body-row'>
                <div className='body-div-email'>
                  <span className='body-row-div-span'>Mail</span>
                  <div className='body-row-div-div'>{profile.email}</div>
                </div>
                </div>
                  {/* <div className='input-mail-my-profile'>{profile.email}</div> */}
              </div>
              <div className='body-row-div-contact'>
                <span className='body-row-div-span contact-number'>Contact number</span>
                {profile.phones &&(
                  Object.keys(Object.values(profile.phones)).map((key, index,arr)=> {
                    // console.log(profile.phones[index].phone_number)
                    return(
                <div className='plus-input-false-contact'>
                <div className='div-plus_contact'>
                <Link className=' plus-contact activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                        <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                      </Link>
                </div>
                {
                  profile&&(
                    <input className='input-number-my-profile' type="text" id="" name="" onChange={e=> setPhoneNumber(e.target.value)} placeholder={profile.phones[index].phone_number}/>
                  )
                }
                {
                  !profile&&(
                    <input className='input-number-my-profile' type="text" id="" name="" onChange={e=> setPhoneNumber(e.target.value)}  placeholder='0998100589'/>
                  )
                }
                <Link className='contact_false' to="#">
                  <div className="">
                    <img className='' src={Contact_false} alt=''></img>
                  </div>
                </Link>
                </div>
                    )})
                )
              }
              </div>
            </div>
            <div className='healthy-info'>Work info</div>
            {
              profileDoctor&&(
            <div className='work-info-body'>
              <div className='body-row'>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Years of Experience</span>
                  <div className='body-row-div-div'>{profileDoctor.previous_experience}</div>
                </div>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Salary</span>
                  <div className='body-row-div-div'>{profileDoctor.salary}</div>
                </div>
              </div>
            </div>
              )
            }
            <div className='healthy-info'>Certificates</div>
            <div className='Certificates'>
              {/* {certifiacte &&(
                certifiacte.map((obj, index,arr)=>{
                // console.log(obj)
                // <div key={index}>jlkdjfdl</div>
              <div className='Certificate'>
                  <h2>{obj.certificate_name}</h2>
                  <h4>{obj.certificate_source}</h4>
                  <div className='date-good'>
                    <div className='date-Certificate'>{obj.certificate_date}</div>
                    <div className='good-Certificate'>{obj.certificate_rating}</div>
                  </div>
              </div>
                })
              )} */}
              {certifiacte&&(
                      certifiacte.map((item, index) => (
                        
                        // <option key={index} value={item.id}>
                        //   {item.title}
                        // </option>
                      <div className='Certificate'>
                        <h2>{item.certificate_name}</h2>
                        <h4>{item.certificate_source}</h4>
                        <div className='date-good'>
                          <div className='date-Certificate'>{item.certificate_date}</div>
                          <div className='good-Certificate'>{item.certificate_rating}</div>
                        </div>
                      </div>
                      ))
                    )}
              {/* {!certifiacte&&(
                <div className='empty'>{nocertificate}</div>
              )} */}
            </div>
            <div className='healthy-info'>Working Hours</div>
            <div className='work-hours'>
              { workingTimes&&(                
                Object.keys(workingTimes).map((key, index,arr)=> 
                { 
                  return(
                  <div className='day-1'>
                    <div className='day-name'>{arr[index]}</div>
                    <div className='day-times'>
                      {
                      Object.keys(Object.values( workingTimes)[index]).map((key, index,arr)=> {
                        return(

                      <div className='day-row'>
                        <div className='day-from'>
                          <div className='day-icon'>
                            <img src={Clock} alt=""/>
                          </div>
                          <div className='day-hour'>{Object.values( workingTimes)[index][index].start}</div>
                        </div>
                        <div>to</div>
                        <div className='day-to'>
                          <div className='day-icon'>
                            <img src={Clock} alt=""/>
                          </div>
                          <div className='day-hour'>{Object.values( workingTimes)[index][index].end}</div>
                        </div>
                      </div>
                        )
                      }
                      )
                      }
                      {/* console.log(Object.values( workingTimes)[index])
                       <div className='day-row'>
                        <div className='day-from'>
                          <div className='day-icon'>
                            <img src={Clock} alt=""/>
                          </div>
                          <div className='day-hour'>3:00 PM</div>
                        </div>
                        <div>to</div>
                        <div className='day-to'>
                          <div className='day-icon'>
                            <img src={Clock} alt=""/>
                          </div>
                          <div className='day-hour'>3:00 PM</div>
                        </div>
                      </div> */}
                      <div></div>
                    </div>
                  </div>
                )
                })
              )}
              {errorWorking &&(
                <div className='empty-inside'>{errorWorking}</div>
              )}
            </div>
            </div>

          </div>
        </div>
      </div>
      <NavFooter/>

    </>
  )
}

export default My_Profile_reception;