import React, {useContext} from 'react';
import UserContext from '../context/UserContext';


const Profile = () => {
  const {user}= useContext(UserContext)
  
    
    if(!user) return(
       <div>please login</div>
       )
    return(
      <div className='mt-8 shadow-md bg-slate-100 w-1/2 h-1/6 rounded-lg flex flex-col items-center justify-center'>
        <h1 className='text-md italic'> Welcome!</h1>
        <h2 className='text-4xl text-blue-500'>{user.username}</h2>
      </div>
    )
  
}

export default Profile