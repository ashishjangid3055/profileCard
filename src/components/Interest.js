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
    </>
	)
}

export default Interest