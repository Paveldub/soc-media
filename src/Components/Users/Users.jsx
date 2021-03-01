import React from 'react';

export const Users = (props) => {
  return (
    <div>
      <h1>Users Page</h1>
      {props.users.map(user => {
        console.log(user.fullName);

        <div key={user.id}>
          <span>{ user.fullName }</span>
        </div>
        
      })}
    </div>
  )
}


          
