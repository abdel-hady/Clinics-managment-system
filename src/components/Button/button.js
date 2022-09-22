import React from 'react';
import {Link} from 'react-router-dom'
const Button =()=>{
  return(
    <>
      <Link path="/" type='' className='nav-Sign'  to="/login">Sign in</Link>
    </>
  )
}
export const Doctors =(props)=>{

  return(
    <>
      <Link path="/" type='' className='link' onClick={props.onClick}  to="/Doctors">Doctors</Link>
    </>
  )
}

export default Button ;