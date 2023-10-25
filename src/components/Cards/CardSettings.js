import React, { useState } from "react";
import axios from "axios";
// components

export default function CardSettings() {
  const [name,SetName] = useState()
  const [password,SetPassword] = useState()
  const [contact,SetContact] = useState()
  const [address,setAddress] = useState()
  const [show,setShow] = useState()
  async function insertAdmin(){
    const admin ={
      name:name,
      password:password,
      contact:contact,
      address:address
    }
    console.log(admin.contact)
    console.log(admin)
    const res = await axios.post('http://localhost:5000/api/admin',admin)
    if(res){
      setShow(1)
    }
    else{
      setShow("Error Adding Org!")
    }
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">

            <h6 className="text-blueGray-700 text-xl font-bold">Register Admin</h6>
            <button
            onClick={insertAdmin}
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Register
            </button>
          </div>
        </div>
        <div className="relative w-full mb-3">
          {show===1? <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Added Successfully!
                  </label>
                  :
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {show}
                  </label>
                  }
                  
                </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Basic Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                  value={name}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Email"
                    onChange={(e)=>{SetName(e.target.value)}}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                  value={password}
                  onChange={(e)=>{SetPassword(e.target.value)}}
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Give Password"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
              </div>
              <div className="w-full lg:w-6/12 px-4">
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                  value={address}
                  onChange={(e)=>{setAddress(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              
              
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Contact No.
                  </label>
                  <input
                  value={contact}
                  onChange={(e)=>{SetContact(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Contact Info"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Organisation
            </h6> */}
            {/* <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About Organisation
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="SOS Children's Village Lahore was the first project to be established in Pakistan. It was officially opened in January 1977 by the President of Pakistan, and is constructed on a ten-acre site donated by the Government of the Punjab. Since the National Office and the National Training Centre are situated next door, this Village plays an important role in imparting training and serving as a model for other SOS Children’s Villages in Pakistan."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
