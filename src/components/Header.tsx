import { IoIosMenu } from "react-icons/io";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import { navItem } from "@/constant";

import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <MobileNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <header className="px-4 lg:px-8 border-b border-gray-200/80 h-24 flex items-center max-w-[1490px] mx-auto">
        <div className="flex items-center justify-between w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-300/30 rounded-full p-2.5 block lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <IoIosMenu className="size-6" />
          </motion.button>
          <div className="text-2xl font-bold tracking-wider">
            G I F
          </div>
          <div className="flex items-center gap-x-6">
            <nav className="hidden lg:flex">
              <ul className="flex items-center space-x-7">
                {navItem.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-x-2 lg:bg-white rounded-full lg:pl-2 lg:pr-3 lg:ml-6 lg:py-1.5">
              <button className="bg-[#7478F8] p-2.5 lg:p-1 rounded-full">
                <PiMagnifyingGlassThin className="size-6 lg:size-5 text-white" />
              </button>
              <span className="text-sm hidden lg:inline-flex">
                Search
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-x-4">
            <button className="bg-gray-300/30 rounded-full p-2.5">
              <FaRegUser className="size-4" />
            </button>
            <button className="bg-[#7478F8] rounded-full text-sm text-white py-1.5 pl-4 pr-2 flex items-center gap-x-2">
              Contact Us
              <div className="bg-white rounded-full p-2">
                <MdOutlineArrowOutward className="size-4 text-black" />
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
