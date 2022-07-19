import React from 'react'
import { useSelector } from 'react-redux'


function Social(props) {
  const profileDetails = useSelector((state) => state.profile);
  	console.log(profileDetails)
	return (
		<div className='social_icon'>
	        <ul>
	          <li>
	          	<a href={profileDetails.length > 3 ? profileDetails[3].twitter : '#'} target='_blank'>
	          		<i className="fa-brands fa-twitter-square"></i>
	          	</a>
	          </li>
	          <li>
	          	<a href={profileDetails.length > 3 ? profileDetails[3].facebook : '#'} target='_blank'>
	          		<i className="fa-brands fa-facebook-square"></i>
	          	</a>
	          </li>
	          <li>
	          	<a href={profileDetails.length > 3 ? profileDetails[3].instagram : '#'} target='_blank'>
	          		<i className="fa-brands fa-instagram-square"></i>
	          	</a>
	          </li>
	          <li>
	          	<a href={profileDetails.length > 3 ? profileDetails[3].github : '#'} target='_blank'>
	          		<i className="fa-brands fa-github-square"></i>
	          	</a>
	          </li>
	          {
	          	props.toggle && 
	          		<li>
	          			<a href={profileDetails.length > 3 ? profileDetails[3].github : '#'} target='_blank'>
	          				<i className="fa-brands fa-linkedin"></i>
	          			</a>
	          		</li>
	          }
	        </ul>
      </div>
	)
}

export default Social