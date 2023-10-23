import {React,useState,useEffect} from "react";

// components
import axios from "axios";
import TempCardTable from "components/Cards/TempCardTable.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import Sidebar from "components/Sidebar/Sidebar";
import AdminNavbar from "components/Navbars/AdminNavbar";
import CardStats from "components/Cards/CardStats";
import PendingTable from "components/SS/PendingTable"
import { Link } from "react-router-dom";
export default function Tables() {
  const emailPending = localStorage.getItem('email');
  const [requestData, setRequestData] = useState([]);

  useEffect(() => {
    // Make an API request using axios when the component mounts
    // axios.get(`http://localhost:5000/api/req/${email}`)
    axios
    .get(`http://localhost:5000/api/req/${emailPending}`)
      .then((response) => {
        setRequestData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
        <Sidebar/>
        <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">

              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Requests Pending"
                  statTitle="1"
                  statArrow=""
                  statPercent=""
                  statPercentColor=""
                  statDescripiron=""
                  statIconName="fas fa-book"
                  statIconColor="bg-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="flex flex-wrap mt-4">      
      
        <div className="w-full mb-12 px-4">
          
          <PendingTable requestData={requestData} color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
