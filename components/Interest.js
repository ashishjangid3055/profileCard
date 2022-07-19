import React from 'react'
import { useSelector } from 'react-redux'


function Interest() {
  const profileDetails = useSelector((state) => state.profile);

	return (
		<>
			<div className='profile_interests'>
        <h2 className='interests_heading'>Interests</h2>
        <p className='interests_para'>{profileDetails.length > 2 ? profileDetails[2].interest : 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'}</p>
	     </div>
       <div className='social_icon'>
        <ul>
          <li><a href="#"><i className="fa-brands fa-twitter-square"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-facebook-square"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-instagram-square"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>
      </div>
    </>
	)
}

export default Interest