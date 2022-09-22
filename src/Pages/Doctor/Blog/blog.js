import React ,{useState}from 'react';
import './blog.css'
import { Link } from 'react-router-dom';
import {App} from './../../../components/App';
import Table from './../../../components/Table/table';
import ProfileIcon from './../../../images/blog-blue.png';
import Sidebar from '../../../components/Sidebar/sidebar'
import NavDoctor from '../../../components/NavDoctor/navDoctor';
import Doubi from './../../../images/Doubi.jpg'
import Daily from './../../../images/daily-icon.png'
import {NavFooter} from './../../../components/NavDoctor/navDoctor'
// import { useNavigate } from "react-router-dom"


const Blog = () => {
  const handleBlogClick=(e)=>{
    
    const links= document.querySelectorAll(".link-blog")
    if(links)
    links.forEach(link =>{
      link.classList.remove("activeBlog")
    })
    e.currentTarget.classList.add("activeBlog");
    }

  const clear =()=>{
    document.getElementById("search").value="";
  }

  const search =()=>{
    document.querySelector(".search-container").classList.toggle("activeSearch")
  }
  return(
    <>
      <Sidebar/>
      <div className='main-doctor blog'>
        <NavDoctor Appointments="Blog"/>
        <div className='under-nav'>
        <div className='b-all-today'>
                    <div className='search-container'>
                      <div className='search-icon'>
                        <box-icon color="#01379A" onClick={search} className="search" name='search'></box-icon>
                      </div>
                      <div className='input-search'>
                        <input type="text" placeholder="Search" id="search" />
                        <box-icon  color="#01379A" onClick={clear} className="clear" name='x' ></box-icon>
                      </div>
                    </div>
                    <ul className='link-blog'>
                      <li  className='blog-ele' >
                      <Link className='activeBlog link-blog btn-one-blog' to="" onClick={handleBlogClick}>Chose Deppartments</Link>
                      </li>
                      <li  className='blog-ele'  >
                      </li>
                          <Link  className='link-blog btn-two-blog' to="" onClick={handleBlogClick}>My Posts</Link>
                    </ul>
                </div>
                <div className='middel-blog '>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 posts</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 posts</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 posts</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 posts</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 posts</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 posts</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 posts</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
                </div>
                <div className='card'>
                  <div className='daily'>
                  <img src={Daily}></img>
                  </div>
                
                <div className='text-card'>
                  <div className='titlePrice'>
                    <h3>Heart Deppartments</h3>
                    
                  </div>
                  <img src={ProfileIcon}></img>
                  <p>3 doctor</p>
                </div>
                
                </div>
                </div>
        </div>
      </div>
      <NavFooter/>

    </>
  )
}

export default Blog;