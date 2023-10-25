import {React,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// components

export default function CardPageVisits() {

  // const emailPending = localStorage.getItem('email');

  
    // const shootApprove = () => {
    //   alert("Great Approve button clicked!");
      
    // }

    const shootDeny = () => {
      alert("Request Denied");
    }

  const [requestData, setRequestData] = useState([]);
  const [putRequestData, setPutRequestData] = useState([]);///for put request

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    // Make an API request using axios when the component mounts
    // axios.get(`http://localhost:5000/api/req/${email}`)
    axios
    .get(`http://localhost:5000/api/req/`)
      .then((response) => {
        setRequestData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Function to update the "verified" variable to "approved"
  const shootApprove = (id) => {             //i want to pass the id of approval request here
    // axios.put(`http://localhost:5000/api/req/${id}`, { verified: "Approved" })//is this getting admin or students id
    axios.put(`http://localhost:5000/api/req/${id}`, { verified: "approved" })//is this getting admin or students id
      .then((response) => {
        // Update the state or take any necessary actions on success
        console.log("Verified updated to approved:", response.data);
        // window.location.reload()//this hopwevers clears console in browser
        //more efficiwent way
        fetchData()
      })
      .catch((error) => {
        console.error("Error updating verified:", error);
      });
  };


  // const shootDeny = (id) => {             //i want to pass the id of approval request here
  //   // axios.put(`http://localhost:5000/api/req/${id}`, { verified: "Approved" })//is this getting admin or students id
  //   axios.put(`http://localhost:5000/api/req/${id}`, { verified: "rejected" })//is this getting admin or students id
  //     .then((response) => {
  //       // Update the state or take any necessary actions on success
  //       console.log("Verified updated to approved:", response.data);
  //       // window.location.reload()//this hopwevers clears console in browser
  //       //more efficiwent way
  //       fetchData()
  //     })
  //     .catch((error) => {
  //       console.error("Error updating verified:", error);
  //     });
  // };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Requests
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            {/* <Link to="/admin/tables"> */}
            {/* the following is done so that see all button cabn go to Tables page */}
            <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                    ? "text-emerald-500 hover:text-emerald-300"
                    : "text-emerald-500 hover:text-emerald-300")
                  }
                  to="/admin/tables"
                >
                 
                  <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See All
              </button>
                </Link>
              </li>
              {/* <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See All
              </button> */}
              {/* </Link> */}


            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Student Email
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Category
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Amount
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Status
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Documents
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
            {requestData.map((item) => (
            <tr key={item.id}>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.email}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.requestType}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.amount}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {item.verified}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {item.supportingdoc}
              </td>
            
            {/* Render other data fields here */}
          
               
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <i className="fas fa-arrow-up text-emerald-500 mr-4"></i> */}
                  <button onClick={() => shootApprove(item._id)}
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Approve
              </button>
              <button onClick={shootDeny}
                className="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Deny
              </button>
                </td>
              </tr>
             
              ))}
               {/* copied from one line above these brackets */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
