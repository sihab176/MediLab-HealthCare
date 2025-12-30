"use client";
import { useEffect, useState } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaDollarSign,
  FaUserPlus,
  FaEnvelope,
  FaFlask,
  FaPills,
  FaBell,
  FaSearch,
  FaClock,
  FaVideo,
  FaUser,
  FaRegCommentDots,
  FaClipboardList,
} from "react-icons/fa";
import StatsCards from "./StatsCards";
import OverviewChart from "./OverviewChart";
import { useSession } from "next-auth/react";

import { MdOutlineBloodtype } from "react-icons/md";
import Link from "next/link";

const DashboardHomePages = () => {
  const [selectedDate, setSelectedDate] = useState(false);
  const [bloodData, setBloodData] = useState([]);
  const { data: session } = useSession();
  const [showTime, setShowTime] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  console.log("ROLE 👉", session?.user?.name);

  useEffect(() => {
    const bloodDataFun = async () => {
      const res = await fetch("/api/book-blood?limit=6");
      const data = await res.json();
      // console.log("data", data)
      setBloodData(data);
    };
    bloodDataFun();
  }, []);

  // Greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Date & time update
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex lg:flex-row flex-col items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Friday, December 19, 2025</p>
            <h1 className="text-2xl font-bold text-gray-900">
              Good Morning, <span className="text-teal-500">Dr. Sarah</span>
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              You have <span className="font-semibold">4 appointments</span>{" "}
              scheduled for today.
              <span className="text-gray-500">
                {" "}
                2 patients are waiting for their reports.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <FaSearch
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />
            </div>
            <div className="relative inline-block">
              <button
                onClick={() => setSelectedDate(!selectedDate)}
                className="p-2 rounded-lg hover:bg-gray-100 relative"
              >
                <FaClock className="text-gray-600" size={20} />
              </button>
              {selectedDate && (
                <div className="w-40 h-10 absolute top-10 flex justify-center items-center gap-3 right-0 bg-white shadow-md border border-gray-200 rounded-lg px-3 py-1 text-sm text-purple-600">
                  <span className="text-gray-400">TIME: </span>{" "}
                  {getCurrentTime()}
                </div>
              )}
            </div>
          </div>
        </div>
      </header> */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div>
            <p className="text-sm text-gray-500">{currentDate}</p>

            <h1 className="text-2xl font-bold text-gray-900">
              {getGreeting()},
              <span className="text-teal-500"> Dr. {session?.user?.name}</span>
            </h1>

            <p className="text-sm text-gray-600 mt-1">
              You have{" "}
              {/* <span className="font-semibold">{appointments} appointments</span>{" "} */}
              scheduled for today.
              <span className="text-gray-500">
                {" "}
                {/* {pendingReports} patients are waiting for their reports. */}
              </span>
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm 
                         focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <FaSearch
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />
            </div>

            {/* Time */}
            <div className="relative">
              <button
                onClick={() => setShowTime(!showTime)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <FaClock className="text-gray-600" size={20} />
              </button>

              {showTime && (
                <div
                  className="absolute right-0 top-12 w-44 bg-white shadow-md 
                              border border-gray-200 rounded-lg px-4 py-2 
                              text-sm flex items-center justify-between"
                >
                  <span className="text-gray-400">TIME</span>
                  <span className="font-semibold text-purple-600">
                    {currentTime}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/*//? =============================== Stats Cards =========================*/}
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/*//TODO ============================== Weekly Overview Chart ================*/}
          <div className="lg:col-span-3 col-span-1 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <OverviewChart />
          </div>
        </div>

        {/*//TODO ================================= Today's Schedule and Quick Actions ===*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Today's Schedule
                </h3>
                <p className="text-sm text-gray-500">Blood booking scheduled</p>
              </div>
              <button className="text-sm text-teal-500 hover:text-teal-600 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {bloodData.map((appointment) => (
                <div
                  key={appointment._id}
                  className="flex items-center gap-4 p-2 rounded-lg border border-gray-100 hover:border-teal-200 transition-colors"
                >
                  <div
                    className={`w-12 h-12  bg-teal-100 text-blue-400 rounded-lg flex items-center justify-center text-xl font-semibold flex-shrink-0`}
                  >
                    {appointment.bloodType}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {appointment.patientName}
                    </h4>
                    <div className="flex items-center gap-4 mt-1 text-[11px] text-gray-400">
                      <p>{appointment.hospitalName}</p>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-medium
    ${
      appointment.status === "pending"
        ? "bg-amber-100 text-amber-700"
        : appointment.status === "in progress"
        ? "bg-blue-100 text-blue-700"
        : appointment.status === "complete"
        ? "bg-green-100 text-green-700"
        : "bg-gray-100 text-gray-600"
    }
  `}
                  >
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/*// ============================================= Quick Actions ======================================*/}
          <div className="grid grid-cols-2 gap-3">
            {/* Add Doctor */}
            <Link
              href="/Dashboard/addDoctors"
              className="group rounded-2xl bg-teal-50 p-5 shadow-sm border border-gray-100 
             hover:shadow-md transition-all duration-300
             flex flex-col items-center justify-center gap-4 min-h-[180px] hover:bg-teal-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition ">
                <FaUserPlus className="text-teal-600" size={22} />
              </div>

              <p className="text-sm font-semibold text-gray-800 text-center">
                Add Doctor
              </p>
            </Link>
            {/* Schedule */}
            <Link
              href="/Dashboard/addBlood"
              className="group rounded-2xl bg-red-50 p-5 shadow-sm border border-gray-100 
             hover:shadow-md transition-all duration-300
             flex flex-col items-center justify-center gap-4 min-h-[180px] hover:bg-red-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-200 transition">
                <MdOutlineBloodtype className="text-red-600" size={22} />
              </div>

              <p className="text-sm font-semibold text-gray-800 text-center">
                Add Blood
              </p>
            </Link>
            {/* View Feedback */}
            <Link
              href="/Dashboard/feedback"
              className="group rounded-2xl bg-yellow-50 p-5 shadow-sm border border-gray-100 
             hover:shadow-md transition-all duration-300
             flex flex-col items-center justify-center gap-4 min-h-[180px] hover:bg-yellow-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-100 group-hover:bg-yellow-200 transition">
                <FaClipboardList className="text-yellow-600" size={22} />
              </div>

              <p className="text-sm font-semibold text-gray-800 text-center">
                View Feedback
              </p>
            </Link>
            {/* Messages */}
            <Link
              href="/Dashboard/message"
              className="group rounded-2xl bg-purple-50 p-5 shadow-sm border border-gray-100 
             hover:shadow-md transition-all duration-300
             flex flex-col items-center justify-center gap-4 min-h-[180px] hover:bg-purple-100"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 group-hover:bg-purple-200 transition">
                <FaRegCommentDots className="text-purple-600" size={22} />
              </div>

              <p className="text-sm font-semibold text-gray-800 text-center">
                Messages
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHomePages;
