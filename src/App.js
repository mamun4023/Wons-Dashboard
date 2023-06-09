import React from "react";
import Navigations from "./Routes";

import Sidebar from "./Components/Sidebar";

export default function Appss() {
   return (
      <div className="flex bg-surface-light-bg">
         <div>
            <Sidebar />
         </div>
         <div className="flex-1">
            <Navigations />
         </div>
      </div>
   );
}
