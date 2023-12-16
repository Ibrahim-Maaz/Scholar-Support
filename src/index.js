import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import SearchPage from "./Pages/SearchPage.js"
import TempReportClearance from "./Pages/TempReportClearance.js"
import EnrollmentForm from "./Pages/EnrollmentForm.js";
import AddJob from "./new/Addjob.js"
// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import RatingsPage from "./Pages/RatingsPage.js"
//new
import Jobsel from "new/Jobsel.js";
import RequestAid from "./components/SS/RequestWrapper.js"
import PendingRequests from "./components/SS/PendingAid.js"
import EditProfile from "./views/admin/Settings.js"
import DonorLogin from "./components/SS/Login.js"
import Donor from "./components/SS/LoginWrapper.js"
import DonorDashboard from "./components/SS/Donor.js"
import DonorHome from "./components/SS/DonorHome.js"
import DonorRegister from "./components/SS/SignupWrapper.js"
import DonorAid from "./components/SS/DonorAidWrapper.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/jobsel" component={Jobsel} />
      {/* add routes without layouts */}
      <Route path="/RegisterJob" exact component={AddJob}/>
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path ="/donor" exact component={Donor}/>
      <Route path="/donor/login" exact component={DonorLogin} />
      <Route path="/donor/dashboard" exact component={DonorDashboard}/>
      <Route path="/donor/register" exact component={DonorRegister}/>
      <Route path="/donor/home" exact component={DonorHome}/>
      <Route path="/donor/aid" exact component={DonorAid}/>
      <Route path="/" exact component={Landing} />
      <Route path="/editProfile" exact component={EditProfile} />
      <Route path="/search" exact component={RequestAid}></Route>
      <Route path="/reportClearance" exact component={TempReportClearance}></Route>
      <Route path="/pendingAid" exact component={PendingRequests}></Route>
      <Route path="/enroll" exact component={EnrollmentForm}></Route>
      <Route path="/ratingspage" exact component={RatingsPage}></Route>
      {/* add redirect for first page */}
      {/*<Redirect from="*" to="/" />*/}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);