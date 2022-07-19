import React from 'react'
import { useSelector } from 'react-redux'


function About() {
  const profileDetails = useSelector((state) => state.profile);
	return (
		<div className='profile_about'>
      <h2 className='about_heading'>About</h2>
      <p className='about_para'>{profileDetails.length > 1 ? profileDetails[1].about : 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'}</p>
    </div>
	)
}

export default About