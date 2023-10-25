import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

  


  


export default function Login() {

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loggedin,setLoggedIn]=useState(0);
  const [show,setShow]=useState("")


  
  function checkV(admin){
    axios.post('http://localhost:5000/api/admin/auth', admin)
      .then(function (response) {
        console.log(response);
        localStorage.setItem('email',email)
        localStorage.setItem('username',email)
        setLoggedIn(1);
        localStorage.setItem('loggedin',loggedin)
        window.location.href="/admin"
      })
      .catch(function (error) {
        setLoggedIn(0)
        setShow("Invalid Credentials!")
      });
  }
  function onSubmitAdmin() {
      const admin = {
        email: email,
        password: password,
      }
      checkV(admin)
  }

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
                
                <form onSubmit>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                  </div>
                  <div>
                    
                  </div>

                  <div className="text-center mt-6">
                    <button onClick={onSubmitAdmin}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Sign In
                    </button>
                    {/* <Link to="/admin/dashboard">Sign Up</Link> */}
                  </div>
                  <div className="text-center mt-6">
                    <Link to="/reset-password">Forgot Password?</Link>
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
