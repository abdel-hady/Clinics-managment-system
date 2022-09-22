import './login.css'
import React, {useState,Component} from "react";
import {Link} from 'react-router-dom';
import phLogin from '../../../images/Login.svg';
import eye from '../../../images/eye.svg';
import eye_crossed from '../../../images/eye-crossed.svg';
import phLogo from '../../../images/Logo-gray.png';
import axios from "axios";
import {Navigate} from "react-router-dom";

const Login=()=>{
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [passwordInput, setPasswordInput] = useState('');
      const [passwordType, setPasswordType] = useState('password');
      const [navigateDoctor, setNavigateDoctor] = useState(false);
      const [navigateRes, setNavigateRes] = useState(false);
      const [navigateAdmin, setNavigateAdmin] = useState(false);
      const [error, setError] = useState(false);
      const valueInput = document.querySelectorAll(".content input")
      const submit = async e => {
        e.preventDefault();
        await axios.post('login', {
          username,
          password
        }).then(res =>{
          sessionStorage.setItem('accessToken', res.data.data.accessToken)
          sessionStorage.setItem('name', res.data.data.name)
          sessionStorage.setItem('username', res.data.data.username)
          sessionStorage.setItem('roles', res.data.data.roles)
        }
        ).catch(err =>{
          setError( err.response.data.message) 
        })
        if(sessionStorage.getItem("roles")==="Doctor"){
          setNavigateRes(false)
          setNavigateDoctor(true);
        }
        if(sessionStorage.getItem("roles")==="Reception"){
          setNavigateRes(true)
          setNavigateDoctor(false);
        }
    }
      if (navigateDoctor) {
          return <Navigate to="/appointments"/>;
      }
      if (navigateRes) {
          return <Navigate to="/home"/>;
      }
      if (navigateAdmin) {
          return <Navigate to="/"/>;
      }
      const btnSignin=document.querySelector(".sign-in")
      if(valueInput[0])
      if(valueInput[0].value !=="" && valueInput[1].value !==""){
        if(btnSignin)
        btnSignin.style.backgroundColor="#069AD3"
      }else{
        if(btnSignin)
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
                  {error&&(
                    <span className="errors">{error}</span>
                  )}
                  {!error&&(
                    <span className="errors"></span>
                  )}
                  <label className="form-label" htmlFor="password" >Password</label>
                  <div className='input-pass'>
                    <input type={passwordType} required onChange={e =>setPassword(e.target.value)}  name="password" className="form-control" placeholder="Password" />
                    <div className="input-group-btn">
                      <button className="btneye" onClick={togglePassword}>
                        { passwordType==="password"? <img src={eye_crossed} className="eye" alt="Phone image"/> : <img src={eye} className="eye" alt="Phone image" style={{width:"20px"}}/>}
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/forgetPass1" className='fo-pass'>Forgot password?</Link>
                </div>
                {/* <div className='pa-sign-in'> */}
                <button type="submit" className="sign-in">Sign in</button>
              </div>
            </form>
            </div>
          </div>
        </div>
    );
}

export default Login;
