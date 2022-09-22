import '../../variable/variable.css';
import { Link } from 'react-router-dom';
import forget from "../../images/Forgot.png";
import './forgetPass.css';
import React, {useState,Component} from "react";
import phLogo from '../../images/Logo-gray.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

// import eye from './eye.svg'
// import eye_crossed from './eye-crossed.svg'
// import logo from "../../images/Logo.png";
// import logoScroll from "../../images/LogoScroll.png";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCoffee,faBars, faL, faLinesLeaning} from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import swal from 'sweetalert';

const ForgetPass =()=>{
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [loading, setLoading] = useState('');
        const [error, setError] = useState('');
        const submit = async e => {
            e.preventDefault();
            setLoading("abdel");
            localStorage.setItem("email", email)
            axios.post('forget-password', {
            email
            }).then(response =>{
            swal({
                title: "Success!",
                text: response.data.data,
                icon: "success",
                button: "OK",
            });
            navigate("/forgetPass2")
            }
            ).catch(err =>{
                setLoading("");
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
                        <form onSubmit={submit}>
                            <div className='content'>
                                <h1 className=' text-center mb-0'>Reset password</h1>
                                <p className='text-center text-reset'>Type your email to send the code</p>
                                <div className='perant'>
                                    <div className='email-send'>
                                        <div className="form-outline label-input-span">
                                            <label className="form-label " htmlFor="email" >Email</label>
                                            <input onChange={e =>{
                                                setEmail(e.target.value)
                                                setError("")
                                            }}
                                            type="text" id="email" className="form-control form-control-lg email" placeholder='Email' />
                                            {!error &&(
                                                <span></span>
                                            )}
                                            {error &&(
                                                <span className='errors'>{error}</span>
                                            )}
                                        </div>
                                        {!loading &&(
                                            <button type="submit" className="send-code">Send code</button>
                                        )}
                                        {loading &&(
                                            <button type="submit" className="send-code">Sending code...</button>
                                        )}
                                        <div className='text'>
                                        Remeber It? 
                                        <Link to="/login" className='remember-pass'> Sign In </Link>
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
    // }
        // else{
        //     return(
        //         <div className="container-fluid main" >
        //             <div className="logo">
        //                 <img src={phLogo} className="img-fluid m-5 " alt="Phone image"/>
        //             </div>
        //             <div className="row form-photo">
        //                 <div className="col-md-6   col-lg-7 photo">
        //                     <img src={forget} className="img-fluid" alt="Phone image"/>
        //                 </div>
        //                 <div className="col-md-6 col-lg-5 pa-form">
        //                     <form onSubmit={submit}>
        //                         <div className='content'>
        //                             <h1 className=' text-center mb-0'>Reset password</h1>
        //                             <p className='text-center text-reset'>Type your email to send the code</p>
        //                             <div className='perant'>
        //                                 <div className='email-send'>
        //                                     <div className="form-outline label-input-span">
        //                                         <label className="form-label " htmlFor="email" >Email</label>
        //                                         <input onChange={e =>setEmail(e.target.value)}
        //                                          type="text" required id="email" className="form-control form-control-lg email" placeholder='Email' />
        //                                         <span></span>
        //                                     </div>
        //                                     <button type="submit" className="send-code">Sending code....</button>
        //                                     <div className='text'>
        //                                     Remeber It? 
        //                                     <Link to="/login" className='remember-pass'> Sign In </Link>
        //                                      here
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // }
    // }
}

export default ForgetPass;
