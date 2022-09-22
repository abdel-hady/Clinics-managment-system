import React ,{useState}from 'react';
import './my-post.css';
import { Link } from 'react-router-dom';
import {App} from './../../../components/App';
import Table from './../../../components/Table/table';
import Show from './../../../images/show.png';
import Sidebar from '../../../components/Sidebar/sidebar'
import NavDoctor from './../../../components/NavDoctor/navDoctor';
import Daily from './../../../images/daily-icon.png'
import Delete_post from './../../../images/delete-post.png'
import Edit_post from './../../../images/edit-post.png'
import Heart_Like from './../../../images/heart-like.png'
import {NavFooter} from './../../../components/NavDoctor/navDoctor'
// import { useNavigate } from "react-router-dom"


const MY_Post = () => {
  const handleClinic_DeppartmentClick=(e)=>{
    
    const links= document.querySelectorAll(".link-Clinic_Deppartment")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeClinic_Deppartment")
    })
    e.currentTarget.classList.add("activeClinic_Deppartment");
    }

  const clear =()=>{
    document.getElementById("search").value="";
  }

  const search =()=>{
    document.querySelector(".search-container").classList.toggle("activeSearchBlog")
  }
  return(
    <>
      <Sidebar/>
      <div className='main-doctor'>
        <NavDoctor Appointments="Blog / My Posts"/>
        <div className='under-nav'>
        <div className='b-all-blog'>
                    <div className='search-plus'>
                      <div className='search-container'>
                        <div className='search-icon'>
                          <box-icon color="#01379A" onClick={search} className="search" name='search'></box-icon>
                        </div>
                        <div className='input-search'>
                          <input type="text" placeholder="Search" id="search" />
                          <box-icon  color="#01379A" onClick={clear} className="clear" name='x' ></box-icon>
                        </div>
                      </div>
                      <div className=''>
                      <Link className='plus activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                        <box-icon style={{"fill":"rgb(1, 55, 154)"}}  name='plus'></box-icon>
                      </Link>
                      </div>
                    </div>
                    <ul className='link-Clinic_Deppartment'>
                      <li  className='Clinic_Deppartment-ele' >
                      <Link className='activeClinic_Deppartment link-Clinic_Deppartment btn-one-Clinic_Deppartment' to="" onClick={handleClinic_DeppartmentClick}>Chose Deppartments</Link>
                      </li>
                      <li  className='Clinic_Deppartment-ele'  >
                      </li>
                          <Link  className='link-Clinic_Deppartment btn-two-Clinic_Deppartment' to="" onClick={handleClinic_DeppartmentClick}>My Posts</Link>
                    </ul>
                </div>
                <div className='middel-Clinic_Deppartment '>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  <img className='delete-post' src={Delete_post}></img>
                  <img className='edit-post' src={Edit_post}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                  <div className='text-card'>
                    <div className='titlePrice'>
                      <h3>Symptoms of Covid</h3>
                    </div>
                    <div className='middle-card'>
                      <span className='span-1'>Dr. Abdel hady</span>
                      <span className='span-2'>August 09 - 08:23 AM</span>
                    </div>
                    <div className='bottom-card'>
                      <div>
                        <img className='img-blog' src={Show}></img>
                        <p>31 views</p>
                      </div>
                      <div>
                        <span>5 Likes</span>
                        <img className='img-heart' src={Heart_Like}></img>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
        </div>
      </div>
      <NavFooter/>

    </>
  )
}

export default MY_Post;