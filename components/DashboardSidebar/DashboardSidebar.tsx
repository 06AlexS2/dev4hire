"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { FaUserEdit, FaTasks, FaCogs } from "react-icons/fa";

const DashboardSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };
  return (
    <Fragment>
      {/**laptop sidebar */}
      <div className="hidden group lg:block fixed inset-y-0 left-0 w-24 hover:w-64 transition-all bg-opacity-10 bg-white backdrop-blur-lg shadow-md">
        <div className="p-6 flex flex-col justify-center h-full">
          {/* Contenido de la barra lateral */}
          <ul className="space-y-2 transition-all">
            <li
              className={`p-2 rounded-md hover:bg-white text-white ${
                activeItem === 0
                  ? "bg-blue-500 text-blue-500"
                  : "hover:text-blue-300"
              } text-2xl hover:bg-opacity-30 transition-colors cursor-pointer`}
              onClick={() => handleItemClick(0)}
            >
              {" "}
              <Link href="/dashboard/account">
                <div className="flex flex-row items-center">
                  <FaUserEdit />
                  <span className="hidden group-hover:flex ml-2 animate-fade-right animate-duration-300">
                    Your account
                  </span>
                </div>
              </Link>
            </li>
            <li
              className={`p-2 rounded-md hover:bg-white text-white ${
                activeItem === 1
                  ? "bg-blue-500 text-blue-500"
                  : "hover:text-blue-300"
              } text-2xl hover:bg-opacity-30 transition-colors cursor-pointer`}
              onClick={() => handleItemClick(1)}
            >
              {" "}
              <Link href="/dashboard/projects">
                <div className="flex flex-row items-center">
                  <FaTasks />
                  <span className="hidden group-hover:flex ml-2 animate-fade-right animate-duration-300">
                    Your projects
                  </span>
                </div>
              </Link>
            </li>
            <li
              className={`p-2 rounded-md hover:bg-white text-white ${
                activeItem === 2
                  ? "bg-blue-500 text-blue-500"
                  : "hover:text-blue-300"
              } text-2xl hover:bg-opacity-30 transition-colors cursor-pointer`}
              onClick={() => handleItemClick(2)}
            >
              {" "}
              <Link href="/dashboard/settings">
                <div className="flex flex-row items-center">
                  <FaCogs />
                  <span className="hidden group-hover:flex ml-2 animate-fade-right animate-duration-300">
                    Settings
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/**tablet-mobile downbar */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 w-full lg:w-18 transition-all bg-opacity-10 bg-white backdrop-blur-lg shadow-md">
        <div className="p-6 flex flex-row justify-center h-auto">
          <ul className="flex flex-row space-x-2 transition-all">
            <li className="p-2 rounded-md hover:bg-white text-white text-center text-lg hover:bg-opacity-30 transition-colors">
              <Link href="/dashboard/account">
                <div className="flex flex-col items-center">
                  <FaUserEdit />
                  <span className="mx-1">Account</span>
                </div>
              </Link>
            </li>
            <li className="p-2 rounded-md hover:bg-white text-white text-lg hover:bg-opacity-30 transition-colors">
              <Link href="/dashboard/projects">
                <div className="flex flex-col items-center">
                  <FaTasks />
                  <span className="mx-1">Projects</span>
                </div>
              </Link>
            </li>
            <li className="p-2 rounded-md hover:bg-white text-white text-lg hover:bg-opacity-30 transition-colors">
              <Link href="/dashboard/settings">
                <div className="flex flex-col items-center">
                  <FaCogs />
                  <span className="mx-1">Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardSidebar;
