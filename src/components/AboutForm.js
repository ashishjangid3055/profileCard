import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { addAbout } from '../app/profileSlice';
import { useDispatch } from 'react-redux';


function AboutForm() {
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
            addAbout({
                about: inputValue.about,
            })
        )
        
        setInputValue('');
    }


	return (
		<form onSubmit={handleForm}>
            <textarea 
              name="about" 
              id=""
              cols="30" 
              rows="10"
              placeholder='About Yourself'
              onChange={changeHandle}
            >
            </textarea>
            <button className='submit'>Submit</button>
        </form>
	)
}

export default AboutForm