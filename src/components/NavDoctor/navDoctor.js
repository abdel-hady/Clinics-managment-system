import React, { Component, useState } from 'react';
import { faker } from '@faker-js/faker';
import './navDoctor.css';
import {Link} from 'react-router-dom';
import Notifications from './../../images/notifications.png';
import Notifications_yellow from './../../images/notifications_yellow.png';
import logoScroll from "./../../images/LogoScroll.png";
import axios from 'axios';

class NavDoctor extends Component{
  state={
    is_notificate:false
  }
  componentDidMount(){
    axios.get('notifications/isThere').then(res=>{
      // console.log(res.data.data)
      this.setState({is_notificate:res.data.data})
    }
    )
  }
  render(){
  return(
  <div className='navDoctor'>
  <div>{this.props.Appointments}</div>
  <div  className='notificate'>
  <Link className='' to="/notification">
    <div className="">
      {this.state.is_notificate &&(
        <img className='' src={Notifications_yellow} alt=''></img>
        )
      }
      {!this.state.is_notificate &&(
        <img className='' src={Notifications} alt=''></img>
        )
      }
    </div>
  </Link>
  </div>
  </div>
  )}
}

export const NavFooter =()=>{
  return(
    <>
      <div className='navFooter'>
        <Link  className='logo' to='#'>
          <img className='logo-defualt' src={logoScroll} alt='styleSheets'></img>
        </Link>
        <p>Designed by ITE group</p>
      </div>
    </>
  )
}

export default NavDoctor;