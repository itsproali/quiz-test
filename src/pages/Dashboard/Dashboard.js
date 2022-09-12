import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiWalletAlt, BiPurchaseTagAlt } from "react-icons/bi";
import {
  MdLibraryAdd,
  MdOutlineCloudDownload,
  MdAccountBox,
  MdTipsAndUpdates,
} from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <div className="h-screen relative lef-0 top-0 flex">
        <div className="w-72 bg-accent pt-20">
          <ul>
            <li className="text-white my-3">
              <Link
                to="/dashboard"
                className="font-semibold px-8 py-3 hover:bg-blue-900 duration-300 flex items-center"
              >
                <BiWalletAlt className="inline-block text-xl mr-3" />
                <span>All Test</span>
              </Link>
            </li>
            <li className="text-white my-3">
              <Link
                to="/dashboard/add-new"
                className="font-semibold px-8 py-3 hover:bg-blue-900 duration-300 flex items-center"
              >
                <MdLibraryAdd className="inline-block text-xl mr-3" />
                <span>ADD New</span>
              </Link>
            </li>
            <li className="text-white my-3">
              <Link
                to="/dashboard"
                className="font-semibold px-8 py-3 hover:bg-blue-900 duration-300 flex items-center"
              >
                <MdOutlineCloudDownload className="inline-block text-xl mr-3" />
                <span>Archived Tests</span>
              </Link>
            </li>
            <li className="text-white my-3">
              <Link
                to="/dashboard"
                className="font-semibold px-8 py-3 hover:bg-blue-900 duration-300 flex items-center"
              >
                <BiPurchaseTagAlt className="inline-block text-xl mr-3" />
                <span>Purchase History</span>
              </Link>
            </li>
            <li className="text-white my-3">
              <Link
                to="/dashboard"
                className="font-semibold px-8 py-3 hover:bg-blue-900 duration-300 flex items-center"
              >
                <MdAccountBox className="inline-block text-xl mr-3" />
                <span>Account</span>
              </Link>
            </li>
            <li className="text-white my-3">
              <Link
                to="/dashboard"
                className="font-semibold px-8 py-3 hover:bg-blue-900 duration-300 flex items-center"
              >
                <MdTipsAndUpdates className="inline-block text-xl mr-3" />
                <span>What's New</span>
              </Link>
            </li>
          </ul>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
