import React from 'react';
import pfp from './img/default_pfp.jpg'

const username = prompt('What is your username?')
const email = prompt('What is your email?')
const state = prompt('What state do you live in?')
const city = prompt('What city do you live in?')
const addy = prompt('What is your address?')


const Profile = () => {
  return (<div className="profile">
        <h1>Profile</h1>
        <h2 className='username'>Username: {username}</h2>
        <h3 className='email'>Email: {email}</h3>
        <h3 className='homeAddy'>Home Address: {addy}, {city}, {state} </h3>
        <img src={pfp} width="150" height="150" alt='Default PFP'/>
        </div>)
}

export default Profile;