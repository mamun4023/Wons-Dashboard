import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../Images/logo.svg";
import CategoryIcon from "./Icons/Category";
import ChartIcon from "./Icons/Chart";
import TicketIcon from "./Icons/Ticket";
import ScheduleIcon from "./Icons/Schedule";
import CalendarIcon from "./Icons/Calendar";
import MessageIcon from "./Icons/Message";
import NotificationIcon from "./Icons/Notification";
import SettingsIcon from "./Icons/Settings";

export default function Sidebar() {
   const [open, setOpen] = useState(false);
   const { pathname } = useLocation();

   console.log(open);

   const isActive = (route) => {
      return pathname === route ? true : false;
   };

   return (
      <div>
         <div
            className={` h-screen duration-500 relative border bg-surface-light-neutral ${
               open ? "w-[218px]" : "w-[80px]"
            }`}
         >
            <div
               onClick={() => setOpen(!open)}
               className=" absolute -right-2 bg-primary-light p-1 cursor-pointer rounded-full px-2 hover:bg-primary-dark"
            >
               <p className="text-xs text-white ">{open ? "<" : ">"}</p>
            </div>
            <div>
               <div className="flex justify-center pt-[30px]">
                  <img src={Logo} alt="Logo" className="w-[60px] h-[60px]" />
               </div>
               <div className="flex justify-center">
                  <p className=" top-6 text-[22px] text-primary-light font-bold">
                     Wons
                  </p>
               </div>
            </div>
            <div className="mt-10">
               <ul>
                  <li>
                     <Link to="/">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300  relative rounded-md ${
                                    isActive("/")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent  `}
                              >
                                 <span className="absolute top-3">
                                    <CategoryIcon
                                       height={24}
                                       width={24}
                                       status={isActive("/")}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Dashboard
                              </span>
                           </div>
                           <div></div>
                        </div>
                     </Link>
                  </li>

                  <li>
                     <Link to="/analytics">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300  relative rounded-md ${
                                    isActive("/analytics")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent  `}
                              >
                                 <span className="absolute top-3">
                                    <ChartIcon
                                       height={24}
                                       width={24}
                                       status={isActive("/analytics")}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/analytics")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Analytics
                              </span>
                           </div>
                           <div></div>
                        </div>
                     </Link>
                  </li>

                  <li>
                     <Link to="/invoice">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300  relative rounded-md ${
                                    isActive("/invoice")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent  `}
                              >
                                 <span className="  absolute top-3">
                                    <TicketIcon
                                       height={24}
                                       width={24}
                                       status={isActive("/invoice")}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/invoice")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Invoice
                              </span>
                           </div>
                           <div></div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/schedule">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300  relative rounded-md ${
                                    isActive("/schedule")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent  `}
                              >
                                 <span className="  absolute top-3">
                                    <ScheduleIcon
                                       height={24}
                                       width={24}
                                       status={isActive("/schedule")}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/schedule")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Schedule
                              </span>
                           </div>
                           <div></div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/calendar">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300  relative rounded-md ${
                                    isActive("/calendar")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent  `}
                              >
                                 <span className="  absolute top-3">
                                    <CalendarIcon
                                       height={24}
                                       width={24}
                                       status={false}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/calendar")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Calendar
                              </span>
                           </div>
                           <div></div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/message">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300  relative rounded-md ${
                                    isActive("/message")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent  `}
                              >
                                 <span className="  absolute top-3">
                                    <MessageIcon
                                       height={24}
                                       width={24}
                                       status={isActive("/calendar")}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/message")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Messages
                              </span>
                           </div>
                           <div
                              className={`p-0 px-2 mr-2 h-[20px] flex items-center duration-200 origin-left rounded-full bg-secondary-transparent ${
                                 !open && "scale-0"
                              } `}
                           >
                              <span
                                 className={`text-[8px] font-regular text-secondary-light`}
                              >
                                 49
                              </span>
                           </div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/notification">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300  relative rounded-md ${
                                    isActive("/notification")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent`}
                              >
                                 <span className=" absolute top-3">
                                    <NotificationIcon
                                       height={24}
                                       width={24}
                                       status={isActive("/notification")}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/notification")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Notification
                              </span>
                           </div>
                           <div></div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/setting">
                        <div className="flex items-center justify-between">
                           <div className="flex relative items-center cursor-pointer">
                              <div
                                 className={` p-6 -left-1 px-8 duration-300 relative rounded-md ${
                                    isActive("/setting")
                                       ? "bg-primary-transparent"
                                       : null
                                 } hover:bg-primary-transparent`}
                              >
                                 <span className="  absolute top-3">
                                    <SettingsIcon
                                       height={24}
                                       width={24}
                                       status={isActive("/setting")}
                                    />
                                 </span>
                              </div>
                              <span
                                 className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 ${
                                    isActive("/setting")
                                       ? " text-primary-light"
                                       : "text-text-light"
                                 } ${!open && "scale-0"} `}
                              >
                                 Settings
                              </span>
                           </div>
                           <div></div>
                        </div>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
