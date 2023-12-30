import React from "react";
import { useState} from "react";
import axios from "axios";
// components

export default function CardSettings() {

  const email = localStorage.getItem('email');

  const [supportingdoc, setSupportDoc] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [amount, setAmount] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [msg, setMsg] = useState('');
  const [requestType, setRequestType] = useState('');
  const [verified, setVerified] = useState('pending');
  // const [verified, setVerified] = useState('');
  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setRequestType(selectedValue);
  };

  console.log(`Email: ${email}`);
  const handleApplyButtonClick = () => {
    // Collect data from state variables
    const requestData = {
     email,
      amount,
      requestType,
      cgpa,
      supportingdoc,
      phoneno,
      verified 
    };
    console.log(requestData);
    axios.post('http://localhost:5000/api/req/', requestData)
      .then((response) => {
        // Handle the response, e.g., set a success message in state
        setMsg('Request submitted successfully to Server.');
        // setVerified()
      })
      .catch((error) => {
        // Handle any errors, e.g., set an error message in state
        setMsg('Request submission failed.');
      });
  };
  return (
    <>
    {/* {console.log(props.email)}; */}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Make Request</h6>
            <label className="text-blueGray-700 text-m font-bold">{msg}</label>
            <button
              
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleApplyButtonClick} // Add the click event handler
            >
              Apply
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Request Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Request Type
                  </label>
                  {/* <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={props.username}
                    readOnly
                  /> */}
                  <select
                  value={requestType} // 5. Use the state variable to set the value of the select element.
                  onChange={handleDropdownChange} // 4. Bind the event handler to the onChange event.
                  >
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Amount Needed
                  </label>

                  <input
                    onChange={(e)=>{setAmount(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={amount}
                  />
                 
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    CGPA
                  </label>
                  <input
                    onChange={(e)=>{setCgpa(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={cgpa}
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Supporting Docs
                  </label>
                  <input type="file" id="supportingDocument" name="supportingDocument" accept=".pdf, .doc, .docx" className="mt-2" />
                </div>
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
                    Phone Number
                  </label>
                  <input
                    onChange={(e)=>{setPhoneno(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={phoneno}
                  />
                </div>
              </div>
              
              
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            
          </form>
        </div>
      </div>
    </>
  );
}



// import React from "react";
// import { useState,useEffect } from "react";
// import axios from "axios";
// // components

// export default function CardSettings(props) {
//   const [name,setName] = useState()
//   const [address,setAddress] = useState()
//   const [msg,setMsg] = useState()
 
//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//         <div className="rounded-t bg-white mb-0 px-6 py-6">
//           <div className="text-center flex justify-between">
//             <h6 className="text-blueGray-700 text-xl font-bold">Make Request</h6>
//             <label className="text-blueGray-700 text-m font-bold">{msg}</label>
//             <button
              
//               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//               type="button"
//             >
//               Apply
//             </button>
//           </div>
//         </div>
//         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//           <form>
//             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//               Request Information
//             </h6>
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     Request Type
//                   </label>
//                   {/* <input
//                     type="text"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={props.username}
//                     readOnly
//                   /> */}
//                   <select>
//                     <option>Option A</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     Amount Needed
//                   </label>
//                   <input
//                     type="email"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={props.email}
//                     readOnly
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     CGPA
//                   </label>
//                   <input
//                     type="email"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={props.email}
//                     readOnly
//                   />
//                 </div>
//               </div>
              
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     Supporting Docs
//                   </label>
//                   <input
                    
//                     type="file"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={name}
//                   />
//                 </div>
//               </div>
//             </div>

//             <hr className="mt-6 border-b-1 border-blueGray-300" />

//             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//               Contact Information
//             </h6>
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-12/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     onChange={(e)=>{setAddress(e.target.value)}}
//                     type="text"
//                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     value={address}
//                   />
//                 </div>
//               </div>
              
              
//             </div>

//             <hr className="mt-6 border-b-1 border-blueGray-300" />

            
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }