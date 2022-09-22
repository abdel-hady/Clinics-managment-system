import '../../variable/variable.css';
import { Link, useNavigate } from 'react-router-dom';
import forget from "../../images/Forgot.png";
import './forgetPass2.css';
import React, {useState,Component} from "react";
import phLogo from '../../images/Logo-gray.png';
import eye_crossed from '../../images/eye-crossed.svg';
import eye from '../../images/eye.svg';
import swal from 'sweetalert';
import axios from "axios";
// import logo from "../../images/Logo.png";
// import logoScroll from "../../images/LogoScroll.png";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCoffee,faBars, faL, faLinesLeaning} from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import swal from 'sweetalert';

function ForgetPass2()
{
//   const handlePasswordChange =(evnt)=>{
//       this.setState({passwordInput :evnt.target.value});
//   }
const navigate = useNavigate();
// const [input, setInput] = useState({
//     password: '',
//     confirmPassword: '',
//     passwordType:'password',
// });
const [password, setPassword]=useState('')
const [password_confirmation, setPassword_confirmation]=useState('')
const [passwordType, setPasswordType]=useState('password')
  const togglePassword =(e)=>{
    e.preventDefault();
    if(passwordType==="password")
    {
      setPasswordType("text")
    return;
    }
    setPasswordType("password")
  }
    const [error, setError] = useState({
    password: '',
    password_confirmation: '',
    passwordType:'password',
    })
    
    const onInputChange = e => {
    const { name, value } = e.target;
    // setInput(prev => ({
    //     ...prev,
    //     [name]: value
    // }));
    validateInput(e);
    }
    const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
        const stateObj = { ...prev, [name]: "" };
    
        switch (name) {
        case "password":
            if (!value) {
            stateObj[name] = "Please enter Password.";
            } else if (password_confirmation && value !== password_confirmation) {
            stateObj["password_confirmation"] = "Password and Confirm Password does not match.";
            } else {
            stateObj["password_confirmation"] = password_confirmation ? "" : error.password_confirmation;
            }
            break;
        case "password_confirmation":
            if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
            } else if (password && value !== password) {
            stateObj[name] = "Password and Confirm Password does not match.";
            }
            break;
        default:
            break;
        }
        return stateObj;
    });
    }
    const [loading, setLoading] = useState('');
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [token, setToken] = useState(localStorage.getItem("code"))
    const submitCode = async e => {
      e.preventDefault();
      setEmail(localStorage.getItem("email"))
      setToken(localStorage.getItem("token"))
      // setLoading("abdel");
      console.log(email)
      console.log(token)
      console.log(password)
      console.log(password_confirmation)
      axios.post('reset-password', {
          email,
          token,
          password,
          password_confirmation
      }).then(response =>{
      swal({
      title: "Success!",
      text: response.data.data,
      icon: "success",
      button: "OK",
      });
      navigate("/login")
      // console.log(response )
      //   navigate("/login")
      }
      ).catch(err =>{
      setLoading("");
      console.log(err)
      setError(err.response.data.message.email[0])
      })
  }
  return(
    <div className="container-fluid main" >
        <div className="logo">
            <img src={phLogo} className="img-fluid m-5 " alt="Phone image"/>
        </div>
        <div className="row form-photo">
            <div className="col-md-6   col-lg-7 photo">
                <img src={forget} className="img-fluid" alt="Phone image"/>
            </div>
            <div className="col-md-6 col-lg-5 pa-form">
                <form onSubmit={submitCode}>
                    <div className='content'>
                        <h1 className=' text-center mb-0'>Reset password</h1>
                        <p className='text-center text-reset'>Type your new password</p>
                        <div className=''>
                            <div className='pass-forget'>  
                                    <div className="form-outline label-input-span">
                                      {error.password && <span className='err'>{error.password}</span>}
                                      <label className="form-label " htmlFor="newPassword" >New Password</label>
                                      <div className='input-pass'>
                                        <input
                                        className='form-control newPassword'
                                        id="newPassword"
                                        type={passwordType}
                                        name="password"
                                        placeholder='New Password'
                                        onChange={e =>setPassword(e.target.value)}
                                        // value={input.password}
                                        // onChange={onInputChange}
                                        onBlur={validateInput}></input>
                                        <div className="input-group-btn">
                                            <button className="btneye" onClick={togglePassword}>
                                                { passwordType==="password"? <img src={eye_crossed} className="eye" alt="Phone image"/> : <img src={eye} className="eye" alt="Phone image" style={{width:"20px"}}/>}
                                            </button>
                                        </div>
                                      </div>
                                    </div>
                      </div>
                  </div>
                <div>
                  <div className='pass-forget'>
                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                    <label className="form-label " htmlFor="confirmPassword" >Confirm Password</label>
                    <div className='input-pass'>
                      <input
                      className="form-control form-control-lg confirmPassword"
                      id='confirmPassword'
                      type={passwordType}
                      name="confirmPassword"
                      placeholder='Confirm Password'
                      onChange={e =>setPassword_confirmation(e.target.value)}
                      onBlur={validateInput}></input>
                      <div className="input-group-btn">
                        <button className="btneye" onClick={togglePassword}>
                            { passwordType==="password"? <img src={eye_crossed} className="eye" alt="Phone image"/> : <img src={eye} className="eye" alt="Phone image" style={{width:"20px"}}/>}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              <button type="submit" className="send-code">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass2;
