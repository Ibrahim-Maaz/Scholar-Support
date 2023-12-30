import React, { useEffect, useState } from "react";

// components

// import CardPageVisits from "./components/Cards/CardPageVisits.js";
// import CardTable from "./CardTable";
import PrevAidTable from "./PrevAidTable";
import axios from "axios";

export default function DonorDashboard() {
  return (
    <>
      {/* <div className="flex flex-wrap" style={{textAlign:'center'}}>
        <div className="w-full xl:w-4/12 px-4">
          {<CardBarChart/>}
        </div>
      </div> */}
      <div className="flex flex-wrap justify-center mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <PrevAidTable />
        </div>
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div> */}
      </div>
    </>
  );
}