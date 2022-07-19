import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { addSocial } from '../app/profileSlice';
import { useDispatch } from 'react-redux';

function Social() {
	const [inputValue, setInputValue] = useState({});
    const dispatch = useDispatch();
    console.log(inputValue)

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
            addSocial({
                twitter: inputValue.twitter,
	            facebook: inputValue.facebook,
	            instagram: inputValue.instagram,
	            github: inputValue.github,
            })
        )
        
        setInputValue('');
    }


	return (
		<form onSubmit={handleForm}>
			<input 
				type="text"
				placeholder='Twitter Profile'
				name='twitter'
				onChange={changeHandle} 
                value = {inputValue.fullName}
			/>
			<input 
				type="text"
				placeholder='Facebook Profile'
				name='facebook'
				onChange={changeHandle} 
                value = {inputValue.fullName}
			/>
			<input 
				type="text"
				placeholder='Instagram Profile'
				name='instagram'
				onChange={changeHandle} 
                value = {inputValue.fullName}
			/>
			<input 
				type="text"
				placeholder='Github Profile'
				name='github'
				onChange={changeHandle} 
                value = {inputValue.fullName}
			/>
			<button className='submit'>Submit</button>
		</form>
	)
}

export default Social