import React from 'react'
import photo from "../assets/images/prophoto.jpg"
import { CalendarCheck, CircleHelp, LayoutDashboard, ListCollapse, LogOut } from 'lucide-react'
import { BsExclamationLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IoMdSettings } from 'react-icons/io'
const Sidebar = () => {
  return (
    <div className="bg-[#631D9B] w-64 rounded mt-10 relative shadow-lg">
      {/* Profile Picture */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={photo}
          alt="profile photo"
          className="rounded-full w-20 h-20 border-4 border-white"
        />
      </div>
      {/* Name and Email */}
      <div className="mt-10 text-center text-white">
        <h1 className="text-lg font-bold">Felix Donkor</h1>
        <h2 className="text-sm">felixdonkor340@gmail.com</h2>
      </div>
      {/* Sidebar Content */}
      <div className="pt-5">
        {/* Sidebar content goes here */}
        <nav className="flex flex-col space-y-2 ml-6">
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 text-white hover:bg-white hover:text-[#631D9B] transition rounded-lg px-2 py-2"
          >
            <LayoutDashboard className="text-xl" />
            <span >Dashboard</span>
          </Link>

          <Link
            to="/dashboard/vital-task"
            className="flex items-center space-x-3 text-white hover:bg-white hover:text-[#631D9B] transition rounded-lg px-2 py-2"
          >
            <BsExclamationLg className="text-xl" />
            <span >Vital Task</span>
          </Link>

          <Link
            to="/dashboard/mytask"
            className="flex items-center space-x-3 text-white hover:bg-white hover:text-[#631D9B] transition rounded-lg px-2 py-2"
          >
            <CalendarCheck className="text-xl" />
            <span >My Task</span>
          </Link>

          <Link
            to="/dashboard/task-categories"
            className="flex items-center space-x-3 text-white hover:bg-white hover:text-[#631D9B] transition rounded-lg px-2 py-2"
          >
            <ListCollapse className="text-xl" />
            <span >Task Categories</span>
          </Link>

          <Link
            to="/dashboard/settings"
            className="flex items-center space-x-3 text-white hover:bg-white hover:text-[#631D9B] transition rounded-lg px-2 py-2"
          >
            <IoMdSettings className="text-xl" />
            <span >Settings</span>
          </Link>

          <Link
            to="/dashboard/help"
            className="flex items-center space-x-3 text-white hover:bg-white hover:text-[#631D9B] transition rounded-lg px-2 py-2"
          >
            <CircleHelp className="text-xl" />
            <span>Help</span>
          </Link>

          

        </nav>
        <div className="flex items-center space-x-3 mt-16 text-white hover:bg-white hover:text-[#631D9B] transition rounded-lg px-2 py-2" ><LogOut className='text-xl' />
          <span >Logout</span>
          </div>

      </div>

    </div>


  )
}

export default Sidebar