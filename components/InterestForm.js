import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addInterest } from '../app/profileSlice';

function InterestForm() {
	const [inputValue, setInputValue] = useState({});
	const dispatch = useDispatch();

	function changeHandle(event){
    const value = event.target.value;
    setInputValue({
        ...inputValue,
        [event.target.name]: value,
    })
	}

	function handleForm(e){
    	e.preventDefault();

    if(inputValue.length === 0){
        alert("Enter value before Adding !!");
        setInputValue('');
        return;
    }

    dispatch(
        addInterest({
            interest: inputValue.interest,
        })
    )
  
  	setInputValue('');
	}




	return (
		<form onSubmit={handleForm}>
      <textarea 
        name="interest" 
        id=""
        cols="30" 
        rows="10"
        placeholder='Your Interests'
        onChange={changeHandle}
      >
      </textarea>
      <button className='submit'>Submit</button>
  	</form>
	)
}

export default InterestForm