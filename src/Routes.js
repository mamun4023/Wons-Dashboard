import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Analytics from "./Pages/Analytics";
import Invoice from "./Pages/Invoice";
import Schedule from "./Pages/Schedule";
import Calandar from "./Pages/Calandar";
import Message from "./Pages/Message";
import Notification from "./Pages/Notification";
import Settings from "./Pages/Settings";

export default function Navigations() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/calendar" element={<Calandar />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/setting" element={<Settings />} />
         </Routes>
      </div>
   );
}
