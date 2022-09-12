import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { BsFillTrashFill, BsCalendarPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const AllTest = ({ email }) => {
  const [allTest, setAllTest] = useState([]);
  const navigate = useNavigate();
  const getAllTest = async () => {
    try {
      const { data } = await axios.get(
        `https://quiz-test-server.onrender.com/tests/all/${email}`
      );
      setAllTest(data);
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };
  getAllTest();

  const handleDeleteTest = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this Test!!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios.delete(
          `https://quiz-test-server.onrender.com/tests/delete/${id}`
        );
        if (data.deletedCount) {
          Swal.fire("Deleted!", "Test has been removed.", "success");
          setAllTest(allTest.filter((test) => test._id !== id));
        } else {
          Swal.fire("Error!!", "Something went wrong", "error");
        }
      }
    });
  };
  return (
    <div className="w-full">
      <Link to="/dashboard/add-new">
        <button className="ml-auto mr-20 mt-8 btn btn-secondary px-10 flex items-center gap-3 text-white">
          <BsCalendarPlus className="text-2xl" />
          <span>Create New Test</span>
        </button>
      </Link>
      <div className="rounded-t-lg bg-gray-200 shadow p-4 mx-auto mt-8 w-5/6">
        <div className="flex items-center justify-between font-medium">
          <h3>NO.</h3>
          <h3>Test Name</h3>
          <h3>Response</h3>
          <h3>Action</h3>
        </div>
      </div>

      <div className="rounded-b-lg bg-gray-200 shadow-lg py-6 px-2 mx-auto mt-3 w-5/6">
        {allTest?.map((test, index) => (
          <div
            className="flex items-center justify-between font-medium bg-white py-2 px-2 my-3"
            key={test._id}
          >
            <h3>{index + 1}</h3>
            <h3
              className="hover:underline cursor-pointer"
              title="Edit Personal Info"
              onClick={() => navigate(`/dashboard/${test._id}`)}
            >
              {test?.testTitle}
            </h3>
            <h3>{test.response || 0}</h3>

            <button
              className="btn btn-ghost rounded-full text-2xl"
              title="Delete The Test"
              onClick={() => handleDeleteTest(test._id)}
            >
              <BsFillTrashFill></BsFillTrashFill>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTest;
