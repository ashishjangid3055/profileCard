import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Profile(props) {
  const profileDetails = useSelector((state) => state.profile);



  const ButtonGroup = () => {
    const data = profileDetails.length;
    if(data > 0){
      return (
        <>
          <a href={profileDetails[0].email}>
            <span className='fa-solid fa-envelope'></span> Email
          </a>
          <a href={profileDetails[0].linkedin} target='_blank'>
            <span className='fa-brands fa-linkedin'></span> Linkedin
          </a>
        </>
      )
    }
    else{
      return (
        <>
          {
            props.toggle ? 
              <a href='#' className='full_width'>
                <span className='fa-solid fa-envelope'></span> Email
              </a>
               :
              <> 
                <a href='#'>
                  <span className='fa-solid fa-envelope'></span> Email
                </a>
                <a href='#'>
                  <span className='fa-brands fa-linkedin'></span> Linkedin
                </a>
              </>
          }
        </>
      )
    }
  }



	return (
  <>
    <button 
      className='submit mx-auto' 
      onClick={()=>props.setToggle(!props.toggle)}
    >
      Toggle
    </button>
		<div className='profile'>
      <div className='profile_img'>
        <img src={profileDetails.length > 0 ? profileDetails[0].image : ''} alt="" />
      </div>
      <div className='profile_details'>
          <h1 className='name'>{profileDetails.length > 0 ? profileDetails[0].fullName : "Full Name"}</h1>
          <h4 className='designation'>{profileDetails.length > 0 ? profileDetails[0].designation : "Designation"}</h4>
          <h6 className='email'>{profileDetails.length > 0 ? profileDetails[0].website : "Website"}</h6>
        <div className='contact_button'>
          
          <ButtonGroup />
              
                
              
        </div>
      </div>
    </div>
  </>
  )
}

export default Profile