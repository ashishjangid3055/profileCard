import { createSlice } from '@reduxjs/toolkit'


export const profileSlice = createSlice({
    name: 'profile',
    initialState: [],
    reducers: {
        addProfile: (state, action) => {
            const newProfile = {
                image: action.payload.image,
                fullName: action.payload.fullName,
                designation: action.payload.designation,
                website: action.payload.website,
                email: action.payload.email,
                linkedin: action.payload.linkedin,
            }
            state.push(newProfile)
            console.log(newProfile);
        },
        addAbout: (state, action) => {
            const newProfile = {
                about: action.payload.about,
            }
            state.push(newProfile)
        },
        addInterest: (state, action) => {
            const newProfile = {
                interest: action.payload.interest,
            }
            state.push(newProfile)
        },
    }

})


export const { addProfile, addAbout, addInterest } = profileSlice.actions;

export default profileSlice.reducer;