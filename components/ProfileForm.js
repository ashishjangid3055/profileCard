import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProfile } from '../app/profileSlice';

function ProfileForm() {
	const [inputValue, setInputValue] = useState({});
	const dispatch = useDispatch();
    console.log(inputValue)


	function changeHandle(event){
        // console.log(URL.createObjectURL(event.target.files[0]));
        // setInputValue(URL.createObjectURL(event.target.files[0]));
        
        if(event.target.id === 'imgField'){
            let ImageUrl = '';
            ImageUrl =  URL.createObjectURL(event.target.files[0]);
            setInputValue({
                ...inputValue,
                image: ImageUrl,
            })
        }
        else{
            const value = event.target.value;
            setInputValue({
                ...inputValue,
                [event.target.name]: value,
            })
        }

        

  	}


  	function handleForm(e){
    	e.preventDefault();

	    if(inputValue.length === 0){
	        alert("Enter value before Adding !!");
	        setInputValue('');
	        return;
	    }

	    dispatch(
	        addProfile({
	            image: inputValue.image,
	            fullName: inputValue.fullName,
	            designation: inputValue.designation,
	            website: inputValue.website,
	            email: inputValue.email,
	            linkedin: inputValue.linkedin,
	        })
    	)
    
    	setInputValue({});
  	}


	return (
		<form id="form" className='form' onSubmit={handleForm}>
            <label htmlFor="imgField">
                <input 
                  type="file" 
                  id="imgField" 
                  className="profile_image" 
                  name="image"
                  onChange={changeHandle}
                />
            </label>
            <input 
                type="text" 
                placeholder='Full Name'
                name="fullName" 
                onChange={changeHandle} 
                value = {inputValue.fullName}
            />
            <input 
                type="text" 
                placeholder='Designation' 
                name="designation"
                onChange={changeHandle}
                value = {inputValue.designation}
                
            />
            <input 
                type="text" 
                placeholder='Website' 
                name="website"
                onChange={changeHandle}
                value = {inputValue.website}
            />
            <input 
                type="text"
                placeholder='Email' 
                name="email"
                onChange={changeHandle}
                value = {inputValue.email}
            />
            <input 
                type="text" 
                placeholder='Linkedin Profile'
                name="linkedin" 
                onChange={changeHandle}
                value = {inputValue.linkedin}
            />
            <button className='submit'>Submit</button>
        </form>
	)
}

export default ProfileForm