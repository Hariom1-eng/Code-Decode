import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CampusMap from "./pages/CampusMap";
import Academics from "./pages/Academics";
import AILearning from "./pages/AILearning";
import AiResult from "./pages/AiResult";
import Buses from "./pages/Buses";
import Attendance from "./pages/Attendance";
import AttendanceResult from "./pages/AttendanceResult";
import APIs from "./pages/APIs";
import Admin from "./pages/Admin";
import QRResult from "./pages/QRResult";

function App() {
  return (
    <div className="container mt-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<CampusMap />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/ai" element={<AILearning />} />
        <Route path="/ai/result" element={<AiResult />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance/result" element={<AttendanceResult />} />
        <Route path="/apis" element={<APIs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/qr" element={<QRResult />} />
      </Routes>
    </div>
  );
}

export default App;
