import React, { useContext } from 'react';
import UserContext from './UserContext'; // Adjust the path as necessary


function UserDetails() {

    const userData = useContext(UserContext);

    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;