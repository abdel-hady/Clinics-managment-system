import React, { useState ,useLayoutEffect} from 'react'
import {BrowserRouter as Router, Switch,Routes, Route, Navigate } from 'react-router-dom'
import './components/login/login.css';
import ForgetPass from './components/ForgetPass/forgetPass';
import ForgetPass1 from './components/ForgetPass1/forgetPass1';
import ForgetPass2 from './components/ForgetPass2/forgetPass2';
import Header from './Pages/Puplic_Interface/Header/header'
import Navbar from './components/Navbar/navo';
import './App.css';
import Login from './Pages/Puplic_Interface/login/login';
import My_Profile from './Pages/Puplic_Interface/My_Profile/my-profile';
import Clinics from './components/Clinics/clinics';
import Doctors from './components/Doctors/doctors';
import Sidebar from './components/Sidebar/sidebar';
import Appointments from './Pages/Doctor/Appointments/Appointments';
import New_Sission from './Pages/Doctor/Appointments/New_Sission/new-sission';
import Patients from './Pages/Doctor/Patients/patient';
import My_Reports from './Pages/Doctor/My_Reports/my-reports';
import Patient_Information from './Pages/Doctor/Patients/Patient_information/patient-information';
import Patient_Appointments from './Pages/Doctor/Patients/Patient_appointments/patient-appointments';
import Patient_Reports from './Pages/Doctor/Patients/Patient_reports/paitent-reports';
import Patient_Report from './Pages/Doctor/Patients/Patient_report/patient-report';
import Blog from './Pages/Doctor/Blog/blog';
import MY_Post from './Pages/Doctor/Blog/my-post';
import New_Post from './Pages/Doctor/Blog/new-post';
import Notification from './Pages/Doctor/Notifications/notifications';
import Clinic_Deppartment from './Pages/Doctor/Blog/Clinic_Deppartment/clinic_Deppartment';
import Post from './Pages/Doctor/Blog/Clinic_Deppartment/Post/post';
// RECEPTION
import Home from './Pages/Reception/Home-Page/home';
import Patients_reseption from './Pages/Reception/Patients/patient';
import Patient_Information_reception from './Pages/Reception/Patients/Patient_information/patient-information';
import Patient_Appointments_reception from './Pages/Reception/Patients/Patient_appointment/patient-appointment';
import Patient_report_reception from './Pages/Reception/Patients/Patient_report/patient-report';
import Add_patient_reception from './Pages/Reception/Patients/Add_patient/add-patient';
import Patient_account_reception from './Pages/Reception/Patients/Patient_account/patient-account';
import Add_appointment_reception from './Pages/Reception/Patients/Add_appointment/add-appointment';
import Notification_reception from './Pages/Reception/Notification/notification';
import My_Profile_reception from './Pages/Reception/My_profile/my-profile';
import Malfunctions_reception from './Pages/Reception/Malfunctions/malfunctions';

import axios from "axios";



function App() {
  const [user,setUser]=useState(false)
  axios.defaults.baseURL = 'http://localhost:8000/api/';
  // useLayoutEffect(() => {
    //check local token or something
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('accessToken');
    // console.log(sessionStorage.getItem('accessToken'))
// }, []);
  return (
    <Router>
      <Routes>
        {/* {
          !user&&(
            <> */}
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/" element={<Header/>} />
            {/* </>
          )
        }*/}
      {/* {sessionStorage.getItem('accessToken') &&(
        <> */}
        <Route path="/forgetPass1" element={<ForgetPass/>} />
        <Route path="/forgetPass2" element={<ForgetPass1/>} />
        <Route path="/forgetPass3" element={<ForgetPass2/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/clinics" element={<Clinics/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/my-profile" element={<My_Profile/>} />
        <Route path="/appointments" element={<Appointments/>} />
        <Route path="/new-sission/:id" element={<New_Sission/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/patients" element={<Patients/>} /> 
        <Route path="/patient_information/:id" element={<Patient_Information/>} /> 
        <Route path="/patient_appointments/:id" element={<Patient_Appointments/>} /> 
        <Route path="/patient_reports/:id" element={<Patient_Reports/>} /> 
        <Route path="/patient_report" element={<Patient_Report/>} /> 
        <Route path="/blog" element={<Blog/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/my-reports" element={<My_Reports/>} />
        <Route path="/clinic_deppartment" element={<Clinic_Deppartment/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/my-post" element={<MY_Post/>} />
        <Route path="/new-post" element={<New_Post/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/patients-reseption" element={<Patients_reseption/>} />
        <Route path="/patient_info_reception/:id" element={<Patient_Information_reception/>} />
        <Route path="/patient_appointments_reception/:id" element={<Patient_Appointments_reception/>} />
        <Route path="/patient_report_reception/:id" element={<Patient_report_reception/>} />
        <Route path="/add_patient_reception" element={<Add_patient_reception/>} />
        <Route path="/patient_account_reception/:id" element={<Patient_account_reception/>} />
        <Route path="/add_appointment_reception" element={<Add_appointment_reception/>} />
        <Route path="/notification_reception" element={<Notification_reception/>} />
        <Route path="/my_Profile_reception" element={<My_Profile_reception/>} />
        <Route path="/malfunctions_reception" element={<Malfunctions_reception/>} />
        {/* </>
      )
    } */}
      {/* { setTimeout(()=>{
        !sessionStorage.getItem('accessToken') &&(
          <Route
          path="*"
          element={<Navigate to={'/'} />}/>
        )
      },1000)
      } */}
        </Routes>
    </Router>   
    
  );
}

export default App;