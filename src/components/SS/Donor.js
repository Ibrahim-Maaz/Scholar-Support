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
export default function Donor() {
  return (
    <>       
    <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <SSHeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Dashboard/>
          {/* <Switch>
            <Route path="/donor/dashboard" exact component={Dashboard} />


            <Redirect from="/donor" to="/admin/dashboard" />
          </Switch> */}
          <FooterAdmin />
        </div>
      </div>
    </>



  );
}