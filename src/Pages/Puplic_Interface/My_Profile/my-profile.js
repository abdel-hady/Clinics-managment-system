import React ,{Profiler, useEffect, useState}from 'react';
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
import Clock from './../../../images/clock.png'
import axios from 'axios';
// import { useNavigate } from "react-router-dom"

const My_Profile = () => {
  const [profile, setProfile]=useState('')
  const [profileDoctor, setProfileDoctor]=useState('')
  const [workingTimes, setWorkingTimes]=useState('')
  const [phoneNumber, setPhoneNumber]=useState('')
  const [editProfile, setEditProfile]=useState('')
  const handleClinic_DeppartmentClick=(e)=>{
    
    const links= document.querySelectorAll(".link-Clinic_Deppartment")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeClinic_Deppartment")
    })
    e.currentTarget.classList.add("activeClinic_Deppartment");
  }
  const workHour=document.querySelector('.work-hours');
     useEffect( ()=>{
      axios.get('profile').then(
        res=>{
          // console.log(res.data)
          setProfile(res.data.data)
        }
    ).catch(
      err=>{
        console.log(err)
      }
    )
      axios.get('profile/doctor').then(
        res=>{
          // console.log(res.data)
          setProfileDoctor(res.data.data)
        }
    ).catch(
      err=>{
        console.log(err)
      }
    )
    axios.post('employees/get-working-times').then(
      res=>{
       //  console.log(res.data.data)
        setWorkingTimes(res.data.data)
      }
  ).catch(
    err=>{
      console.log(err)
    }
  )
  axios.post('profile/edit-doctor').then(
    res=>{
     //  console.log(res.data.data)
      setEditProfile(res.data.data)
    }
).catch(
  err=>{
    console.log(err)
  }
)

    // if(workingTimes){
    //   // workingTimes.forEach(numberofdays)
    //   Object.keys(workingTimes).map(function(key, index,arr) {
    //     // if(arr[index])
    //     console.log( index);
    //     // console.log( arr.length);
    //     numberofdays(index)
    //     // console.log( workingTimes[key][index]);
    //   });
    // }
    },[])
    // function numberofdays(index){
    //   const day_number= document.createElement('div')
    //   const day_name= document.createElement('div')
    //   const day_times= document.createElement('div')
    //   const day_row= document.createElement('div')
    //   const day_from= document.createElement('div')
    //   const to= document.createElement('div')
    //   const day_to= document.createElement('div')
    //   const day_icon= document.createElement('div')
    //   const day_hour= document.createElement('div')
    //   const img_clock= document.createElement('img')
    //   // <img src={Clock} alt=""/>
    //   img_clock.setAttribute('src',Clock)
    //   img_clock.setAttribute('alt',"")
    //   day_icon.classList.add('day-icon')
    //   day_hour.classList.add('day-hour')
    //   day_number.classList.add(`day-${index}`)
    //   day_name.classList.add(`day-name`)
    //   day_times.classList.add(`day-times`)
    //   console.log(workingTimes)
    //   day_row.classList.add(`day-row`)
    //   day_from.classList.add(`day-from`)
    //   day_to.classList.add(`day-to`)
      
    //   day_icon.appendChild(img_clock)
    //   day_from.appendChild(day_icon)
    //   day_from.appendChild(day_hour)
    //   day_row.appendChild(day_from)
    //   day_row.appendChild(to)
    //   day_row.appendChild(day_to)
    //   day_times.appendChild(day_row)
    //   day_number.appendChild(day_name)
    //   day_number.appendChild(day_times)

    //   workHour.appendChild(day_number)

    // }
    const handleUpdateProfile=()=>{
      axios.post('phones/add',{
        phone : phoneNumber
       }).then(
         res=>{
           console.log(res)
           setWorkingTimes(res.data.data)
         }
     ).catch(
       err=>{
         console.log(err)
       }
     )
    // console.log(editProfile)
         axios.post('profile/edit-doctor',{
           email: editProfile
         }).then(
           res=>{
            //  console.log(res.data.data)
             setEditProfile(res.data.data)
           }
       ).catch(
         err=>{
           console.log(err)
         }
       )
    }
    // console.log(editProfile)
  return(
    <>
      <Sidebar/>
      <div className='main-doctor'>
        <NavDoctor Appointments="My profile"/>
        <div className='under-nav under-div-update-profile'>
          <div className='b-all-new-post update-profile-div'>
            <div className='chevron-title'>
              <div>
                <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="/appointments" onClick={handleClinic_DeppartmentClick}>
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
              <img className='main-photo-profile'  src={Doctor_gray} alt='' />
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
                  <div className='body-row-div-div'>22</div>
                </div>
              </div>
              </div>

            <div className='healthy-info'>Contact info</div>
            
            <div className='contact-info'>
              <div className='body-row-div-contact'>
                <span className='body-row-div-span mail'>Mail</span>
                {editProfile&&(
                  <input className='input-mail-my-profile' type="text" id="" name="" onChange={e=>
                    {
                      sessionStorage.setItem('email',e.target.value)
                      setEditProfile(e.target.value)
                    }
                    }placeholder={sessionStorage.getItem('email')}
                    />
                )}
                {!editProfile&&(
                  <input className='input-mail-my-profile' type="text" id="" name="" onChange={e=>setEditProfile(e.target.value)} placeholder={profile.email}/>
                )}
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
            <div className='work-info-body'>
              <div className='body-row'>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Years of Experience</span>
                  <div className='body-row-div-div'>{profileDoctor.previous_experience}</div>
                </div>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Session Duration</span>
                  <div className='body-row-div-div'>{profileDoctor.session_duration}</div>
                </div>
              </div>
              <div className='body-row'>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Salary Rate</span>
                  <div className='body-row-div-div'>{profileDoctor.salary_rate}</div>
                </div>
                <div className='body-row-div'>
                  <span className='body-row-div-span'>Salary</span>
                  <div className='body-row-div-div'>{profileDoctor.salary}</div>
                </div>
              </div>
              <div className='body-row'>
                <div className='body-row-div-final'>
                  <span className='body-row-div-span'>Clinic Name</span>
                  <div className='body-row-div-div'>{profileDoctor.clinic_name}</div>
                </div>
                
              </div>
            </div>
            <div className='healthy-info'>Certificates</div>
            <div className='Certificates'>
              <div className='Certificate'>
                  <h2>FIRST AMBOLANCE</h2>
                  <h4>Red Moon - United state</h4>
                  <div className='date-good'>
                    <div className='date-Certificate'>05/02/2005</div>
                    <div className='good-Certificate'>Very Good</div>
                  </div>
              </div>
              <div className='Certificate'>
                  <h2>FIRST AMBOLANCE</h2>
                  <h4>Red Moon - United state</h4>
                  <div className='date-good'>
                    <div className='date-Certificate'>05/02/2005</div>
                    <div className='good-Certificate'>Very Good</div>
                  </div>
              </div>
              <div className='Certificate'>
                  <h2>FIRST AMBOLANCE</h2>
                  <h4>Red Moon - United state</h4>
                  <div className='date-good'>
                    <div className='date-Certificate'>05/02/2005</div>
                    <div className='good-Certificate'>Very Good</div>
                  </div>
              </div>
              <div className='Certificate'>
                  <h2>FIRST AMBOLANCE</h2>
                  <h4>Red Moon - United state</h4>
                  <div className='date-good'>
                    <div className='date-Certificate'>05/02/2005</div>
                    <div className='good-Certificate'>Very Good</div>
                  </div>
              </div>

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

            )

            }
</div>


            <div className='div-update-profile'>
              <Link className='update-profile' onClick={handleUpdateProfile} to="" >Update Profile</Link>
            </div>
            </div>

          </div>
        </div>
      </div>
      <NavFooter/>

    </>
  )
}

export default My_Profile;