import React ,{useState}from 'react';
import './new-post.css';
import { Link } from 'react-router-dom';
import {App} from './../../../components/App';
import Table from './../../../components/Table/table';
import Show from './../../../images/show.png';
import Sidebar from '../../../components/Sidebar/sidebar'
import NavDoctor from './../../../components/NavDoctor/navDoctor';
import Camera from './../../../images/camera.png'
import Heart_Like from './../../../images/heart-like.png'
import {NavFooter} from './../../../components/NavDoctor/navDoctor'
// import { useNavigate } from "react-router-dom"


const New_Post = () => {
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
        <NavDoctor Appointments="Blog / New Post"/>
        <div className='under-nav new-post-body'>
          <div className='new-post-header'>
            <div className='chevron-title'>
              <div>
                <Link className='chevron-left activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                  <box-icon style={{"fill":"rgb(1, 55, 154)"}} name='chevron-left' ></box-icon>
                </Link>
              </div>
              <div>
                New Post
              </div>
            </div>
            <div>
              <Link className='check activeClinic_Deppartment link-Clinic_Deppartment ' to="" onClick={handleClinic_DeppartmentClick}>
                <box-icon style={{"fontSize" : "40px"}} name='check' ></box-icon>
              </Link>
            </div>
          </div>
          <form  className='new-post'>
            <div className='div_upload'>
          {selectedImage && (
            <div className='photo-after-upload'>
            <img alt="not fount" width={"100%"} height={"100%"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={()=>setSelectedImage(null)}>Remove</button>
            </div>
            )}
            { selectedImage ==null && (
              <div className='image-upload-image'>
            <img className='image-icon' src={Camera} alt="camera icon "/>
            <button className='button-chose-file' type="button">
            <input className='input-image'
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <div className='div-upload'>Upload Image</div>
            </button>
            </div>
            )}
            </div>
            <div className='title'>
              <label forHtml="title">Title</label>
              <input type="text" id="title" name="" value="" />
            </div>
            <div className='text'>
              <label forHtml="text">Text</label>
              <textarea type="text" id="text" name=""  />
            </div>
            <div className='div-add-post'>
              <Link className='add-post' to="" >Add post</Link>
            </div>
          </form>
        </div>
      </div>
      <NavFooter/>

    </>
  )
}

export default New_Post;