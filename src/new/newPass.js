// PasswordResetForm.js

import React, { useState } from 'react';
import axios from 'axios';

function ResetPass() {
  const [pass, setPass] = useState('');
  const [show,setShow] = useState()
  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a request to the backend API
      const obj={
        email:localStorage.getItem("email"),
        pass:pass
      }
      await axios.post('http://localhost:5000/api/newpass/setnewpass',obj);
      console.log('Password reset email sent');
    } catch (error) {
      console.error(error);
      // Handle error
    }
    window.alert("Password Reset Successful!")
    window.location.assign("http://localhost:3000/")
  };

  return (
    <>
    <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  
                </div>
                <div className="btn-wrapper text-center">
                  
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Admin Login</small>
                </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Enter New Password
                    </label>
                    <input
                    value={pass}
                    onChange={handlePassChange}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="New Password"
                    />
                  </div>

                  

                  <div>
                    
                  </div>

                  <div className="text-center mt-6">
                    <button
                    onClick={handleSubmit}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Reset Password
                    </button>
                  </div>
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                  {show}
                </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              
              
            </div>
          </div>
        </div>
      </div>













    

    </>
  );
}

export default ResetPass;
