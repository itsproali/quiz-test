import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllTest from "./pages/Dashboard/AllTest";
import AddNew from "./pages/Dashboard/AddNew";
import Loading from "./components/Loading/Loading";
import TestDetails from "./pages/Dashboard/TestDetails";

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "https://quiz-test-server.onrender.com/auth/login/success",
        { withCredentials: true }
      );
      await setUser(data?.user);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard user={user} /> : <Navigate to="/" />}
        >
          <Route index element={<AllTest email={user?.email} />}></Route>
          <Route
            path="add-new"
            element={<AddNew email={user?.email} />}
          ></Route>
          <Route path=":testId" element={<TestDetails />}></Route>
        </Route>
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  );
}

export default App;
