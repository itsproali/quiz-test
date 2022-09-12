import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import AddQuestions from "./AddQuestions";

const AddNew = ({ email }) => {
  const [testTitle, setTestTitle] = useState("");
  const [testId, setTestId] = useState(null);

  const handleCreateTest = async (e) => {
    e.preventDefault();
    const test_title = e.target.test_title.value;
    setTestTitle(test_title);
    const testDetails = { testTitle: test_title, author: email };
    const { data } = await axios
      .post("https://quiz-test-server.onrender.com/tests/new-test", testDetails)
      .catch((err) => Swal.fire("Error", err.message, "error"));
    setTestId(data.insertedId);
  };

  return (
    <div className="w-full">
      <div className="rounded-t-lg bg-gray-200 shadow p-4 mx-auto mt-8 w-5/6">
        <form onSubmit={handleCreateTest}>
          <label htmlFor="test_title">
            <span className="font-medium">Enter a Test Title: </span>
            <input
              type="text"
              name="test_title"
              id="test_title"
              placeholder="Basic Knowledge Test..."
              className="inline-block rounded ml-8 focus:outline-secondary px-4 py-1 w-80"
              required
              disabled={testTitle}
            />
            <input
              type="submit"
              value="Create"
              className="inline-block ml-6 btn btn-accent btn-sm py-1 px-6"
              disabled={testTitle}
            />
          </label>
        </form>
      </div>

      {testTitle && <AddQuestions testId={testId} />}
    </div>
  );
};

export default AddNew;
