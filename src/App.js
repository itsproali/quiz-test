import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/auth/login/success",
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
        />
      </Routes>
    </>
  );
}

export default App;
