import React,{ useState } from 'react'
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Signup data
    const signupData = {
      email,
      password,
    };

    // Make the signup request
    axios
      .post('http://localhost:5000/api/admin', signupData)
      .then((response) => {
        console.log(response.data); // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label for="name">Name:</label>
    <input type="text" id="email" value={email} onChange={handleEmailChange} required/>
    
    <label for="password">Password:</label>
    <input  type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange} required/>
    
    <button type="submit">Signup</button>
  </form>
    </div>
  )
}

export default Signup