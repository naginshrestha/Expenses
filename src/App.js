import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Registration } from "./Pages/Registration";
import { ForgetPassword } from "./Pages/ForgetPassword";
import { Dashboard } from "./Pages/Dashboard";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./Pages/PrivateRoute";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    fName: "Name",
  });
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="password-reset" element={<ForgetPassword />} />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
