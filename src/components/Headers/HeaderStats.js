import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import { Link } from "react-router-dom";

export default function HeaderStats() {
  // const userEmail = localStorage.getItem('email');
 
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                {/* {console.log(userEmail)}; */}
                <Link to="/search">
              {/* <Link to={{
                  pathname: "/search",
                  state: {
                    prop1: userEmail // Pass the userEmail as a prop
                  }
                }}> */}
                {/* //request Aid */}
                <CardStats
                  statSubtitle="Connect with thousands of donors"
                  statTitle="Request New Aid"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/reportClearance">
                <CardStats
                  statSubtitle="View your previous aid requests"
                  statTitle="Request History"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-book"
                  statIconColor="bg-red-500"
                />
                </Link>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="/pendingAid" >
                <CardStats
                  statSubtitle="View Requests that are pending"
                  statTitle="Pending Requests"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-clock"
                  statIconColor="bg-pink-500"
                />
                </Link>
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <Link to="editProfile">
                <CardStats
                  statSubtitle="ACADEMIC DETAILS"
                  statTitle="See your information"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-school"
                  statIconColor="bg-lightBlue-500"
                />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
