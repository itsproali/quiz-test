import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateQuestion = ({ question, testId, index, setRefetch }) => {
  const { option_1, option_2, option_3, option_4 } = question;
  const [qType, setQType] = useState(question.qType);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let quizData = {};
    const question = e.target.question.value;
    if (qType === "Short Text") {
      quizData = { question, qType };
    } else {
      const option_1 = e.target.option_1.value;
      const option_2 = e.target.option_2.value;
      const option_3 = e.target.option_3.value;
      const option_4 = e.target.option_4.value;
      quizData = {
        question,
        qType,
        option_1,
        option_2,
        option_3,
        option_4,
      };
    }
    const { data } = await axios.put(
      "https://quiz-test-server.onrender.com/tests/update",
      {
        quizData,
        testId,
      }
    );
    Swal.fire("Updated", "Question Updated Successfully", "success");
    setRefetch(true);
  };

  // Delete a Question
  const handleDelete = (questionText) => {
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
        const { data } = axios.put(
          "https://quiz-test-server.onrender.com/tests/delete-question",
          { questionText, testId }
        );
        console.log(data);
        Swal.fire("Deleted!", "Quiz has been removed.", "success");
      }
    });
  };
  return (
    <div className="rounded-lg bg-gray-200 shadow-lg py-6 px-2 mx-auto mt-3 w-5/6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between mb-8">
          <label htmlFor="question">
            <span className="font-medium">Question {index + 1}: </span>
            <input
              type="text"
              name="question"
              id="question"
              className="inline-block rounded ml-8 focus:outline-none px-4 py-1 w-60"
              placeholder="What is your Age?"
              required
              value={question.question}
              readOnly
            />
          </label>
          <label htmlFor="question-type">
            <span>Question Type: </span>
            <select
              name="question-type"
              id="question-type"
              onChange={(e) => setQType(e.target.value)}
              className="focus:outline-none rounded py-1 px-2"
            >
              <option value="MCQ">MCQ</option>
              <option value="Short Text">Short Text</option>
            </select>
          </label>
        </div>

        {qType === "Short Text" ? (
          <div className="ml-10">Question Type Short Text Selected</div>
        ) : (
          <div className="ml-10">
            <label htmlFor="option_1" className="block my-4">
              <span>option-1 : </span>
              <input
                type="text"
                name="option_1"
                id="option_1"
                className="inline-block rounded ml-6 focus:outline-none px-4 py-1 w-40"
                placeholder="18"
                required
                defaultValue={option_1}
              />
            </label>
            <label htmlFor="option_2" className="block my-4">
              <span>option-2 : </span>
              <input
                type="text"
                name="option_2"
                id="option_2"
                className="inline-block rounded ml-6 focus:outline-none px-4 py-1 w-40"
                placeholder="24"
                required
                defaultValue={option_2}
              />
            </label>
            <label htmlFor="option_3" className="block my-4">
              <span>option-3 : </span>
              <input
                type="text"
                name="option_3"
                id="option_3"
                className="inline-block rounded ml-6 focus:outline-none px-4 py-1 w-40"
                placeholder="15"
                defaultValue={option_3}
              />
            </label>
            <label htmlFor="option_4" className="block my-4">
              <span>option-4 : </span>
              <input
                type="text"
                name="option_4"
                id="option_4"
                className="inline-block rounded ml-6 focus:outline-none px-4 py-1 w-40"
                placeholder="42"
                defaultValue={option_4}
              />
            </label>
          </div>
        )}
        <input
          type="submit"
          value="Update Question"
          className="btn btn-secondary px-6 py-1 mt-4"
        />
      </form>
      <div className="-mt-12 flex justify-end">
        <button
          className="btn btn-error ml-auto"
          onClick={() => handleDelete(question.question)}
        >
          Delete Question
        </button>
      </div>
    </div>
  );
};

export default UpdateQuestion;
