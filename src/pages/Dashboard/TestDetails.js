import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AddQuestions from "./AddQuestions";
import UpdateQuestion from "./UpdateQuestion";

const TestDetails = () => {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState({});
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://quiz-test-server.onrender.com/tests/details/${testId}`
        );
        setTestDetails(data);
        setRefetch(false);
      } catch (err) {
        Swal.fire("Error!!", "Something went wrong", "error");
      }
    };
    getDetails();
  }, [testId, refetch]);

  return (
    <div className="w-full">
      <div className="rounded-t-lg bg-gray-200 shadow p-4 mx-auto mt-8 w-5/6">
        <label htmlFor="test_title">
          <span className="font-medium">Test Title: </span>
          <input
            type="text"
            name="test_title"
            id="test_title"
            placeholder="Basic Knowledge Test..."
            className="inline-block rounded ml-8 focus:outline-secondary px-4 py-1 w-80 text-2xl font-semibold"
            required
            value={testDetails.testTitle}
            readOnly
            disabled
          />
        </label>
      </div>

      {/* Questions */}
      {testDetails?.questions?.map((question, index) => (
        <UpdateQuestion
          setRefetch={setRefetch}
          key={index}
          index={index}
          question={question}
          testId={testId}
        />
      ))}
      <AddQuestions
        testId={testId}
        no={testDetails?.questions?.length}
      />
    </div>
  );
};

export default TestDetails;
