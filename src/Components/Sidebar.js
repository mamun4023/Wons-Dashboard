import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../Images/logo.svg";
import CategoryIcon from "./Icons/CategoryIcon";
import ChartIcon from "./Icons/Chart";
import TicketIcon from "./Icons/Ticket";
import ScheduleIcon from "./Icons/Schedule";
import CalendarIcon from "./Icons/Calendar";
import MessageIcon from "./Icons/Message";
import NotificationIcon from "./Icons/Notification";
import SettingsIcon from "./Icons/Settings";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <div
        className={` h-screen duration-500 relative border bg-surface-light-neutral ${
          open ? "w-[218px]" : "w-[80px]"
        }`}
      >
        <div
          onClick={() => setOpen((prev) => !prev)}
          className=" absolute -right-2 bg-primary-light p-1 rounded-full px-2 hover:bg-primary-dark"
        >
          <p className="text-xs text-white cursor-pointer">
            {open ? "<" : ">"}
          </p>
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
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md bg-primary-transparent ">
                    <span className="  absolute top-3">
                      <CategoryIcon height={24} width={24} status={true} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-primary-light ${
                      !open && "scale-0"
                    } `}
                  >
                    Dashboard
                  </span>
                </div>
                <div></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md hover:bg-primary-transparent ">
                    <span className="  absolute top-3">
                      <ChartIcon height={24} width={24} status={false} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-text-light ${
                      !open && "scale-0"
                    } `}
                  >
                    Analytics
                  </span>
                </div>
                <div></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md hover:bg-primary-transparent ">
                    <span className="  absolute top-3">
                      <TicketIcon height={24} width={24} status={false} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-text-light ${
                      !open && "scale-0"
                    } `}
                  >
                    Invoice
                  </span>
                </div>
                <div></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md hover:bg-primary-transparent ">
                    <span className="  absolute top-3">
                      <ScheduleIcon height={24} width={24} status={false} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-text-light ${
                      !open && "scale-0"
                    } `}
                  >
                    Schedule
                  </span>
                </div>
                <div></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md hover:bg-primary-transparent ">
                    <span className="  absolute top-3">
                      <CalendarIcon height={24} width={24} status={false} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-text-light ${
                      !open && "scale-0"
                    } `}
                  >
                    Calendar
                  </span>
                </div>
                <div></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md hover:bg-primary-transparent ">
                    <span className="  absolute top-3">
                      <TicketIcon height={24} width={24} status={false} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-text-light ${
                      !open && "scale-0"
                    } `}
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
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md hover:bg-primary-transparent ">
                    <span className=" absolute top-3">
                      <NotificationIcon height={24} width={24} status={false} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-text-light ${
                      !open && "scale-0"
                    } `}
                  >
                    Notification
                  </span>
                </div>
                <div></div>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <div className="flex relative items-center cursor-pointer">
                  <div className="p-6 -left-1 px-8 relative rounded-md hover:bg-primary-transparent ">
                    <span className="  absolute top-3">
                      <SettingsIcon height={24} width={24} status={false} />
                    </span>
                  </div>
                  <span
                    className={`text-[16px] leading-[20px] font-medium  origin-left duration-300 text-text-light ${
                      !open && "scale-0"
                    } `}
                  >
                    Settings
                  </span>
                </div>
                <div></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
