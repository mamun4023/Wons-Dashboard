import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DropList() {
   const [open, setOpen] = useState(false);
   const [selected, setSelected] = useState("January");
   const month = ["January", "February"];
   return (
      <div className="relative">
         <button
            className="btn flex items-center"
            onClick={() => setOpen((prev) => !prev)}
         >
            <p> {selected} </p>
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
         </button>
         {open && (
            <motion.ul
               className="absolute divide-y bg-white border right-6 shadow-md z-50"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
            >
               {month.map((data) => (
                  <li
                     className=" p-1 px-8 cursor-pointer hover:bg-primary-light hover:text-white"
                     onClick={() => {
                        setSelected(data);
                        setOpen(false);
                     }}
                  >
                     {data}
                  </li>
               ))}
            </motion.ul>
         )}
      </div>
   );
}
