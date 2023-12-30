import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js"
import Sidebar from "../SS/DonorSidebar.js"
import HeaderStats from "../Headers/HeaderStats.js";
import FooterAdmin from "../Footers/Footer.js"
import SSHeaderStats from "../SS/SSHeaderStats.js"
import Navbar from '../Navbars/AuthNavbar.js'
import FooterSmall from "components/Footers/FooterSmall.js";
// views
import Dashboard from "./DonorDashboard.js";
// import Dashboard from "../../views/admin/Dashboard.js";
// import Dashboard from "views/admin/Dashboard.js";
// import Maps from "views/admin/Maps.js";
// import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
// import SearchPage from "../Pages/SearchPage";
export default function DonorHome() {
  const cardItemStyle = {
    backgroundColor: "#FFFFFF", // Set the desired background color
    padding: "16px 64px", // Set the desired padding
    border: "1px solid #E5E7EB", // Add borders if needed
    borderRadius: "8px", // Round the corners if desired
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a shadow if desired
    margin:"16px"
  };
  const buttonItemStyle = {
    backgroundColor: "#007BFF", // Set the desired background color
    color: "#FFFFFF", // Set the text color
    padding: "", // Set the desired padding
    borderRadius: "4px", // Round the corners if desired
    cursor: "pointer", // Add a pointer cursor
    width:"64px",
    height:"32px"
  };
  const OrangebuttonItemStyle = {
    backgroundColor: "#FFA500", // Set the desired background color
    color: "#FFFFFF", // Set the text color
    padding: "", // Set the desired padding
    borderRadius: "4px", // Round the corners if desired
    cursor: "pointer", // Add a pointer cursor
    width:"64px",
    height:"32px"
  };



    const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    // Make an API request using axios when the component mounts
    // axios.get(`http://localhost:5000/api/req/${email}`)
    axios
    // .get(`http://localhost:5000/api/req`)
    .get(`http://localhost:5000/api/req/?`)
      .then((response) => {
        setRequestData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  return (
    <>
     <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
<div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  
                </div>
                
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <div>Post a New Aid Here</div>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Aid Title
                    </label>
                    <input
                      
                      
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Amount
                    </label>
                    <input
                      
                      
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    
                    />
                  </div>
                  
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Description
                    </label>
                   <textarea className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"></textarea>
                  </div>


                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                     
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Post
                    </button>
                    
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>   
      <FooterSmall absolute />
        </section>
      </main>
   </>
);
}