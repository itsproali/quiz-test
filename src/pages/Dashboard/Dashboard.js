import React from "react";

const Dashboard = ({ user }) => {
  return (
    <div>
      <div className="h-screen flex">
        <div className="w-30 bg-accent pt-20">
          <ul>
            <li className="text-white my-3 px-8 py-4 hover:bg-blue-900 duration-300">
              All Quiz
            </li>
            <li className="text-white my-3 px-8 py-4 hover:bg-blue-900 duration-300">
              ADD NEW
            </li>
            <li className="text-white my-3 px-8 py-4 hover:bg-blue-900 duration-300">
              Archived Tests
            </li>
            <li className="text-white my-3 px-8 py-4 hover:bg-blue-900 duration-300">
              Purchase History
            </li>
            <li className="text-white my-3 px-8 py-4 hover:bg-blue-900 duration-300">
              Account
            </li>
            <li className="text-white my-3 px-8 py-4 hover:bg-blue-900 duration-300">
              What's New
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h1 className="text-4xl text-center my-8">
            Welcome to the Dashboard
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
