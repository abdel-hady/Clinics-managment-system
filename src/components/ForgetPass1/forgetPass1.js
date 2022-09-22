import '../../variable/variable.css';
import { Link, useNavigate } from 'react-router-dom';
import forget from "../../images/Forgot.png";
import './forgetPass1.css';
import React, {useState,Component} from "react";
import phLogo from '../../images/Logo-gray.png';
import swal from 'sweetalert';
import axios from "axios";
// import eye from '../../images/eye.svg'
// import eye_crossed from './eye-crossed.svg'
// import logo from "../../images/Logo.png";
// import logoScroll from "../../images/LogoScroll.png";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCoffee,faBars, faL, faLinesLeaning} from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import swal from 'sweetalert';

const ForgetPass1=()=>
{
    const navigate = useNavigate();
    const [token, setToken]=useState('')
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState(localStorage.getItem("email"))
    // if(localStorage.getItem("email"))
    // setEmail(localStorage.getItem("email"))
    const submitCode = async e => {
        e.preventDefault();
        setLoading("abdel");
        console.log(email)
        axios.post('check-reset-password-code', {
            email,
            token
        }).then(response =>{
            localStorage.setItem("code",token)
        swal({
        title: "Success!",
        text: response.data.data,
        icon: "success",
        button: "OK",
        });
        navigate("/forgetPass3")
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
                                <p className='text-center text-reset'>Type your code to send the code</p>
                                
                                    <div className='perant'>
                                        <div className='code-send'>
                                            <div className="form-outline label-input-span">
                                                <label className="form-label " htmlFor="code" >code</label>
                                                <input onChange={e =>{
                                                setToken(e.target.value)
                                                setError("")
                                            }}
                                                type="text"  id="code" className="form-control form-control-lg code" placeholder='Code' />
                                                {!error &&(
                                                <span></span>
                                            )}
                                            {error &&(
                                                <span className='errors'>{error}</span>
                                            )}
                                            </div>
                                            {!loading &&(
                                            // <button type="submit" className="send-code">Send code</button>
                                            <button type="submit" className="send-code">Next</button>
                                            )}
                                            {loading &&(
                                                <button type="submit" className="send-code">Next...</button>
                                            )}
                                            <div className='text'>
                                            Remeber It? 
                                            <Link to="#" className='remember-pass'> Sign In </Link>
                                            here
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
}

export default ForgetPass1;
