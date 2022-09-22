import './login.css'
import React, {useState,Component} from "react";
import {Link} from 'react-router-dom';
import phLogin from '../../images/Login.svg';
import eye from '../../images/eye.svg';
import eye_crossed from '../../images/eye-crossed.svg';
import phLogo from '../../images/Logo-gray.png';
import axios from "axios";
import {Navigate} from "react-router-dom";
// import {useState} from "react";
// import axios from 'axios';
// import swal from 'sweetalert';
const Login=()=>
{
    // state= {
    //     username:'',
    //     password:'',
    //     passwordInput:'',
    //     passwordType:'password',
    //     navigate: false,
    // }
    
    // render(){


      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [passwordInput, setPasswordInput] = useState('');
      const [passwordType, setPasswordType] = useState('password');
      const [navigateDoctor, setNavigateDoctor] = useState(false);
      const [navigateRes, setNavigateRes] = useState(false);
      const [navigateAdmin, setNavigateAdmin] = useState(false);
  
      // const submit = async e => {
      //     e.preventDefault();
  
      //     const {data}=await axios.post('login', {
      //       username, password
      //     });
      //     console.log({data}.data.data)
      //     axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
  
      //     setNavigate(true);
      // }
      // cosnt form =document.querySelector("from");
      const valueInput = document.querySelectorAll(".content input")
      // if(valueInput[0])
      // if(valueInput[0].value !=="" && valueInput[1].value !==""){
      //   const btnSignin=document.querySelector(".sign-in")
      //   if(btnSignin)
      //   btnSignin.style.backgroundColor={var(--on-)}
      // }
      const submit = async e => {
        e.preventDefault();

        // // axios.defaults.withCredentials = true;
        // const {data} = await axios.post('login', {
        //   username, password
        // });
        
        // axios.defaults.headers.common['Authorization'] = `Bearer ${{data}.data.data.accessToken}`;
        // console.log(axios.defaults.headers.common['Authorization'] )
        // if({data}.data.data.roles[0]==="Doctor"){
        //   setNavigateDoctor(true);
        // }
        // const valueInput = document.querySelectorAll(".content input")
        // setUsername("")
        // setPassword("")
        // // e.target.reset();
        // console.log(valueInput[0].value)
        // valueInput[1].value =""
    
    }
      if (navigateDoctor) {
          return <Navigate to="/Doctors"/>;
      }
      if (navigateRes) {
          return <Navigate to="/"/>;
      }
      if (navigateAdmin) {
          return <Navigate to="/"/>;
      }
      // const handlePasswordChange =(evnt)=>{
      //     this.setState({passwordInput :evnt.target.value});
      // }
      const btnSignin=document.querySelector(".sign-in")
      if(valueInput[0])
      if(valueInput[0].value !=="" && valueInput[1].value !==""){
        if(btnSignin)
        btnSignin.style.backgroundColor="#069AD3"
      }else{
        
        btnSignin.style.backgroundColor="#D9D9D9"
      }
    const togglePassword =(e)=>{
    e.preventDefault();
    if(passwordType==='password')
    {
      setPasswordType("text")
    return;
    }
      setPasswordType("password")
  }
  return(
    
      <div className="container-fluid main" >
          <div className="logo">
            <img src={phLogo} className="img-fluid m-5 " alt="Phone image"/>
          </div>
        <div className="row form-photo">
          {/* <div className='form-photo'> */}
          <div className="col-md-6   col-lg-7 photo">
            <img src={phLogin} className="img-fluid" alt="Phone image"/>
          </div>
          <div className="col-md-6 col-lg-5 pa-form">
            <form onSubmit={submit}>
              <div className='content'>
                
                  <h1 className=' text-center mb-0'>Welcome Back</h1>
                  <p className='text-center text-login'>Login to your account</p>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="username" >Username</label>
                  <input onChange={e =>setUsername(e.target.value)}
                  type="text" required id="username" className="form-control form-control-lg username" placeholder='Username' />
                  <span></span>
                  </div>
                <div>
                <div className='pass-forget'>
                  
                      <span></span>
                  <label className="form-label" htmlFor="password" >Password</label>
                  
                  <div className='input-pass'>
                    <input type={passwordType}onChange={e =>setPassword(e.target.value)}  name="password" className="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                      <button className="btneye" onClick={togglePassword}>
                        { passwordType==="password"? <img src={eye_crossed} className="eye" alt="Phone image"/> : <img src={eye} className="eye" alt="Phone image" style={{width:"20px"}}/>}
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="#!" className='fo-pass'>Forgot password?</Link>
                </div>
                {/* <div className='pa-sign-in'> */}
                <button type="submit" className="sign-in">Sign in</button>
                
              </div>
            </form>
            </div>
          </div>
        </div>
      // </div>
    );
  // }
}

export default Login;
