import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
  return (
    <>       
    <Sidebar />
      <div className=" md:ml-64 bg-blueGray-100 flex flex-col items-center">
      <div className="py-5 text-xl font-semibold mx-auto">Donors Feed</div>
      <div className="flex flex-col">
      <div className="flex mb-12">
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
</div>
<div className="flex mb-12">
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
</div>
<div className="flex mb-12">
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
  <div className="px-6" style={cardItemStyle}>
  <div className="text-center mt-5">
    <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
    <p className="text-sm text-gray-600">FAST University</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p className="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div className="mx-auto mt-2 text-center" style={buttonItemStyle}>Donate</div>
    <div className="mx-auto mt-2 text-center" style={OrangebuttonItemStyle}>Email</div>
  </div>
  </div>
</div>
</div>
        {/* <div className="mx-auto w-full h-96">
            <div class="flex flex-col items-center py-10">
            <div class="py-5 text-xl font-semibold">Donors Feed</div>
            <div class="">
            <div class="w-32 bg-white rounded-lg overflow-hidden shadow-lg mb-5 px-8">
  
  <div class="text-center mt-5">
    <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
    <p class="text-sm text-gray-600">FAST University</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">3.49</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">Computer Science</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">Rs.12000</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">University Fee Payment</p>
    <div class="text-xs text-white bg-blueGray-700 hover:bg-blueGray-500 h-4 mx-auto rounded shadow-lg overflow-hidden cursor-pointer">Donate</div>
    <div class="text-xs text-white bg-blueGray-700 hover:bg-blueGray-500 h-4 mx-auto rounded shadow-lg overflow-hidden cursor-pointer">Email</div>
  </div>
</div>
<div class=" w-32 bg-white rounded-lg overflow-hidden shadow-lg">
  <img class="w-8 h-8 rounded-full mt-5" src="" alt="Profile Picture"/>
  <div class="text-center mt-5">
    <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
    <p class="text-sm text-gray-600">Some data</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
  </div>
</div>
<div class=" w-32 bg-white rounded-lg overflow-hidden shadow-lg">
  <img class="w-8 h-8 rounded-full mt-5" src="" alt="Profile Picture"/>
  <div class="text-center mt-5">
    <h2 class="text-xl font-bold text-gray-800">John Doe</h2>
    <p class="text-sm text-gray-600">Some data</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
    <p class="text-lg font-semibold text-blue-500 mt-2">$100.00</p>
  </div>
</div>
</div>
            </div>
         
         
        </div> */}
        
      </div>
      <FooterAdmin class="mt-28"/>
    </>



  );
}