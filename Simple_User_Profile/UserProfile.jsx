import React from 'react'; 
const UserProfile = (props) => { 
return ( 
<div style={{ border: '1px solid #ccc', padding: '50px', margin: '10px' }}> 
<h2>{props.name}</h2> 
<p>Email: {props.email}</p> 
<p>Age: {props.age}</p> 
</div> 
); 
}; 
export default UserProfile; 
