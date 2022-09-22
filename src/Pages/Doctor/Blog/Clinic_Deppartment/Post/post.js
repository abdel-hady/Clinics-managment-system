import React ,{useState}from 'react';
import './post.css';
import { Link } from 'react-router-dom';
// import {App} from './../../../../../../components/App';
import Table from './../../../../../components/Table/table';
import Show from './../../../../../images/show.png';
import Sidebar from '../../../../../components/Sidebar/sidebar'
import NavDoctor from './../../../../../components/NavDoctor/navDoctor';
import Daily from './../../../../../images/daily-icon.png';
import Heart_blue from './../../../../../images/heart-blue.png'
import {NavFooter} from './../../../../../components/NavDoctor/navDoctor'

// import { useNavigate } from "react-router-dom";
const Post = () => {
  const handleClinic_DeppartmentClick=(e)=>{
    
    const links= document.querySelectorAll(".link-Clinic_Deppartment")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeClinic_Deppartment")
    })
    e.currentTarget.classList.add("activeClinic_Deppartment");
    }



      const [selectedImage, setSelectedImage] = useState(null);
  return(
    <>
      <Sidebar/>
      <div className='main-doctor'>
        <NavDoctor Appointments="Blog / Clinic Department / Post"/>
        <div className='under-nav new-post-body'>
          <div className='new-post-header'>
            <div className='chevron-title'>
              <div>
                <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                  <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                </Link>
              </div>
              <div className='name-of-blog'>
              Symptoms of Covid
              </div>
            </div>
            <div className='heart-number'>
                <div className='num-heart-blue'>13</div>
              <Link className='heart-blue activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                {/* <box-icon style={{"fontSize" : "40px"}} name='check' ></box-icon> */}
                <img src={Heart_blue} alt=""/>
              </Link>
            </div>
          </div>
          <div className=''>
          <div className='photo-post'>
            <img src={Daily}></img>
            </div>
          </div>
          <div className='titlePrice '>
            <h3 className='title-blog'>Symptoms of Covid to watch out for</h3>
          </div>
          <div className='middle-card'>
            <span className='span-1 name-doctor'>Dr. Abdel hady</span>
            <span className='span-2 date-doctor'>August 09 - 08:23 AM</span>
          </div>
          <hr className='hr-post'/>
          <div className='text-post'>
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            ksldj
            abdel
            Symptoms of Covid,
            Symptoms of Covid to Symptoms of Covid and to Symptoms of Covid to Symptoms of Cov
            Symptoms of Covid to Symptoms of Covid and to Symptoms of Covid to Symptoms of Cov
            and to
            Symptoms of Covid to Symptoms of Covid and to Symptoms of Covid to Symptoms of Cov
            and to
            Symptoms of Covid to Symptoms of Covid and to Symptoms of Covid to Symptoms of Cov
            Symptoms of Covid to Symptoms of Covid and to Symptoms of Covid to Symptoms of Cov
            and to
            Symptoms of Covid to Symptoms of Covid and to Symptoms of Covid to Symptoms of Cov
            and to
            Symptoms of Covid to Symptoms of Covid and to Symptoms of Covid to Symptoms of Cov
            and to

          </div>
        </div>
      </div>
      <NavFooter/>

    </>
  )
}

export default Post;